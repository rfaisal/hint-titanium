function HintFbApiWrapper (_hintGlobals)
{
	that=this;
	this.hintGlobals=_hintGlobals;
	this.userInfo=null;
	var fbApi=require('facebook');
	fbApi.appid = this.hintGlobals.fbAppId;
	fbApi.permissions = this.hintGlobals.fbPermissions;
	fbApi.forceDialogAuth = true;
	this.login=function(){
		fbApi.authorize();
	};
	this.logout=function(){
		fbApi.logout();
	};
	this.isLoggedin=function(){
		return fbApi.loggedIn;
	};
	this.addEventListener=fbApi.addEventListener;
	fbApi.addEventListener('login', function(e) {
		if (e.success) {
		    Ti.API.info('Logged In');
		    that.hintGlobals.fbUserId = fbApi.uid;
		    fbApi.fireEvent('fb_api_logged_in', {});
		} 
		else if (e.error) {
			that.hintGlobals.logError('fb_api/login',e.error,null);
		    Ti.API.info(e.error);
		} 
		else if (e.cancelled) {
			that.hintGlobals.logError('fb_api/login','Login Cancelled',null);
		    Ti.API.info('Canceled');
		}
	});
	fbApi.addEventListener('logout', function(e) {
		fbApi.fireEvent('fb_api_logged_out', {});
	});
	this.getUserInfo=function(){
		 fb.requestWithGraphPath('me', {}, 'GET', function(e) {
			    if (e.success) {
			    	var r=JSON.parse(e.result);
			    	that.userInfo={
					    fbuid: r.id, 
					    name: r.name,
					    email: r.email,
					    gender: r.gender
					};
			       fbApi.fireEvent('fb_api_user_info_loaded', that.userInfo);
			    } 
			    else if (e.error) {
			    	that.hintGlobals.logError('fb_api/userinfo',e.error,that.hintGlobals.fbAppId);
		    		Ti.API.info(e.error);
			    } 
			    else {
			    	that.hintGlobals.logError('fb_api/login','Unknown response',that.hintGlobals.fbAppId);
			    	Ti.API.info('Unknown response');
			    }
			});
	}
}
module.exports = HintFbApiWrapper;
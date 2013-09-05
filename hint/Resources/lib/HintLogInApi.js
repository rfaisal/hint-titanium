function HintLogInApi (_hintGlobals)
{
	var api = require('lib/HintBaseApi');
	var self = new api('hint_login',_hintGlobals.apiUrl+'/core/login','GET',_hintGlobals); 
	self.getVars=function(){
		var param = {
    		fuid : self.hintGlobals.fbUserId,
    		secret : self.hintGlobals.clientSecret
    	};
		return param;
	}
	self.logInToHint=function(){
		self.load();
	};
	return self;
}
module.exports = HintLogInApi;
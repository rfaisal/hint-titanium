exports.ApplicationWindow = function() {
	Ti.App.fb.forceDialogAuth = true;
	Ti.App.fb.addEventListener('login', function(e) {
		if (e.success) {
		    Ti.API.info('Logged In');
		    Ti.App.changeCurrent(Ti.App.places_w);
		    Ti.App.fb.requestWithGraphPath('me', {}, 'GET', function(e) {
			    if (e.success) {
			    	var r=JSON.parse(e.result);
			    	Ti.App.user={
					    fbuid: r['id'], // API expects a JSON stringified date
					    name: r.name,
					    email: r.email,
					    gender: r.gender
					};
			        Ti.API.info(Ti.App.user);
			    } else if (e.error) {
			    	Ti.API.info(e.error);
			    } else {
			    	Ti.API.info('Unknown response');
			    }
			});
		} else if (e.error) {
		    Ti.API.info(e.error);
		} else if (e.cancelled) {
		    Ti.API.info('Canceled');
		    }
	});

	var self = Ti.UI.createWindow({  
	    backgroundImage: '/images/HintBackgroundTexture.png'
	});
	var logo=Ti.UI.createLabel({
		backgroundImage:'/images/HintLoginPageLogo.png',
		width:166.5,
		height:65,
		top:80
	});
	var line=Ti.UI.createLabel({
		backgroundImage:'/images/HintLoginPageDepthLine.png',
		width:174.5,
		height:3,
		top:logo.top+logo.height+20
	});
	var lebel1=Ti.UI.createLabel({
		text:'“Never again wonder what might have been.”',
		color:'#9c9990',
	   	font:{
       		fontSize:14,
      		fontFamily: 'Lato'
   		},
		width: 150,
		height:65,
		top:line.top+line.height
	});
	var loginButton=Ti.UI.createButton({
		title:'',
		backgroundImage: '/images/HintFacebookLoginButton.png',
		width:166,
		height:35.5,
		top:lebel1.top+lebel1.height+60
	});
	loginButton.addEventListener('click',function(ev){
		Ti.App.fb.authorize();

	});
	var lebel2=Ti.UI.createLabel({
		text:'(We promise to never post to your Facebook account.)',
		color:'#9c9990',
		width: 150,
	   	font:{
       		fontSize:10,
      		fontFamily: 'Lato'
   		},
		height:65,
		top:loginButton.top+loginButton.height
	});
	self.add(logo);
	self.add(line);
	self.add(lebel1);
	self.add(loginButton);
	self.add(lebel2);
	return self;
};

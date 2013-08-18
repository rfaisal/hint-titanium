exports.ApplicationWindow = function(loggedInListener) {
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
	loginButton.addEventListener('click',loggedInListener);
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

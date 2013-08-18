exports.ApplicationWindow = function() {
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

	var lebel2=Ti.UI.createLabel({
		text:'Copyright © 2013 Hint Interactive, LLC.',
		color:'#9c9990',
	   	font:{
       		fontSize:10,
      		fontFamily: 'Lato'
   		},
		height:65,
		bottom:20
	});
	self.add(logo);
	self.add(line);
	self.add(lebel1);
	self.add(lebel2);
	return self;
};

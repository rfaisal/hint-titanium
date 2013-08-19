exports.ApplicationWindow = function(parent) {
	var self = Ti.UI.createWindow({
    	left: 0,
		zIndex: 10,
		barImage:'/images/HintNavBar.png',
		backgroundImage:'/images/HintBackgroundTexture.png'
	});
	var name=Ti.UI.createLabel({
		text:'UBurger',
		color:'#9c9990',
	   	font:{
       		fontSize:28,
      		fontFamily: 'Amaranth'
   		},
		top:50
	});
	var address=Ti.UI.createLabel({
		text:'111 Summer St',
		color:'#9c9990',
	   	font:{
       		fontSize:24,
      		fontFamily: 'Amaranth'
   		},
		top:name.top+30
	});
	var logo=Ti.UI.createLabel({
		    width:37,
		    height:37,
		    backgroundImage: '/images/HintGenericUserPicture.png',
		    borderWidth:0.75,
		    borderColor:'#e6e5e6',
		    top:address.top+35
	});

	var line=Ti.UI.createLabel({
		backgroundImage:'/images/HintLoginPageDepthLine.png',
		width:174.5,
		height:3,
		top:logo.top+logo.height+15
	});
	var checkinButton=Ti.UI.createButton({
		title:'',
		backgroundImage: '/images/HintCheckInButton.png',
		width:163,
		height:33,
		top:line.top+line.height+15
	});
	checkinButton.addEventListener('click',function(ev){
		var win=require('ui/update_your_look').ApplicationWindow;
		win=new win();
		win.open();
	});
	self.add(name);
	self.add(address);
	self.add(logo);
	self.add(line);
	self.add(checkinButton);
	return self;
};
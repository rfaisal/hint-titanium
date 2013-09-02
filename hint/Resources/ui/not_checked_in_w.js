exports.ApplicationWindow = function() {
	var holder = Ti.UI.createWindow({
		zIndex:10,
		left:0
	});
	//add everything to win1
	var win1 = Ti.UI.createWindow({
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
	win1.add(name);
	win1.add(address);
	win1.add(logo);
	win1.add(line);
	win1.add(checkinButton);
	
	
	var nav=Ti.UI.iPhone.createNavigationGroup({
	   window: win1,
	   left: 0,
	   width: Ti.Platform.displayCaps.platformWidth
	});
	var navMenuBtn = Ti.UI.createButton({
		title: '',
		left: 10,
		width: 46.5,
		height: 38,
		top: 5,
		backgroundImage:'/images/HintMenuButton.png'
	});
	//not used
	var navBackBtn = Ti.UI.createButton({
		title: '',
		left: 10,
		width: 46.5,
		height: 38,
		top: 5,
		backgroundImage:'/images/HintBackButton.png'
	});
	var navMsgBtn = Ti.UI.createButton({
		title: '',
		right: 10,
		width: 46.5,
		height: 38,
		top: 5,
		backgroundImage:'/images/HintMessagesButton.png'
	});
	navMenuBtn.addEventListener('click',function(e){
		if( !Ti.App.isToggled ){
			Ti.App.showLeft();
			Ti.App.current.animate(Ti.App.animateToRight);
			Ti.App.isToggled = true;
		} else {
			Ti.App.current.animate(Ti.App.animateToBegin);
			Ti.App.isToggled = false;
		}
	});
	
	navMsgBtn.addEventListener('click',function(e){
		if( !Ti.App.isToggled){
			Ti.App.showRight();
			Ti.App.current.animate(Ti.App.animateToLeft);
			Ti.App.isToggled = true;
		} else {
			Ti.App.current.animate(Ti.App.animateToBegin);
			Ti.App.isToggled = false;
		}
	});
	nav.add(navMenuBtn);
	nav.add(navMsgBtn);
	holder.add(nav);
	return holder;
};

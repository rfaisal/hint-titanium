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
		backgroundImage:'/images/HintUserDetailPageBackground.png'
	});
	var header=Ti.UI.createLabel({
		backgroundImage:'/images/HintUserDetailPageHeader.png',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		width:Ti.Platform.displayCaps.platformWidth,
		height:61.5,
		top:0,
		text:'“Red Nike Shirt”',
		color:'#ffffff',
	   	font:{
       		fontSize:24,
      		fontFamily: 'Amaranth'
   		},
	});
	var photo=Ti.UI.createLabel({
		backgroundImage:'/images/HintGenericUserPicture.png',
		width:310,
		height:300,
		top:61.5
	});

	var hintBtn=Ti.UI.createLabel({
		backgroundImage:'/images/HintUserDetailPageBottomBar_iPhone4.png',
		width:160,
		height:68.5,
		top:photo.top+photo.height,
		left:0
	});
	hintBtn.addEventListener('click',function(e){
		var win=require('ui/conform_hint').ApplicationWindow;
		win=new win();
		win.open();
	});
	var hintBtnLogo = Ti.UI.createLabel({ 
        backgroundImage:'/images/HintSmallGreenIconWithShadow.png',
		width:23,
		height:22,
		top:18,
		left:25,
		touchEnabled:false,
	});
	var hintBtnLabel = Ti.UI.createLabel({ 
        text: 'Hint', 
        color: '#51cb70',
		top:10, 
        font:{       		
        	fontSize:28,
      		fontFamily: 'Amaranth'
      	},
      	touchEnabled:false,
      	left:75
	});
	var flirtBtn=Ti.UI.createLabel({
		backgroundImage:'/images/HintUserDetailPageBottomBar_iPhone4.png',
		width:160,
		height:68.5,
		top:photo.top+photo.height,
		right:0
	});
	flirtBtn.addEventListener('click',function(e){
		var win=require('ui/conform_flirt').ApplicationWindow;
		win=new win();
		win.open();
	});
	var flirtBtnLogo = Ti.UI.createLabel({ 
        backgroundImage:'/images/HintSmallPinkIconWithShadow.png',
		width:23,
		height:22,
		top:18,
		left:25,
		touchEnabled:false,
	});
	var flirtBtnLabel = Ti.UI.createLabel({ 
        text: 'Flirt', 
        color: '#fc72b8',
		top:10, 
        font:{       		
        	fontSize:28,
      		fontFamily: 'Amaranth'
      	},
      	touchEnabled:false,
      	left:75
	});
	hintBtn.add(hintBtnLogo);
	hintBtn.add(hintBtnLabel);
	flirtBtn.add(flirtBtnLogo);
	flirtBtn.add(flirtBtnLabel);

	win1.add(header);
	win1.add(photo);
	win1.add(hintBtn);
	win1.add(flirtBtn);

	
	
	
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
	navBackBtn.addEventListener('click',function(e){
		Ti.App.changeCurrent(Ti.App.checked_in_w);
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
	nav.add(navBackBtn);
	nav.add(navMsgBtn);
	holder.add(nav);
	return holder;
};

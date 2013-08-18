exports.ApplicationWindow = function(navWin, parent,leftMenu,rightMenu) {
	var self=Ti.UI.iPhone.createNavigationGroup({
	   window: navWin,
	   left: 0,
	   width: Ti.Platform.displayCaps.platformWidth
	});
	var animateToLeft = Ti.UI.createAnimation({
		left: -Ti.Platform.displayCaps.platformWidth*0.75,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var animateToRight	= Ti.UI.createAnimation({
		left: Ti.Platform.displayCaps.platformWidth*0.75,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var animateToLeft1 = Ti.UI.createAnimation({
		left: Ti.Platform.displayCaps.platformWidth*0.25,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var animateToBegin = Ti.UI.createAnimation({
		left: 0,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var animateToEnd = Ti.UI.createAnimation({
		left: Ti.Platform.displayCaps.platformWidth,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});	

	var navMenuBtn = Ti.UI.createButton({
		title: '',
		left: 10,
		width: 46.5,
		height: 38,
		top: 5,
		backgroundImage:'/images/HintMenuButton.png'
	});
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
	var isToggled = false;
	navMenuBtn.addEventListener('click',function(e){
		if( !isToggled ){
			parent.animate(animateToRight);
			leftMenu.animate(animateToBegin);
			//rightMenu.animate(animateToEnd);
			isToggled = true;
		} else {
			parent.animate(animateToBegin);
			leftMenu.animate(animateToLeft);
			//rightMenu.animate(animateToEnd);
			isToggled = false;
		}
	});
	
	navMsgBtn.addEventListener('click',function(e){
		if( !isToggled ){
			parent.animate(animateToLeft);
			rightMenu.animate(animateToLeft1);
			isToggled = true;
		} else {
			parent.animate(animateToBegin);
			rightMenu.animate(animateToEnd);
			isToggled = false;
		}
	});
	self.add(navMenuBtn);
	self.add(navMsgBtn);
	return self;
};

exports.ApplicationWindow = function(page, parent) {
	var self=Ti.UI.iPhone.createNavigationGroup({
	   window: page,
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
	animateToBegin.addEventListener('complete', function(){ 
		    if (Ti.App.home_w.children) {
		        for (var c = Ti.App.home_w.children.length - 1; c >= 0; c--) {
		        	if(Ti.App.home_w.children[c] == Ti.App.left_w){
		        		Ti.App.home_w.remove(Ti.App.left_w);
		        		Ti.API.info("left window removed");
		        	}	
		        	else if(Ti.App.home_w.children[c] == Ti.App.right_w){
		        		Ti.App.home_w.remove(Ti.App.right_w);
		        		Ti.API.info("right window removed");
		        	}
		        }
		    }
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
			//Ti.App.left_w.open();
			Ti.App.home_w.add(Ti.App.left_w);
			parent.animate(animateToRight);
		//	Ti.App.left_w.animate(animateToBegin);
			isToggled = true;
		} else {
		//	Ti.App.left_w.close();
			parent.animate(animateToBegin);
		
		//	Ti.App.left_w.animate(animateToLeft);
			isToggled = false;
		}
	});
	
	navMsgBtn.addEventListener('click',function(e){
		if( !isToggled ){
			Ti.App.home_w.add(Ti.App.right_w);
			parent.animate(animateToLeft);
			//rightMenu.animate(animateToLeft1);
			isToggled = true;
		} else {
			parent.animate(animateToBegin);
		//	rightMenu.animate(animateToEnd);
			isToggled = false;
		}
	});
	self.add(navMenuBtn);
	self.add(navMsgBtn);
	return self;
};

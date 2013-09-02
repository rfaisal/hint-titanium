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
	
	var animateToEnd = Ti.UI.createAnimation({
		left: Ti.Platform.displayCaps.platformWidth,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});	
	var animateToBegin = Ti.UI.createAnimation({
		left: 0,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	animateToBegin.addEventListener('complete', function(){ 
	  /*  if (super_parent.children) {
	        for (var c = super_parent.children.length - 1; c >= 0; c--) {
	        	if(super_parent.children[c] == Ti.App.left_w){
	        		super_parent.remove(Ti.App.left_w);
	        		Ti.API.info("left window removed");
	        	}	
	        	else if(super_parent.children[c] == Ti.App.right_w){
	        		super_parent.remove(Ti.App.right_w);
	        		Ti.API.info("right window removed");
	        	}
	        }
		}*/
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
		if( isToggled ){
		//	super_parent.add(Ti.App.left_w);
			parent.animate(animateToRight);
			isToggled = true;
		} else {
			parent.animate(animateToBegin);
			isToggled = false;
		}
	});
	
	navMsgBtn.addEventListener('click',function(e){
		if( isToggled){
			//super_parent.add(Ti.App.right_w);
			parent.animate(animateToLeft);
			isToggled = true;
		} else {
			parent.animate(animateToBegin);
			isToggled = false;
		}
	});
	self.add(navMenuBtn);
	self.add(navMsgBtn);
	return self;
};

(function() {
	if (Ti.version < 1.8 ) {
		alert('Sorry - this application requires Titanium Mobile SDK 1.8 or later');
	}
	else {
		Ti.App.user= new Object();
		 Ti.App.fb = require('facebook');
		 Ti.App.fb.appid = 536422093082909;
		 Ti.App.fb.permissions = ['email'];
		Ti.App.animateToLeft = Ti.UI.createAnimation({
			left: -Ti.Platform.displayCaps.platformWidth*0.75,
			curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
			duration: 200
		});
		Ti.App.animateToRight	= Ti.UI.createAnimation({
			left: Ti.Platform.displayCaps.platformWidth*0.75,
			curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
			duration: 200
		});
		Ti.App.animateToBegin = Ti.UI.createAnimation({
			left: 0,
			curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
			duration: 200
		});
		Ti.App.isToggled=false;
		Ti.App.left_right_w = require('ui/left_right_menu').ApplicationWindow;
		Ti.App.left_right_w= new Ti.App.left_right_w();
		Ti.App.left_right_w.open();
		Ti.App.showLeft=function(){
			Ti.API.info("showLeft function");
			Ti.App.left_right_w.left=0;
		}
		Ti.App.showRight=function(){
			Ti.API.info("showRight function");
			Ti.App.left_right_w.left=-0.5*Ti.Platform.displayCaps.platformWidth;
		}
		Ti.App.changeCurrent=function(new_w){
			var animateToBegin = Ti.UI.createAnimation({
				left: 0,
				curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
				duration: 200
			});
			animateToBegin.addEventListener('complete', function(){ 
				if(Ti.App.current !== new_w){
					new_w.open();
					Ti.App.current.close();
					Ti.App.current=new_w;
				}
			});
			Ti.App.current.animate(animateToBegin);
			Ti.App.isToggled = false;
		};
	//	Ti.App.app_settings_w = require('ui/app_settings_w').ApplicationWindow;
	//	Ti.App.app_settings_w= new Ti.App.app_settings_w();
		Ti.App.login = require('ui/login').ApplicationWindow;
		Ti.App.login= new Ti.App.login();
		Ti.App.hint_flirt_w = require('ui/hint_flirt_w').ApplicationWindow;
		Ti.App.hint_flirt_w= new Ti.App.hint_flirt_w();
		Ti.App.not_checked_in_w = require('ui/not_checked_in_w').ApplicationWindow;
		Ti.App.not_checked_in_w= new Ti.App.not_checked_in_w();
		Ti.App.checked_in_w = require('ui/checked_in_w').ApplicationWindow;
		Ti.App.checked_in_w= new Ti.App.checked_in_w();
		Ti.App.places_w = require('ui/places_w').ApplicationWindow;
		Ti.App.places_w= new Ti.App.places_w();
		
		
		Ti.App.current=Ti.App.login;
		Ti.App.current.open();
		return;
		Ti.App.base=Ti.UI.createWindow({  
		});
		Ti.App.not_checked_in_w=require('ui/base').ApplicationWindow;
		Ti.App.not_checked_in_w = new Ti.App.not_checked_in_w('notcheckedin');
		Ti.App.home_w=require('ui/base').ApplicationWindow;
		Ti.App.home_w = new Ti.App.home_w('home');

		Ti.App.remove_all_from_base=function(newbase){
			if(Ti.App.base.children){
		        for (var c = Ti.App.base.children.length - 1; c >= 0; c--) {
        			Ti.App.base.remove(Ti.App.base.children[c]);
        			Ti.API.info("Child "+c+" is removed from base");
		        }
	       	}
	        Ti.App.base.add(newbase);
		};
		

	//	Ti.App.left_w.open();
		Ti.App.right_w = require('ui/right_menu').ApplicationWindow;
		Ti.App.right_w = new Ti.App.right_w();
	//	Ti.App.not_checked_in_w.open();
		Ti.App.remove_all_from_base(Ti.App.not_checked_in_w);
		Ti.App.base.open();
		/*var win = require('ui/login').ApplicationWindow;
		var loggedInCallback=function(ev){
			win.close();
			win=require('ui/base').ApplicationWindow;
			win = new win('home');
			win.open();
		};
		win = new win(loggedInCallback);
		win.open();*/
	}
})();
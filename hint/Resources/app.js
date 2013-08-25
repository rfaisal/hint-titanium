(function() {
	if (Ti.version < 1.8 ) {
		alert('Sorry - this application requires Titanium Mobile SDK 1.8 or later');
	}
	else {

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
		
		Ti.App.left_w = require('ui/left_menu').ApplicationWindow;
		Ti.App.left_w= new Ti.App.left_w();
		Ti.App.right_w = require('ui/right_menu').ApplicationWindow;
		Ti.App.right_w = new Ti.App.right_w();
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
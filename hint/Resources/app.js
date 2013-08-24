(function() {
	if (Ti.version < 1.8 ) {
		alert('Sorry - this application requires Titanium Mobile SDK 1.8 or later');
	}
	else {
		Ti.App.left_w = require('ui/left_menu').ApplicationWindow;
		Ti.App.left_w= new Ti.App.left_w();
		Ti.App.right_w = require('ui/right_menu').ApplicationWindow;
		Ti.App.right_w = new Ti.App.right_w();
		Ti.App.base=Ti.UI.createWindow({  
		});
		Ti.App.home_w=require('ui/base').ApplicationWindow;
		Ti.App.home_w = new Ti.App.home_w('home');
		//Ti.App.base.add(Ti.App.left_w);
		Ti.App.base.add(Ti.App.home_w);
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
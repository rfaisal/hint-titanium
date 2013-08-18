(function() {
	if (Ti.version < 1.8 ) {
		alert('Sorry - this application requires Titanium Mobile SDK 1.8 or later');
	}
	else {
		var win = require('ui/login').ApplicationWindow;
		var loggedInCallback=function(ev){
			win.close();
			win=require('ui/base').ApplicationWindow;
			win = new win();
			win.open();
		};
		win = new win(loggedInCallback);
		win.open();
	//	var win=require('ui/home').ApplicationWindow;
	//	win= new win();
	//	win.open();
	}
})();
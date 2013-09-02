exports.ApplicationWindow = function() {
	var self = Ti.UI.createWindow({  
	    left:0,
	    width: Ti.Platform.displayCaps.platformWidth*1.5,
		zIndex: 1
	});
	var left = require('ui/left_menu').ApplicationWindow;
	left= new left();
	var right = require('ui/right_menu').ApplicationWindow;
	right= new right();
	self.add(left);
	self.add(right);
	return self;
};

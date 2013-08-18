exports.ApplicationWindow = function() {
	
	var leftMenu=	require('ui/left_menu').ApplicationWindow;
	leftMenu=new leftMenu();
	var rightMenu	=require('ui/right_menu').ApplicationWindow;
	rightMenu=new rightMenu();
	var navWin=require('ui/home').ApplicationWindow;
	navWin=new navWin();
	var self = Ti.UI.createWindow({  
		title:'Hint',
		backgroundColor:'#fff'
	});
	var navWin1 = Ti.UI.createWindow({
    	left: 0,
		zIndex: 10
	});
	var nav=require('ui/nav').ApplicationWindow;
	self.add(leftMenu);
	navWin1.add(new nav(navWin,navWin1,leftMenu,rightMenu));
	self.add(navWin1);
	self.add(rightMenu);
	return self;
};
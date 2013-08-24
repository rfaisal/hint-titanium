exports.ApplicationWindow = function(page_name) {

//	var rightMenu	=require('ui/right_menu').ApplicationWindow;
//	rightMenu=new rightMenu();

	var self = Ti.UI.createWindow({  
		title:'Hint',
		backgroundColor:'#fff',
		zIndex:10
	});
//	var leftMenu=	require('ui/left_menu').ApplicationWindow;
//	if(page_name!='home')
//		leftMenu=new leftMenu(self);
//	else
//		leftMenu=new leftMenu(null);
	var holder = Ti.UI.createWindow({
		zIndex:10
	});
	var page=require('ui/'+page_name).ApplicationWindow;
	page=new page();
	var nav=require('ui/nav').ApplicationWindow;
	nav=new nav(page,holder);
	holder.add(nav);
//	self.add(Ti.App.left_w);
	self.add(holder);
	//self.add(rightMenu);
	return self;
};
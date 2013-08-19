exports.ApplicationWindow = function(page_name) {

	var rightMenu	=require('ui/right_menu').ApplicationWindow;
	rightMenu=new rightMenu();

	var self = Ti.UI.createWindow({  
		title:'Hint',
		backgroundColor:'#fff'
	});
	var leftMenu=	require('ui/left_menu').ApplicationWindow;
	if(page_name!='home')
		leftMenu=new leftMenu(self);
	else
		leftMenu=new leftMenu(null);
	var holder = Ti.UI.createWindow({});
	var page=require('ui/'+page_name).ApplicationWindow;
	page=new page();
	var nav=require('ui/nav').ApplicationWindow;
	nav=new nav(page,holder,leftMenu,rightMenu);
	holder.add(nav);
	self.add(leftMenu);
	self.add(holder);
	self.add(rightMenu);
	return self;
};
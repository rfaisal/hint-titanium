exports.ApplicationWindow = function(page_name) {
	var self = Ti.UI.createWindow({  
		title:'Hint',
		backgroundColor:'#fff',
		zIndex:10
	});
	var holder = Ti.UI.createWindow({
		zIndex:10,
		id:'holder',
		left:0
	});
	var page=require('ui/'+page_name).ApplicationWindow;
	page=new page();
	var nav=require('ui/nav').ApplicationWindow;
	nav=new nav(page,holder);
	holder.add(nav);
	self.add(holder);
	return self;
};
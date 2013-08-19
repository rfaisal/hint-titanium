exports.ApplicationWindow = function() {
	var self = Ti.UI.createWindow({
		left: 0,
		zIndex: 10,
		barImage:'/images/HintNavBar.png',
		backgroundImage:'/images/HintBackgroundTexture.png'
	});
	var name=Ti.UI.createLabel({
		text:'UBurger',
		color:'#9c9990',
	   	font:{
       		fontSize:28,
      		fontFamily: 'Amaranth'
   		},
		top:0
	});
	var address=Ti.UI.createLabel({
		text:'111 Summer St',
		color:'#9c9990',
	   	font:{
       		fontSize:24,
      		fontFamily: 'Amaranth'
   		},
		top:name.top+30
	});
	var n=5;
	var data=new Array();
	for (var i = 0; i < n; i++ ) { 
		var pic = Ti.UI.createLabel({
		    left: 1,
		    width:156,
		    height:156,
		    backgroundImage: '/images/HintGenericUserPicture.png',
		});
		data[i]= Ti.UI.createTableViewRow(
		 {
		    height:158,
		    width:158,
		    backgroundColor:'#fd8050'
		 });
		 data[i].add(pic);
	}

	var tableView1	= Ti.UI.createTableView(
		{ 
			data: data,
			left:0,
			top:60,
			height:158*n,
			width: 158,
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
		});
			var data=new Array();
	for (var i = 0; i < n; i++ ) { 
		var pic = Ti.UI.createLabel({
		    left: 1,
		    width:156,
		    height:156,
		    backgroundImage: '/images/HintGenericUserPicture.png',
		});
		data[i]= Ti.UI.createTableViewRow(
		 {
		    height:158,
		    width:158,
		    backgroundColor:'#fd8050'
		 });
		 data[i].add(pic);
	}
		var tableView2	= Ti.UI.createTableView(
		{ 
			data: data,
			left:158,
			top:60,
			height:158*n,
			width: 158,
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
		});
	self.add(name);
	self.add(address);
	self.add(tableView1);
	self.add(tableView2);
	return self;
};
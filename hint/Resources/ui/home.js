exports.ApplicationWindow = function() {
	var self = Ti.UI.createWindow({
    	left: 0,
		zIndex: 10,
		barImage:'/images/HintNavBar.png'
	});
	var animateToBegin = Ti.UI.createAnimation({
		left: 0,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var search=Ti.UI.createSearchBar({
		barColor:'#fff',
		hintText: 'Search Places, Venue Types', 
	    height:44.5,
	   	font:{
       		fontSize:8,
      		fontFamily: 'Lato'
   		},
	    width:Ti.Platform.displayCaps.platformWidth,
	    top:0
	});
	// create table view
	var data=new Array();
	for (var i = 0; i < 11; i++ ) { 
		data[i]= new Object();
		switch(i%3){
			case 0:
				data[i].backgroundImage = '/images/HintOrangeTableViewCell.png';
				break;
			case 1:
				data[i].backgroundImage = '/images/HintGreenTableViewCell.png';
				break;
			case 2:
				data[i].backgroundImage = '/images/HintPinkTableViewCell.png';
				break;
		}
		data[i].width=Ti.Platform.displayCaps.platformWidth;
	}
	var tableview = Titanium.UI.createTableView({
		data:data,
		top:44.5,
		separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
		
	});
	tableview.addEventListener('click',function(ev){
		Ti.App.remove_all_from_base(Ti.App.not_checked_in_w);
	});
	self.add(search);
	self.add(tableview);
	return self;
};
exports.ApplicationWindow = function() {
	

	var self = Ti.UI.createWindow({  
	    backgroundImage: '/images/HintBackgroundTexture.png',
	    left:0,//-Ti.Platform.displayCaps.platformWidth*0.75,
	    width: Ti.Platform.displayCaps.platformWidth*0.75,
		zIndex: 1
	});
	var header=Ti.UI.createLabel({
		backgroundImage:'/images/HintLeftSidebarHeader.png',
		width:Ti.Platform.displayCaps.platformWidth*0.75,
		height:44,
		top:0,
		left:0
	});
	var animateToBegin = Ti.UI.createAnimation({
		left: 0,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	animateToBegin.addEventListener('complete', function(){ 
	    Ti.App.remove_all_from_base(Ti.App.home_w);
	});
	var data=new Array();
	for (var i = 0; i < 4; i++ ) { 
		var logo = Ti.UI.createLabel({
		    left: 20
		});
		var label = Ti.UI.createLabel({
		    color: '#9c9990',
		    font: {fontSize:16,fontFamily: 'Lato'},
		    height:44,
		    left: 60
		});
		data[i]= Ti.UI.createTableViewRow(
		 {
		    backgroundImage:'/images/HintLeftSidebarCell.png',
		    
		 });
		switch(i){
			case 0:
				logo.backgroundImage = '/images/HintNearbyPlacesIcon.png';
				logo.height=23.5;
				logo.width=16.5;
				label.text = 'Nearby Places';
				data[i].addEventListener('click',function(ev){
					//Ti.App.showLeft();
					Ti.App.changeCurrent(Ti.App.places_w);
				});
			/*	data[i].addEventListener('click',function(ev){
					var t=Ti.App.not_checked_in_w;
					if(t.children){
						for (var c = t.children.length - 1; c >= 0; c--) {
				        	if(t.children[c].id && t.children[c].id=='holder'){
				        		t.children[c].animate(animateToBegin);
				        	}	
				        
				        }
					}
				});*/
				break;
			case 1:
				logo.backgroundImage = '/images/HintCurrentLookIcon.png';
				logo.height=17;
				logo.width=25.5;
				logo.left=17;
				label.text = 'Current Look';
				
				break;
			case 2:
				logo.backgroundImage = '/images/HintAppSettingsIcon.png';
				logo.height=20.5;
				logo.width=20.5;
				label.text = 'App Settings';
				data[i].addEventListener('click',function(ev){
					//Ti.App.changeCurrent(Ti.App.app_settings_w);
				});
				break;
			case 3:
				logo.backgroundImage = '/images/HintMyEventsIcon.png';
				logo.height=20.5;
				logo.width=20.5;
				label.text = 'My Events';
				break;
		}

		 data[i].add(logo);
		 data[i].add(label);

	}

	var tableView1	= Ti.UI.createTableView(
		{ 
			data: data,
			left:0,
			top:44,
			height:44*4,
			width: Ti.Platform.displayCaps.platformWidth*0.75,
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
		});
	var logoutButton=Ti.UI.createButton({
		title:'',
		backgroundImage: '/images/HintLogoutButton.png',
		width:163,
		height:33
	});
	logoutButton.addEventListener('click',function(ev){
		//Ti.App.changeCurrent(Ti.App.login);
			var HintFacade=require('lib/HintFacade');
			HintFacade.addEventListener('logged_out',function(){
				Ti.App.changeCurrent(Ti.App.login);
			});
			HintFacade.logout();
	});
	data1= new Array();
	data1[0]= Ti.UI.createTableViewRow(
		 {
		    backgroundImage:'/images/HintLeftSidebarLogoutCell.png',
		    height:44
		 });
	data1[0].add(logoutButton);
	var tableView2	= Ti.UI.createTableView(
		{ 
			data: data1,
			left:0,
			bottom:0,
			height:44,
			width: Ti.Platform.displayCaps.platformWidth*0.75,
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
		});
	var shadow=Ti.UI.createLabel({
		text:'',
		width: 2,
		height:Ti.Platform.displayCaps.platformHeight,
		top:0,
		left:Ti.Platform.displayCaps.platformWidth*0.75-2,
		backgroundColor:'#000',
		opacity:0.33
	});
	self.add(header);
	self.add(tableView1);
	self.add(tableView2);
	//self.add(shadow)
	return self;
};

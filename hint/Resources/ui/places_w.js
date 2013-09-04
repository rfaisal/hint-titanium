exports.ApplicationWindow = function() {
	
	Titanium.Geolocation.getCurrentPosition(function(e)
			{
				if (!e.success || e.error)
				{
					currentLocation.text = 'error: ' + JSON.stringify(e.error);
					Ti.API.info("Code translation: "+translateErrorCode(e.code));
					alert('error ' + JSON.stringify(e.error));
					return;
				}
		
			//	var longitude = e.coords.longitude;
			//	var latitude = e.coords.latitude;
			//	var query = 'SELECT name, page_id, categories, description, general_info,type FROM page WHERE page_id IN (SELECT page_id FROM place WHERE distance(latitude, longitude, "'+latitude+'", "'+longitude+'") < 1000)';
		//var q='SELECT name, page_id, type,location FROM page WHERE page_id IN (SELECT page_id FROM place WHERE distance(latitude, longitude, "'+latitude+'", "'+longitude+'") < 1000 ORDER BY distance(latitude, longitude, "'+latitude+'", "'+longitude+'")) AND (strpos(lower(type),lower("REsT")) >=0 OR strpos(lower(type),lower("BAR")) >=0)';
		//Ti.App.fb.request('fql.query', {query: q}, function(r) {
		//	Ti.API.info(JSON.parse(r.result));
		//});
		var hint_facade=require('lib/hint_facade');
		hint_facade.hint_globals.session_id = '4fepkqdjccgc5h1nhobifqq9g0';
		hint_facade.hint_venues_api.lat = e.coords.latitude;
		hint_facade.hint_venues_api.lng = e.coords.longitude;
		Ti.API.info(hint_facade.hint_globals.session_id);
		hint_facade.hint_venues_api.onLoad=function(ep){
			Ti.API.info(hint_facade.hint_venues_api.response);
			Ti.API.info(hint_facade.hint_globals.session_id);
		};
		hint_facade.hint_venues_api.getVenues();
		/*var url = "http://localhost/core/venues";
		var xhr = Ti.Network.createHTTPClient({
		    onload: function(e) {
		        // this.responseText holds the raw text return of the message (used for JSON)
		        // this.responseXML holds any returned XML (used for SOAP web services)
		        // this.responseData holds any returned binary data
		        Ti.API.info(JSON.parse(this.responseText));
		        alert('success');
		    },
		    onerror: function(e) {
		        Ti.API.debug(e.error);
		        alert('error');
		    },
		    timeout:5000
		});
		 
		xhr.open("GET", url);
		xhr.send();*/
			});
	var holder = Ti.UI.createWindow({
		zIndex:10,
		left:0
	});
	//add everything to win1
	var win1 = Ti.UI.createWindow({
    	left: 0,
		zIndex: 10,
		barImage:'/images/HintNavBar.png'
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
		Ti.App.changeCurrent(Ti.App.not_checked_in_w);
	});
	win1.add(search);
	win1.add(tableview);
	var nav=Ti.UI.iPhone.createNavigationGroup({
	   window: win1,
	   left: 0,
	   width: Ti.Platform.displayCaps.platformWidth
	});
	var navMenuBtn = Ti.UI.createButton({
		title: '',
		left: 10,
		width: 46.5,
		height: 38,
		top: 5,
		backgroundImage:'/images/HintMenuButton.png'
	});
	//not used
	var navBackBtn = Ti.UI.createButton({
		title: '',
		left: 10,
		width: 46.5,
		height: 38,
		top: 5,
		backgroundImage:'/images/HintBackButton.png'
	});
	var navMsgBtn = Ti.UI.createButton({
		title: '',
		right: 10,
		width: 46.5,
		height: 38,
		top: 5,
		backgroundImage:'/images/HintMessagesButton.png'
	});
	navMenuBtn.addEventListener('click',function(e){
		if( !Ti.App.isToggled ){
			Ti.App.showLeft();
			Ti.App.current.animate(Ti.App.animateToRight);
			Ti.App.isToggled = true;
		} else {
			Ti.App.current.animate(Ti.App.animateToBegin);
			Ti.App.isToggled = false;
		}
	});
	
	navMsgBtn.addEventListener('click',function(e){
		if( !Ti.App.isToggled){
			Ti.App.showRight();
			Ti.App.current.animate(Ti.App.animateToLeft);
			Ti.App.isToggled = true;
		} else {
			Ti.App.current.animate(Ti.App.animateToBegin);
			Ti.App.isToggled = false;
		}
	});
	nav.add(navMenuBtn);
	nav.add(navMsgBtn);
	holder.add(nav);
	return holder;
};

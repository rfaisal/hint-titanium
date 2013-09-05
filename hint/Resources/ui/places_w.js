exports.ApplicationWindow = function() {
	var HintFacade=require('lib/HintFacade');
	HintFacade.addEventListener('geo_location_received',function(e){
		HintFacade.hintVenuesApi.lat=e.lat;
		HintFacade.hintVenuesApi.lng=e.lng;
		HintFacade.hintVenuesApi.getVenues();
	});
	HintFacade.hintVenuesApi.addEventListener('api_loaded',function(e){
		refresh();
	});
	var refresh=function(){
		if(HintFacade.hintVenuesApi.response != null && HintFacade.hintVenuesApi.response.result != null){
			var list=HintFacade.hintVenuesApi.response.result;
			var HintUtils = require ('/lib/HintUtils');
			list.sort( HintUtils.sortFunctionByProperty("distance") );
			
			var data=new Array();
			for (var i = 0; i < list.length; i++) { 			   
				var logo = Ti.UI.createImageView({
				    left: 10,
				    width:40,
				    height:40,
				    image:list[i]['icon'],
				    borderWidth:0.5,
				    borderColor:'#e6e5e6'
				});
			/*	Titanium.UI.({
				        url:list[i].icon,
				        defaultImage:loaderimage
				});*/
		
				var label = Ti.UI.createLabel({
				    color: '#9c9990',
				    font: {fontSize:18,fontFamily: 'Lato'},
				    height:20,
				    left: 75,
				    top:5,
				    text: list[i].name
				});
				var label1 = Ti.UI.createLabel({
				    color: '#9c9990',
				    font: {fontSize:14,fontFamily: 'Lato'},
				    height:20,
				    left: 75,
				    top:30,
				    text: list[i].address + ' ('+(Math.round( 0.000621371 * 10 * list[i].distance) / 10)+' mi)'
				});
				
				 data[i]= Ti.UI.createTableViewRow(
				 {
				    width:Ti.Platform.displayCaps.platformWidth,
				    height:55.5
				 });
				switch(i%3){
					case 0:
						data[i].backgroundImage='/images/HintOrangeTableViewCell.png';
						break;
					case 1:
						data[i].backgroundImage='/images/HintGreenTableViewCell.png';
						break;
					case 2:
						data[i].backgroundImage='/images/HintPinkTableViewCell.png';
						break;
				}
		
				//data[i].add(label0);
				 data[i].add(logo);
				 data[i].add(label);
				 data[i].add(label1); 
			}
			tableview.setData(data);
		}
	};
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
		backgroundImage:'/images/HintSearchBarSmall.png',
	   	font:{
       		fontSize:8,
      		fontFamily: 'Lato'
   		},
	    width:Ti.Platform.displayCaps.platformWidth,
	    top:0
	});
	search.addEventListener('return', function(e) { 
		HintFacade.hintVenuesApi.cat_search=e.value;
		HintFacade.hintGeoApiWrapper.getLocation();
		search.blur(); 
	}); 
	search.addEventListener('cancel', function(e) { 
		search.blur(); 
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

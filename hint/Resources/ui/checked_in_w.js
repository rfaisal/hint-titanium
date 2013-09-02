exports.ApplicationWindow = function() {
	var holder = Ti.UI.createWindow({
		zIndex:10,
		left:0
	});
	//add everything to win1
	var win1 = Ti.UI.createWindow({
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
		tableView1.addEventListener('click',function(ev){
			Ti.App.changeCurrent(Ti.App.hint_flirt_w);
		});
		tableView2.addEventListener('click',function(ev){
			Ti.App.changeCurrent(Ti.App.hint_flirt_w);
		});
	var bottom = Ti.UI.createWindow({
    	left: 0,
		backgroundImage:'/images/HintLocationPageBottomTab.png',
		width:320,
		height:177,
		top:400
	});
		var bottomBtn = Ti.UI.createLabel({
			top:0,
		    width:50,
		    height:20,
		    backgroundColor: '#ffffff',
		    opacity:0.05
		});
		var search = Ti.UI.createTextField({
			top:30,
		    width:256.5,
		    height:51.5,
		    backgroundImage:'/images/HintSearchBarSmall.png',
		    text:'Search By Indentifier',
			color:'#c8c7c6',
		   	font:{
	       		fontSize:16,
	      		fontFamily: 'Lato'
	   		}
		});
		var switch1 = Titanium.UI.createLabel({
			backgroundImage:'/images/HintSwitchOn.png',
			width:50.5,
			height:24,
			left:100,
			top:120
		});
		var switch2 = Titanium.UI.createLabel({
			backgroundImage:'/images/HintSwitchOff.png',
			width:50.5,
			height:24,
			top:120,
			left:255
		});
		var isUp=false;
	    var animateUp = Ti.UI.createAnimation({
			top: 245,
			curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
			duration: 200
		});
	    var animateDown = Ti.UI.createAnimation({
			top: 400,
			curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
			duration: 200
		});
		bottomBtn.addEventListener('click',function(ev){
			if(isUp){
				bottom.animate(animateDown);
				isUp=false;
			}else{
				bottom.animate(animateUp);
				isUp=true;
			}
		});
		bottom.add(bottomBtn);
		bottom.add(search);
		bottom.add(switch1);
		bottom.add(switch2);
	win1.add(name);
	win1.add(address);
	win1.add(tableView1);
	win1.add(tableView2);
	win1.add(bottom);

	
	
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

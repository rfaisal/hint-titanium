exports.ApplicationWindow = function() {
	var self = Ti.UI.createWindow({  
	    backgroundImage: '/images/HintBackgroundTexture.png',
	    left:  Ti.Platform.displayCaps.platformWidth,
	    width: Ti.Platform.displayCaps.platformWidth*0.75,
		zIndex: 1
	});
	var header=Ti.UI.createLabel({
		backgroundImage:'/images/HintRightSidebarHeader.png',
		width:Ti.Platform.displayCaps.platformWidth*0.75,
		height:44,
		top:0,
		left:0
	});
	var n=5;
	var data=new Array();
	for (var i = 0; i < n; i++ ) { 
		var label0 = Ti.UI.createLabel({
		    left: 5,
		    width:11.5,
		    height:11
		   
		});
		var logo = Ti.UI.createLabel({
		    left: 20,
		    width:37,
		    height:37,
		    backgroundImage: '/images/HintGenericUserPicture.png',
		    borderWidth:1.5,
		    borderColor:'#e6e5e6'
		});
		var arrow = Ti.UI.createLabel({
		    right: 0,
		    width:9,
		    height:14,
		    backgroundImage: '/images/HintSidebarArrow.png'
		});

		var label = Ti.UI.createLabel({
		    color: '#9c9990',
		    font: {fontSize:12,fontFamily: 'Lato'},
		    height:20,
		    left: 66.5,
		    top:2
		});
		var label1 = Ti.UI.createLabel({
		    color: '#9c9990',
		    font: {fontSize:12,fontFamily: 'Lato'},
		    height:20,
		    left: 66.5,
		    top:20,
		    text: '@Starbucks'
		});
		data[i]= Ti.UI.createTableViewRow(
		 {
		    backgroundImage:'/images/HintLeftSidebarCell.png',
		    height:44
		    
		 });
		switch(i%5){
			case 0:
				label.text = 'Flirt Sent';
				 label0.backgroundImage='/images/HintSmallPinkIconGray.png';
				break;
			case 1:
				label.text = 'Hint Sent';
				 label0.backgroundImage='/images/HintSmallGreenIconGray.png';
				break;
			case 2:
				label.text = 'Her: Yea, me too';
				label0.backgroundImage='/images/HintSmallGreenIconWithShadow.png';
				data[i].add(arrow);
				break;
			case 3:
				label.text = 'Me: Bruin\'s fan';
				label0.backgroundImage='/images/HintSmallPinkIconWithShadow.png';
				data[i].add(arrow);
				break;
			case 4:
				label.text = 'Hint Received';
				 label0.backgroundImage='/images/HintSmallPinkIconGray.png';
				break;
		}
		
		 data[i].add(label0);
		 data[i].add(logo);
		 data[i].add(label);
		 data[i].add(label1);
	}

	var tableView1	= Ti.UI.createTableView(
		{ 
			data: data,
			left:0,
			top:44,
			height:44*n,
			width: Ti.Platform.displayCaps.platformWidth*0.75,
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
			
		});
	var shadow=Ti.UI.createLabel({
		text:'',
		width: 2,
		height:Ti.Platform.displayCaps.platformHeight,
		top:0,
		left:0,
		backgroundColor:'#000',
		opacity:0.33
	});
	self.add(header);
	self.add(tableView1);
	self.add(shadow)
	return self;
};

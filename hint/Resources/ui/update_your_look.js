exports.ApplicationWindow = function() {
	var self = Ti.UI.createWindow({  
	});
	var trans_back=Ti.UI.createLabel({
	    backgroundColor: '#000000',
	    opacity:0.34,
		width:Ti.Platform.displayCaps.platformWidth,
		height:Ti.Platform.displayCaps.platformHeight,
	});
	var popup=Ti.UI.createWindow({
		backgroundImage:'/images/HintUpdateLookPopUp.png',
		width:249.5,
		height:418.5,
		top:20
	});
	var photo=Ti.UI.createLabel({
		backgroundImage:'/images/HintGenericUserPicture.png',
		width:170,
		height:170,
		top:65,
		borderColor:'#d9d9d9',
		borderWidth:1.5
	});
	var lebel1=Ti.UI.createLabel({
		text:'Describe and item you’re wearing at:',
		color:'#9c9990',
	   	font:{
       		fontSize:12,
      		fontFamily: 'Lato'
   		},
		top:photo.top+photo.height+7
	});
	var lebel2=Ti.UI.createLabel({
		text:'UBurger',
		color:'#9c9990',
	   	font:{
       		fontSize:12,
      		fontFamily: 'Lato'
   		},
		top:lebel1.top+17
	});
	var type=Ti.UI.createButton({
		text:'Type',
		color:'#9c9990',
	   	font:{
       		fontSize:14,
      		fontFamily: 'Lato'
   		},
		backgroundImage:'/images/HintDropdownSmall.png',
		width:93.5,
		height:32.5,
		left:28,
		top:lebel2.top+20
	});
	var brand=Ti.UI.createButton({
		text:'Brand',
		color:'#9c9990',
	   	font:{
       		fontSize:14,
      		fontFamily: 'Lato'
   		},
		backgroundImage:'/images/HintDropdownSmall.png',
		width:93.5,
		height:32.5,
		right:28,
		top:lebel2.top+20
	});
	var desc=Ti.UI.createTextField({
		text:'Color/Description',
		color:'#9c9990',
	   	font:{
       		fontSize:14,
      		fontFamily: 'Lato'
   		},
		backgroundImage:'/images/HintTextBoxWide.png',
		width:192,
		height:34.5,
		top:brand.top+brand.height+7
	});
	var cameraBtn=Ti.UI.createTextField({
		backgroundImage:'/images/HintCameraButton.png',
		width:42,
		height:37,
		bottom:10,
		left:55
	});
	
	var conformBtn=Ti.UI.createTextField({
		backgroundImage:'/images/HintConfirmButton.png',
		width:36,
		height:36,
		bottom:10,
		right:55
	});
	conformBtn.addEventListener('click',function(ev){
		self.close();
	});
	popup.add(photo);
	popup.add(lebel1);
	popup.add(lebel2);
	popup.add(type);
	popup.add(brand);
	popup.add(desc);
	popup.add(cameraBtn);
	popup.add(conformBtn);
	self.add(trans_back);
	self.add(popup);
	return self;
};

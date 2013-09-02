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
		backgroundImage:'/images/HintConfirmHintPopUp.png',
		width:252.5,
		height:366,
		top:20
	});
	var cross=Ti.UI.createLabel({
		backgroundImage:'/images/HintCloseButtonGreen.png',
		width:16.5,
		height:16.5,
		top:10,
		left:10
	});
	cross.addEventListener('click',function(ev){
		self.close();
	});
	var photo=Ti.UI.createLabel({
		backgroundImage:'/images/HintGenericUserPicture.png',
		width:158.5,
		height:158.5,
		top:65,
		borderColor:'#f3f3f3',
		borderWidth:1.5
	});
	var lebel1=Ti.UI.createLabel({
		text:'This person will not know who sent them a Hint, it is anonymous. If this person also sends you a Hint, we’ll notify you both.',
		color:'#9c9990',
		width:190,
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	   	font:{
       		fontSize:12,
      		fontFamily: 'Lato'
   		},
		top:photo.top+photo.height+7
	});
	
	
	var conformBtn=Ti.UI.createLabel({
		backgroundImage:'/images/HintConfirmButton.png',
		width:36,
		height:36,
		bottom:15
	});
	conformBtn.addEventListener('click',function(ev){
		self.close();
	});
	popup.add(cross);
	popup.add(photo);
	popup.add(lebel1);



	popup.add(conformBtn);
	self.add(trans_back);
	self.add(popup);
	return self;
};

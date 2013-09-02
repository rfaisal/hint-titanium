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
		backgroundImage:'/images/HintChooseFlirtPopUp.png',
		width:250.5,
		height:415.5,
		top:20
	});
	var cross=Ti.UI.createLabel({
		backgroundImage:'/images/HintCloseButtonPink.png',
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
		text:'This flirt will be sent to the person along with your picture and identifier. It’s his or her choice to respond.',
		color:'#9c9990',
		width:200,
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	   	font:{
       		fontSize:12,
      		fontFamily: 'Lato'
   		},
		top:photo.top+photo.height+7
	});
	var greenFlirtBtn=Ti.UI.createLabel({
		backgroundColor:'#ffffff',
		width:245,
		height:35,
		top:290,
		left:0,
		opacity:0.05
	});
	greenFlirtBtn.addEventListener('click',function(ev){
		Ti.API.info('Green Button Clicked');
		self.close();
	});
	var greenFlirtBtnLebel=Ti.UI.createLabel({
		text:'Hey! Let\'s Chat!',
		color:'#9c9990',
		height:35,
		width:180,
	   	font:{
       		fontSize:16,
      		fontFamily: 'Amaranth'
   		},
		left:60,
		top:290,
		touchEnabled:false
	});
	
	var orangeFlirtBtn=Ti.UI.createLabel({
		backgroundColor:'#ffffff',
		width:245,
		height:35,
		top:335,
		left:0,
		opacity:0.05
	});
	orangeFlirtBtn.addEventListener('click',function(ev){
		Ti.API.info('Orange Button Clicked');
		self.close();
	});
	var orangeFlirtBtnLebel=Ti.UI.createLabel({
		text:'You are cute',
		color:'#9c9990',
		height:35,
		width:180,
	   	font:{
       		fontSize:16,
      		fontFamily: 'Amaranth'
   		},
		left:60,
		top:335,
		touchEnabled:false
	});
	
	var pinkFlirtBtn=Ti.UI.createLabel({
		backgroundColor:'#ffffff',
		width:245,
		height:35,
		top:375,
		left:0,
		opacity:0.05
	});
	pinkFlirtBtn.addEventListener('click',function(ev){
		Ti.API.info('Pink Button Clicked');
		self.close();
	});
	var pinkFlirtBtnLebel=Ti.UI.createLabel({
		text:'Come Home With Me',
		color:'#9c9990',
		height:35,
		width:180,
	   	font:{
       		fontSize:16,
      		fontFamily: 'Amaranth'
   		},
		left:60,
		top:375,
		touchEnabled:false
	});
	popup.add(greenFlirtBtnLebel);
	popup.add(pinkFlirtBtnLebel);
	popup.add(orangeFlirtBtnLebel);
	popup.add(cross);
	popup.add(photo);
	popup.add(lebel1);


	popup.add(greenFlirtBtn);
	popup.add(pinkFlirtBtn);
	popup.add(orangeFlirtBtn);
	self.add(trans_back);
	self.add(popup);
	return self;
};

(function() {
	
		var HintFacade=require('lib/HintFacade');
		HintFacade.construct();
		HintFacade.hintGlobals.sessionId = '4fepkqdjccgc5h1nhobifqq9g0';
		HintFacade.hintVenuesApi.lat='49.2395347';
		HintFacade.hintVenuesApi.lng='-123.1393781';
		HintFacade.hintVenuesApi.getVenues();
		HintFacade.hintVenuesApi.addEventListener('api_loaded', function(data) 
		{ 
			Ti.API.info(data); 
		});
		 
	
})();
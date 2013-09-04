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
		 var fb = require('facebook');
		 fb.appid = 536422093082909;
		 fb.permissions = ['email'];
		 fb.requestWithGraphPath('me', {}, 'GET', function(e) {
			    if (e.success) {
			    	var r=JSON.parse(e.result);
			    	Ti.API.info(r);
			    	/*Ti.App.user={
					    fbuid: r['id'], // API expects a JSON stringified date
					    name: r.name,
					    email: r.email,
					    gender: r.gender
					};*/
			       // Ti.API.info(Ti.App.user);
			    } else if (e.error) {
			    	Ti.API.info(e.error);
			    } else {
			    	Ti.API.info('Unknown response');
			    }
			});
	
})();
function HintFacade ()
{
}
HintFacade.construct = function ()
{
	//HintFacade.proxy=Ti.Network.createHTTPClient({});
	var globals = require('lib/HintGlobals');
    HintFacade.hintGlobals = new globals();
    HintFacade.addEventListener=HintFacade.hintGlobals.globalEventDispatcher.addEventListener;
    HintFacade.fireEvent=HintFacade.hintGlobals.globalEventDispatcher.fireEvent;
    var api = require('lib/HintLogInApi');
 	HintFacade.hintLogInApi = new api(HintFacade.hintGlobals);
    api = require('lib/HintVenuesApi');
 	HintFacade.hintVenuesApi = new api(HintFacade.hintGlobals);

	api = require('lib/HintGeoApiWrapper');
 	HintFacade.hintGeoApiWrapper = new api(HintFacade.hintGlobals);
 	api = require('lib/HintFbApiWrapper');
 	HintFacade.hintFbApiWrapper = new api(HintFacade.hintGlobals);
	HintFacade.hintFbApiWrapper.addEventListener('fb_api_logged_in',function(){
		HintFacade.hintLogInApi.addEventListener('api_loaded', function(data) 
		{ 
			HintFacade.fireEvent('logged_in',{});
		});
		HintFacade.hintLogInApi.logInToHint();
	});
	HintFacade.hintFbApiWrapper.addEventListener('fb_api_logged_out',function(){
		HintFacade.fireEvent('logged_out',{});
	});
	HintFacade.login=HintFacade.hintFbApiWrapper.login;
	HintFacade.logout=HintFacade.hintFbApiWrapper.logout;
	HintFacade.isLoggedin=HintFacade.hintFbApiWrapper.isLoggedin;
	
};

module.exports = HintFacade;
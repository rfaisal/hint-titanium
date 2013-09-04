function HintFacade ()
{
}
HintFacade.hintGlobals = null;
HintFacade.hintVenuesApi = null;
HintFacade.construct = function ()
{
	var globals = require('lib/HintGlobals');
    HintFacade.hintGlobals = new globals();
    var api = require('lib/HintLogInApi');
 	HintFacade.hintLogInApi = new api(HintFacade.hintGlobals);
    api = require('lib/HintVenuesApi');
 	HintFacade.hintVenuesApi = new api(HintFacade.hintGlobals);

};
module.exports = HintFacade;
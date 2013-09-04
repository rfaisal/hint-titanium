function hint_facade ()
{
}
hint_facade.hint_globals = null;
hint_facade.hint_venues_api = null;
hint_facade.construct = function ()
{
	var globals = require('lib/hint_globals');
    hint_facade.hint_globals = new globals();
    var venues = require('lib/hint_venues_api');
 	hint_facade.hint_venues_api = new venues(hint_facade.hint_globals);
};
module.exports = hint_facade;
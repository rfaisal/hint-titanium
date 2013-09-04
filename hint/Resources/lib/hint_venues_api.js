function hint_venues_api (_hint_globals)
{
	var api = require('lib/hint_api');
	var self = new api('hint_venues',_hint_globals.api_url+'/core/venues','GET',_hint_globals); 
	self.lat = 0;
	self.lng = 0;
	self.cat_search = '';
	self.limit = null;
	self.radius = null;
	self.getVars=function(){
		var param = {
    		sid : self.hint_globals.session_id,
    		lat : self.lat,
    		lng : self.lng,
    		cat_search : self.cat_search
    	//	limit: self.limit,
    	//	radius : self.radius
    	};
		return param;
	}
	self.getVenues=function(){
		self.load();
	};
	return self;
}
module.exports = hint_venues_api;
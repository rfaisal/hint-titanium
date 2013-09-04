function HintVenuesApi (_hintGlobals)
{
	var api = require('lib/HintBaseApi');
	var self = new api('hint_venues',_hintGlobals.apiUrl+'/core/venues','GET',_hintGlobals); 
	self.lat = 0;
	self.lng = 0;
	self.cat_search = '';
	self.limit = null;
	self.radius = null;
	self.getVars=function(){
		var param = {
    		sid : self.hintGlobals.sessionId,
    		lat : self.lat,
    		lng : self.lng,
    		cat_search : self.cat_search,
    		limit: self.limit,
    		radius : self.radius
    	};
		return param;
	}
	self.getVenues=function(){
		self.load();
	};
	return self;
}
module.exports = HintVenuesApi;
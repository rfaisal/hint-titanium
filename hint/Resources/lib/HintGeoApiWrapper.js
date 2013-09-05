function HintGeoApiWrapper (_hintGlobals)
{
	that=this;
	Ti.Geolocation.purpose = "Hint would like to know your location to show places nearby";
	this.lat='0';
	this.lng='0';
	this.hintGlobals=_hintGlobals;
	this.getLocation=function(){
		Titanium.Geolocation.getCurrentPosition(
			function(e)
			{
				if (!e.success || e.error)
				{
					that.hintGlobals.logError('geo_api/getlocation',JSON.stringify(e.error),null);
		    		Ti.API.info('Geo Error:'+JSON.stringify(e.error));
					return;
				}
				that.lat = e.coords.latitude;
				that.lng = e.coords.longitude;
				that.hintGlobals.globalEventDispatcher.fireEvent('geo_location_received',{lat:that.lat,lng:that.lng});
			}
		);
	}
}
module.exports = HintGeoApiWrapper;
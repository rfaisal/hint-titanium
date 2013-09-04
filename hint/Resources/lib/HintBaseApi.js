function HintBaseApi (_apiName,_url,_method,_hintGlobals)
{
	var client = require('lib/HintBaseHttpClient');
	var self=new client(_url,_method);
	self.apiName = _apiName;
	self.response=null;
	self.hintGlobals=_hintGlobals;
	self.httpClient.onload = function(e) {
	    	self.response = JSON.parse(e.source.responseText);
	    	if(self.response.session_id)
	    			self.hintGlobals.sessionId = self.response.session_id;
	    	if(!self.response.is_error){
	    		self.fireEvent('api_loaded', self.response);
		        Ti.API.info(self.apiName+' api load success');
	       	}
	       	else{
	       		//error already logged in the server
	       		Ti.API.info(self.apiName+' api load error (server). Error msg: '+self.response.result);
	       	}
	   };
	   self.httpClient.onerror=function(e) {
	    	self.hintGlobals.logError(_apiName,e.error,null);
	        Ti.API.info(self.apiName+' api load error (client). Error msg: '+e.error);
	   };
	   return self;
}
module.exports = HintBaseApi;
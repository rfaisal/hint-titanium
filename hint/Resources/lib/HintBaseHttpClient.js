function HintBaseHttpClient (_url,_method)
{
	var self=this;
	this.url=_url;
	this.method=_method;
	this.http_client = Ti.Network.createHTTPClient({
	    onload: function(e) {},
	    onerror: function(e) {},
	    timeout:5000
	});
	/**
	 * override, when necessary.
	 */
	this.getVars=function(){
		return null;
	}
	this.load = function(){
		var vars = self.getVars();
		if(vars !=null){
			if(self.method == 'POST'){
				self.http_client.open(self.method, self.url);
				self.http_client.send(vars);
			}
			else{
				var hint_util = require ('/lib/hint_util');
				self.http_client.open(self.method, self.url+'?'+hint_util.http_build_query(vars));
				self.http_client.send();
			}
		}
		else{
			self.http_client.open(self.method, self.url);
			self.http_client.send();
		}
	};
}
module.exports = HintBaseHttpClient;
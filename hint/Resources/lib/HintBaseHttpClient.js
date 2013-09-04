function HintBaseHttpClient (_url,_method)
{
	this.url=_url;
	this.method=_method;
	this.httpClient = Ti.Network.createHTTPClient({
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
	this.fireEvent=this.httpClient.fireEvent; //alias
	this.addEventListener=this.httpClient.addEventListener; //alias
	this.load = function(){
		var vars = this.getVars();
		if(vars !=null){
			if(this.method == 'POST'){
				this.httpClient.open(this.method, this.url);
				this.httpClient.send(vars);
			}
			else{
				var HintUtils = require ('/lib/HintUtils');
				this.httpClient.open(this.method, this.url+'?'+HintUtils.httpBuildQuery(vars));
				this.httpClient.send();
			}
		}
		else{
			this.httpClient.open(this.method, this.url);
			this.httpClient.send();
		}
	};
}
module.exports = HintBaseHttpClient;
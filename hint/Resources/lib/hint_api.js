function hint_api (_api_name,_url,_method,_hint_globals)
{
	var that=this;
	this.api_name = _api_name;
	this.url=_url;
	this.method=_method;
	this.response=new Object();
	this.hint_globals=_hint_globals;
	this.getOnLoad=function(){
		return this.onLoad;
	}
	this.http_client = Ti.Network.createHTTPClient({
	    onload: function(e) {
	    	that.response = JSON.parse(this.responseText);
	    	if(that.response.session_id)
	    			that.hint_globals.session_id = that.response.session_id;
	    	if(!that.response.is_error){
	    		//var onload=this.getOnLoad();
		    	//onload(e);
		    	Ti.API.info(that.response);
		        Ti.API.info(that.api_name+' api load success');
	       	}
	       	else{
	       		//error already logged in the server
	       		Ti.API.info(that.api_name+' api load error (server). Error msg: '+this.response.result);
	       	}
	    },
	    onerror: function(e) {
	    	//that.hint_globals.logError(_api_name,e.error,null);
	        Ti.API.info(that.api_name+' api load error (client). Error msg: '+e.error);
	    },
	    timeout:5000
	});
	//this.http_client.setRequestHeader("content-type", "application/json");
	this.getVars=function(){
		return null;
	}
	this.load = function(){
		
		var vars = that.getVars();
		if(vars !=null){
			if(that.method == 'POST'){
				that.http_client.open(this.method, this.url);
				that.http_client.send(vars);
			}
			else{
				var hint_util = require ('/lib/hint_util');
				that.http_client.open(that.method, that.url+'?'+hint_util.http_build_query(vars));
				that.http_client.send();
			}
		}
		else{
			that.http_client.open(that.method, that.url);
			that.http_client.send();
		}
		
	};
	this.onLoad = function(e){alert(e)};
}
module.exports = hint_api;
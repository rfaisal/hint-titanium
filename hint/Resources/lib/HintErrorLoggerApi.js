function HintErrorLoggerApi (_api_url)
{
	var client = require('lib/HintBaseHttpClient');
	var self=new client(_api_url+'\log\error','GET');
	var param = null;
	/**
	 * overridden
	 */
	self.getVars=function(){
		return param;
	}
	self.log=function(_param){
		param = _param;
		self.load();
	}
	return self;
}
module.exports = HintErrorLoggerApi;
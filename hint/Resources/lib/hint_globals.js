function hint_globals ()
{
	this.api_url = 'http://hintinteractive.com:8090';
    this.session_id = '';
    this.fb_user_id = '';
	var errorLoggerClass = require('lib/HintErrorLoggerApi');
	var errorLogger = new errorLoggerClass(this.api_url);
    this.logError=function(_location,_msg,_oid){
    	var param = {
    		sid : this.session_id,
    		oid : _oid,
    		location : _location,
    		msg : _msg,
    		is_server: false
    	};
    	errorLogger.log(param);
    };
}
module.exports = hint_globals;
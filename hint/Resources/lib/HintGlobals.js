function HintGlobals ()
{
	this.apiUrl = 'http://hintinteractive.com:8090';
    this.sessionId = '';
    this.fbUserId = '';
    this.fbAppId = 536422093082909;
    this.fbPermissions = ['email'];
    this.clientSecret = '6b46b5220c04ebb025ec3ceecb600d43e7004fc6';
	var errorLoggerClass = require('lib/HintErrorLoggerApi');
	var errorLogger = new errorLoggerClass(this.apiUrl);
    this.logError=function(_location,_msg,_oid){
    	var param = {
    		sid : this.sessionId,
    		oid : _oid,
    		location : _location,
    		msg : _msg,
    		is_server: 0
    	};
    	errorLogger.log(param);
    };
    this.globalEventDispatcher = Ti.Network.createHTTPClient({});
}
module.exports = HintGlobals;
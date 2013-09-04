function hint_globals ()
{
    this.api_url = 'http://hintinteractive.com:8090';
    this.session_id = '';
    this.fb_user_id = '';
    this.logError=function(_location,_msg,_oid){
    	var param = {
    		sid : this.session_id,
    		oid : _oid,
    		location : _location,
    		msg : _msg,
    		is_server: false
    	};
    	var error_logger=Ti.Network.createHTTPClient({timeout:5000});
	    error_logger.open('GET',this.api_url+'\log\error');
	    error_logger.send(param);
    };
}
module.exports = hint_globals;
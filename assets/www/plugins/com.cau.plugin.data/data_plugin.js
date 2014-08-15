/**
 * 
 */
//Android Plugins
function success(message){
	return message;
}

cordova.define("com.cau.plugin.data.QureyPlugin", function(require, exports, module) {
	var exec = require('cordova/exec');
	module.exports = {      
	greet: function(svs,str,callback){
		exec(callback,function(err){
			alert("plugin accessed failure.");
		},svs,"greet",[str]);           /*"service","action",*/
	}
});  


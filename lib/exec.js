const Promise = require('bluebird');
const shared = require('./shared.js');
const login = require('./login.js');
const logout = require('./logout.js');

module.exports = function exec(param) {
	login()
	.then(function(){
		if(param.state.value === 1){
			var req = 'http://'+shared.ip+':'+shared.port+'/webapi/entry.cgi?api=SYNO.SurveillanceStation.Camera&method=Enable&version=9&idList='+param.deviceType.deviceTypeIdentifier+'&_sid='+shared.sid;
			console.log(req);
			gladys.utils.request(req)
			.then((response) => 
			{ 
				console.log(response);
			})
			.then(function(){
				logout();
			})
			.catch((err) =>
			{
				console.log(err);
			})
		}
		else{
			var req = 'http://'+shared.ip+':'+shared.port+'/webapi/entry.cgi?api=SYNO.SurveillanceStation.Camera&method=Disable&version=9&idList='+param.deviceType.deviceTypeIdentifier+'&_sid='+shared.sid;
			console.log(req);
			gladys.utils.request(req)
			.then((response) => 
			{ 
				console.log(response);
			})
			.then(function(){
				logout();
			})
			.catch((err) =>
			{
				console.log(err);
			})
		}
		
		
	})
}
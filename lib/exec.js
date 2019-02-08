const Promise = require('bluebird');
const shared = require('./shared.js');

module.exports = function exec(param) {
	gladys.modules.synology.login()
	.then(function(){
		console.log(param);
		if(param.state.value === 1){
			var req = 'http://'+shared.ip+':'+shared.port+'/webapi/entry.cgi?api=SYNO.SurveillanceStation.Camera&method=Enable&version=9&idList='+param.deviceType.deviceTypeIdentifier+'&_sid='+shared.sid;
			console.log(req);
			gladys.utils.request(req)
			.then((response) => 
			{ 
				console.log('Camera enabled');
			})
			.then(function(){
				gladys.modules.synology.logout();
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
				console.log('Camera disabled');
			})
			.then(function(){
				gladys.modules.synology.logout();
			})
			.catch((err) =>
			{
				console.log(err);
			})
		}
		
		
	})
}
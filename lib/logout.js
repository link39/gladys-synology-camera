var Promise = require('bluebird');
const shared = require('./shared.js');

module.exports = function logout() {
	return new Promise(function(resolve, reject) {
		// async work here
		// login
		var req = 'http://'+shared.ip+':'+shared.port+'/webapi/auth.cgi?api=SYNO.API.Auth&method=Logout&version=2&session=SurveillanceStation&_sid='+shared.sid;
		console.log(req);
		gladys.utils.request(req)
		.then((response) => 
		{ 
			console.log(response);
			shared.sid='';
			resolve(shared.sid);
		})
		.catch((err) =>
		{
			reject(new Error('Error:',err));			
		})
	});
};
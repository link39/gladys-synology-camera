var Promise = require('bluebird');
const shared = require('./shared.js');

module.exports = function login() {
	return new Promise(function(resolve, reject) {
		// async work here
		// login
		var req = 'http://'+shared.ip+':'+shared.port+'/webapi/auth.cgi?api=SYNO.API.Auth&method=Login&version=2&account='+shared.user+'&passwd='+shared.password+'&session=SurveillanceStation&format=sid';
		console.log(req);
		gladys.utils.request(req)
		.then((response) => 
		{ 
			shared.sid=response.data.sid
			resolve(shared.sid);
		})
		.catch((err) =>
		{
			reject(new Error('Error:',err));			
		})
	});
};




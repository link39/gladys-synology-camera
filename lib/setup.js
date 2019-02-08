const Promise = require('bluebird');
const shared = require('./shared.js');
const login = require('./login.js');
const logout = require('./logout.js');

module.exports = function setup() {
	
	// login
	gladys.modules.synology.login()
	.then(function(){
		var req = 'http://'+shared.ip+':'+shared.port+'/webapi/entry.cgi?api=SYNO.SurveillanceStation.Camera&method=List&version=1&start=0&_sid='+shared.sid;
		gladys.utils.request(req)
		.then((response) => 
		{ 
			tabCam = response.data.cameras;
			tabCam.forEach(element => {
				console.log(element.id);
				console.log(element.name);
				console.log(element.detailInfo.camIP);
				/* console.log(response.data.cameras[0].model);
				console.log(response.data.cameras[0].vendor);
				console.log(response.data.cameras[0].port);
				console.log(response.data.cameras[0].camStatus);
				console.log(response.data.cameras[0].enabled);
				console.log(response.data.cameras[0].volume_space);
				console.log(response.data.cameras[0].update_time); */
				var myNewDevice = {
					identifier : element.detailInfo.camIP+':'+element.port,
					name: element.name,
					protocol: 'http',
					service: 'synology-camera'
				};
				var types = [];
				types.push({
					identifier: element.id,
					name: 'Camera '+element.name,
					type: 'binary',
					category: 'none',
					unit:'',
					tag: '',
					sensor: false,
					min: 0,
					max: 1,
				});
				
				var device = gladys.device.create({device: myNewDevice, types: types});
			})
		})
		.then(function(){
			gladys.modules.synology.logout();
		})
	})
}
const getSynoInfo = require('./lib/getSynoInfos.js');
const login = require('./lib/login.js');
const logout = require('./lib/logout.js');
const enableCam = require('./lib/enableCam.js');
const disableCam = require('./lib/disableCam.js');
const shared = require('./lib/shared.js');
const setup = require('./lib/setup.js');
const exec = require('./lib/exec.js');

module.exports = function(sails) {

	return {
		login: login,
		logout, logout,
		getSynoInfo: getSynoInfo,
		enableCam: enableCam,
		disableCam: disableCam,
		setup: setup,
		exec: exec
	};
	
};

gladys.on('ready', function() {
	getParameters();
});

function getParameters() {
  return Promise.all([
    getIp().catch(() => { return sails.log.info('Synology module: Parameter SYNO_IP empty!') }),
    getPort().catch(() => { return sails.log.info('Synology module: Parameter SYNO_PORT empty!') }),	
    getUser().catch(() => { return sails.log.info('Synology module: Parameter SYNO_USER empty!') }),
    getPassword().catch(() => { return sails.log.info('Synology module: Parameter SYNO_PWD empty!') }),	
  ])
}

function getIp() {
  return gladys.param.getValue('SYNO_IP')
    .then((ip) => {
      sails.log.info(`Synology module : IP '${ip}'`)
	  shared.ip = ip
      return Promise.resolve()
    })
}

function getPort() {
  return gladys.param.getValue('SYNO_PORT')
    .then((port) => {
      sails.log.info(`Synology module : Port '${port}'`)
	  console.log('param SYNO_PORT', port);
	  shared.port = port
      return Promise.resolve()
    })
}

function getUser() {
  return gladys.param.getValue('SYNO_USER')
    .then((user) => {
      sails.log.info(`Synology module : User '${user}'`)
	  shared.user = user
      return Promise.resolve()
    })
}

function getPassword() {
  return gladys.param.getValue('SYNO_PWD')
    .then((password) => {
	  shared.password = password
      return Promise.resolve()
    })
}
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573204171907_1829';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ 'http://127.0.0.1:5500' ]
  };
  config.cors = {
    // {string|Function} origin: '*',
    // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.multipart = {
    mode: 'file',
    fileSize: '20mb'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};

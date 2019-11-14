/*
 * @Author: 闫龙科
 * @Date: 2019-11-14 18:57:21
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-14 19:07:07
 * @Description: 00
 */
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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573729036320_1045';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql:{
      client:{
        user:"root",
        password:"root",
        port:3306,
        host:"localhost",
        database:"quanzi"
      },
      app:true,
      agent:false
    },
    security:{
      csrf:false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};

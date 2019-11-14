/*
 * @Author: 闫龙科
 * @Date: 2019-11-14 18:57:21
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-14 19:07:37
 * @Description: 00
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql:{
    enable:true,
    package:"egg-mysql"
  }
};

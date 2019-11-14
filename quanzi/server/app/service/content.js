/*
 * @Author: 闫龙科
 * @Date: 2019-11-14 19:10:25
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-14 19:12:40
 * @Description: 00
 */
'use strict';

const Service = require('egg').Service;

class ContentService extends Service {
  async list() {
    
    let data=await this.app.mysql.query("select * from contentlist")
    console.log(data)
    return data
  }
}

module.exports = ContentService;

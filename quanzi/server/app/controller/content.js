/*
 * @Author: 闫龙科
 * @Date: 2019-11-14 19:08:38
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-14 19:11:40
 * @Description: 00
 */
'use strict';

const Controller = require('egg').Controller;

class ContentController extends Controller {
  async list() {
    let {ctx}=this
    let data=await this.service.content.list()
    ctx.body=data
  }
}

module.exports = ContentController;

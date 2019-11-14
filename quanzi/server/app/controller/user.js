/*
 * @Author: 闫龙科
 * @Date: 2019-11-14 19:14:19
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-14 20:06:17
 * @Description: 00
 */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async regist() {
    let {ctx}=this
    let {username,password,age}=ctx.request.body
    let data=await this.service.user.regist(username,password,age)
    ctx.body=data
  }
  async login(){
      let {ctx}=this
      let {username,password}=ctx.request.body
      let data=await this.service.user.login(username,password)
      ctx.body=data

  }
  async update(){
    let {ctx}=this
    let {id,username,password,age}=ctx.request.body
    let data=await this.service.user.update(id,username,password,age)
    ctx.body=data
  }
  async del(){
      let {ctx}=this
      let {id}=ctx.query
      let data=await this.service.user.del(id)
      ctx.body=data
  }
  async my(){
    let {ctx}=this
    let {id}=ctx.query
    let data=await this.service.user.my(id)
      ctx.body=data
  }
}

module.exports = UserController;

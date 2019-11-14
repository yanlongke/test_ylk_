/*
 * @Author: 闫龙科
 * @Date: 2019-11-14 18:57:21
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-14 20:11:38
 * @Description: 00
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/home', controller.content.list);//首页接口
  router.post('/api/regist', controller.user.regist);//注册接口
  router.post('/api/login', controller.user.login);//登录接口
  router.post('/api/update', controller.user.update);//修改密码接口
  router.get('/api/del', controller.user.del);//注销接口
  router.get("/api/my",controller.user.my)//详情信息接口
};

/*
 * @Author: 闫龙科
 * @Date: 2019-11-11 15:22:26
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-11 19:36:21
 * @Description: 00
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

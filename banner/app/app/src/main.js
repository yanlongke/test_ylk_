/*
 * @Author: 闫龙科
 * @Date: 2019-11-13 14:46:58
 * @LastEditors: 闫龙科
 * @LastEditTime: 2019-11-13 14:50:23
 * @Description: 00
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

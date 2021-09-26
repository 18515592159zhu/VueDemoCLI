import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//引入store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//注册路由管理器
  store,//注册状态管理器
  components: {App},
  template: '<App/>'
})




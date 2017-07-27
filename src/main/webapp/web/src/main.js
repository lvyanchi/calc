// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routers from './router'
import './assets/css/common.css'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router(routers)
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

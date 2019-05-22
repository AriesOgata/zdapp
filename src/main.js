// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ajax from './config/ajax'
import './config/rem'
import '@/assets/css/app.css'/*引入公共样式*/
import '@/assets/css/bdmap.css'/*引入公共样式*/
import { ToastPlugin} from 'vux'

Vue.use(ToastPlugin)

Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)

const axios = require('axios')
Vue.prototype.$ajax = axios;

//axios.defaults.withCredentials=true;






router.beforeEach((to, from, next) => {
// chrome
document.body.scrollTop = 0
// firefox
document.documentElement.scrollTop = 0
// safari
window.pageYOffset = 0
next()
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


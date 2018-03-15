// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/public/reset.css'

import data from "../src/assets/js/data"; //三级联动地址数据

import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)


/* element组件开始 */
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
Vue.use(ElementUI)
/* element组件结束 */
import axios from 'axios';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

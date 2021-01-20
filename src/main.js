// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import axios from 'axios'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper.min.css' 
import 'swiper/dist/css/swiper.min.css'


// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style
// import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
// Vue.prototype.$ajax = axios

Vue.use(VueAwesomeSwiper)
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// Vue.use(axios)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')

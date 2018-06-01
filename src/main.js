// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/css/reset.css'
import FastClick from 'fastclick'
import Vuelazyload from  'vue-lazyload'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import i18n from '@/language/i18n'
//icon
import './common/css/iconfont.css'
// px-rem
import 'lib-flexible'

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
/*解决移动端CLICK延迟300毫秒*/
FastClick.attach(document.body);

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

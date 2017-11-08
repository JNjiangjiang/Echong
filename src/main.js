import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import {Row,Col} from 'element-ui'
import VueLazyload from 'vue-lazyload'


Vue.use(ElementUI)
Vue.use(VueLazyload, {
  preload:1.3,
  error: './assets/error.png',//这个是请求失败后显示的图片
  loading: 'http://img.zcool.cn/community/0161f656b0663e6ac7256cb052d31a.gif',//这个是加载的loading过渡效果
  try: 8 // 这个是加载图片数量
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

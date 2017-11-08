import Vue from 'vue'
import VueRouter from 'vue-router'

import goods from '../components/goods/goods.vue'
import header from '../components/header/header.vue'
import failed from '../components/failed/failed.vue'
import cloth from '../components/cloth/cloth.vue'
import login from '../components/login/login.vue'


Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/cloth',
      component: cloth
    },
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path:'/failed',
      component:failed
    },
    {
      path:'/login',
      component:login
    }]
})

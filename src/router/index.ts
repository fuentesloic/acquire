import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Shop from '@/views/Shop.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  }
]

const router = new VueRouter({
  routes
})

export default router

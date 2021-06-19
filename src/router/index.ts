import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  routes
})

export default router

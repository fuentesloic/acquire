import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { IResponseProduct } from '@/model/api'
import { IProduct, Product } from '@/model/product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: Array<IProduct>()
  },
  getters: {},
  mutations: {
    setProducts(state, products: IProduct[]) {
      state.products = products
    }
  },
  actions: {
    getProducts({ commit }) {
      axios
        .get<IResponseProduct>('https://api.npoint.io/ec39ab1aa4edf145235a')
        .then(({ data }) => {
          const products = data.products.map(product => new Product(product)) ?? []

          commit('setProducts', products)
        })
        .catch(e => {
          // Handle error message notification
          console.error(e)
        })
    }
  }
})

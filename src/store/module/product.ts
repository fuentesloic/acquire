import { ActionContext } from 'vuex'
import axios from 'axios'

import { IResponseProduct } from '@/model/api'
import { IProduct, Product } from '@/model/product'
import { IStateProduct } from '@/model/store'

const state: IStateProduct = {
  products: []
}

const mutations = {
  setProducts(state: IStateProduct, products: IProduct[]): void {
    state.products = products
  }
}

const actions = {
  getProducts({ commit }: ActionContext<IStateProduct, IStateProduct>): void {
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

export const product = {
  namespaced: true,
  state,
  mutations,
  actions
}

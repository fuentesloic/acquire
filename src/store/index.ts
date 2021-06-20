import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {},
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts({ commit }) {
      Vue.axios
        .get('https://www.npoint.io/docs/ec39ab1aa4edf145235a')
        .then(({ data }) => {
          console.log(data.products)
          commit('setProducts', data.products)
        })
        .catch(e => console.log(e))
    }
  }
})

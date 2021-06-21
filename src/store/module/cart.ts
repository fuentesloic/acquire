import { ProductCart } from '@/model/cart'
import { IMutationCart, IStateCart } from '@/model/store'

const state: IStateCart = {
  products: []
}

const mutations = {
  addProduct(state: IStateCart, { product, variantSelected }: IMutationCart['addProduct']): void {
    const productCartIndex = state.products.findIndex(
      _product => _product.id === product.id && _product.variant.id === variantSelected.id
    )

    if (productCartIndex === -1) {
      const newProduct: ProductCart = new ProductCart({
        id: product.id,
        image: product.image,
        name: product.name,
        quantity: 1,
        variant: variantSelected
      })

      state.products = [...state.products, newProduct]
    } else {
      state.products[productCartIndex].quantity++
    }
  },
  addProductQtt(state: IStateCart, { product }: IMutationCart['addProductQtt']): void {
    const productCartIndex = state.products.findIndex(
      _product => _product.id === product.id && _product.variant.id === product.variant.id
    )

    state.products[productCartIndex].quantity++
  },
  removeProductQtt(state: IStateCart, { product }: IMutationCart['addProductQtt']): void {
    const productCartIndex = state.products.findIndex(
      _product => _product.id === product.id && _product.variant.id === product.variant.id
    )

    const isLastItem = state.products[productCartIndex].quantity === 1

    if (isLastItem) {
      state.products = state.products.filter((_, index) => index !== productCartIndex)
    } else {
      state.products[productCartIndex].quantity--
    }
  }
}

const getters = {
  totalPrice: (state: IStateCart): number => {
    return state.products.reduce((acc, product) => {
      return product.variant.price * product.quantity + acc
    }, 0)
  }
}

export const cart = {
  namespaced: true,
  state,
  mutations,
  getters
}

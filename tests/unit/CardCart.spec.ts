import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'

import CardCart from '@/components/card/CardCart.vue'
import { fakeProductCartOne, fakeProductCartTwo } from './mockup'

const localVue = createLocalVue()
localVue.use(Vuex)

function createLocalWrapper() {
  const computed = {
    products: () => [fakeProductCartOne, fakeProductCartTwo]
  }

  const methods = {
    addProductQtt: jest.fn(),
    removeProductQtt: jest.fn()
  }

  const store = new Vuex.Store({
    state: {
      products: [fakeProductCartOne, fakeProductCartTwo]
    },
    getters: {
      totalPrice: () => 42
    }
  })

  return shallowMount(CardCart, {
    store,
    localVue,
    computed,
    methods,
    propsData: {
      products: []
    }
  })
}

describe('Components - Card - CardCart', () => {
  const wrapper = createLocalWrapper()

  wrapper.setData({ products: [fakeProductCartOne, fakeProductCartTwo] })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders cart header', () => {
    expect(wrapper.find('article header basetitle-stub').classes('cart')).toBe(true)
    expect(wrapper.find('article header baseparagraph-stub').classes('cart')).toBe(true)
    expect(wrapper.find('article header basebutton-stub').classes('cart')).toBe(true)

    wrapper.setData({ products: [fakeProductCartOne, fakeProductCartTwo] })
    expect(wrapper.vm.$store.getters.totalPrice()).toBe(42)
  })

  it('renders cart content IFF products', () => {
    wrapper.setData({ products: [] })
    expect(wrapper.find('section header baseparagraph-stub')).toBe(true)

    wrapper.setData({ products: [fakeProductCartOne, fakeProductCartTwo] })
    expect(wrapper.find('section header baseparagraph-stub')).toBe(false)
  })

  it('renders cart footer', () => {
    expect(wrapper.find('article footer baseparagraph-stub')).toBe(true)
  })
})

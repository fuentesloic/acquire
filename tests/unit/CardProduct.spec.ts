import { shallowMount } from '@vue/test-utils'

import CardProduct from '@/components/card/CardProduct.vue'
import { fakeProductOne } from './mockup'

const firstVariant = fakeProductOne.variants[0]
const secondVariant = fakeProductOne.variants[1]

describe('Components - Card - CardProduct', () => {
  const methods = {
    addProductToCart: jest.fn(),
    getSelectedAttribute: jest.fn(active => active),
    getVariantAttributeValues: jest.fn(() => [
      firstVariant.attributes[0].value,
      firstVariant.attributes[1].value
    ]),
    setVariantSelected: jest.fn()
  }

  const computed = {
    variantSelectedPrice: () => firstVariant.price,
    variantAttributesSelected: () => firstVariant.price,
    variantAttributeNames: () => [firstVariant.attributes[0].name, firstVariant.attributes[1].name]
  }

  const wrapper = shallowMount(CardProduct, {
    computed,
    methods,
    propsData: {
      product: fakeProductOne
    }
  })

  wrapper.setData({ variantAvailable: fakeProductOne.variants, variantSelected: firstVariant })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders product image', () => {
    expect(wrapper.find('aside baseimage-stub').classes('cart')).toBe(false)
    expect(wrapper.find('aside baseimage-stub').classes('logo')).toBe(false)
    expect(wrapper.find('aside baseimage-stub').classes('product')).toBe(true)

    expect(wrapper.find('aside baseimage-stub').attributes('alt')).toEqual(fakeProductOne.name)
    expect(wrapper.find('aside baseimage-stub').attributes('src')).toEqual(fakeProductOne.image)
  })

  it('renders product title', () => {
    expect(wrapper.find('header basetitle-stub').classes('cart')).toBe(false)
    expect(wrapper.find('header basetitle-stub').classes('logo')).toBe(false)
    expect(wrapper.find('header basetitle-stub').classes('product')).toBe(true)

    expect(wrapper.find('header basetitle-stub').text()).toBe(fakeProductOne.name)
  })

  it('renders product price', () => {
    expect(wrapper.find('header basesubtitle-stub').classes('cart')).toBe(false)
    expect(wrapper.find('header basesubtitle-stub').classes('logo')).toBe(false)
    expect(wrapper.find('header basesubtitle-stub').classes('product')).toBe(true)

    expect(wrapper.find('header basesubtitle-stub').text()).toBe(`${firstVariant.price}`)
  })

  it('renders product description', () => {
    expect(wrapper.find('baseparagraph-stub').classes('cart')).toBe(false)
    expect(wrapper.find('baseparagraph-stub').classes('logo')).toBe(false)
    expect(wrapper.find('baseparagraph-stub').classes('product')).toBe(true)

    expect(wrapper.find('baseparagraph-stub').text()).toBe(fakeProductOne.description)
  })

  it('renders product selectors label', () => {
    const selectors = wrapper.findAll('section ul li baseparagraph-stub')

    expect(selectors.length).toBe(fakeProductOne.variants.length)

    const firstSelector = selectors.at(0)
    const secondSelector = selectors.at(1)

    expect(firstSelector.classes('label')).toBe(true)
    expect(firstSelector.text()).toBe(firstVariant.attributes[0].name)

    expect(secondSelector.classes('label')).toBe(true)
    expect(secondSelector.text()).toBe(firstVariant.attributes[1].name)
  })

  it('renders product selectors button', () => {
    const buttons = wrapper.findAll('section ul li div basebutton-stub')

    expect(buttons.length).toBe(firstVariant.attributes.length + secondVariant.attributes.length)

    expect(buttons.at(0).trigger('click'))
  })

  it('renders add-to-cart button', () => {
    const button = wrapper.find('footer basebutton-stub')

    expect(button.text()).toBe('Submit to cart')
    expect(button.trigger('click'))
  })
})

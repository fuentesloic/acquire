import { shallowMount } from '@vue/test-utils'
import BaseTitle from '@/components/base/BaseTitle.vue'

describe('BaseTitle.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(BaseTitle, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

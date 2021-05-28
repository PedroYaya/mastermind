import { shallowMount } from '@vue/test-utils'
import ChatInput from '@/components/ChatInput.vue'

describe('ChatInput.vue',  () => {
  it('renders props.msg when passed', async() => {
    const wrapper = shallowMount(ChatInput)
    wrapper.vm.$emit('foo')
    wrapper.vm.$emit('foo', 123)

    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().foo).toBeTruthy()
    expect(wrapper.emitted().foo.length).toBe(2)
    expect(wrapper.emitted().foo[1]).toEqual([123])
  })
})
import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('renders props when passed', () => {
    const msg = 'new message'
    const date = '23 feb'

    const wrapper = shallowMount(Message, {
      propsData: {
        message: {
          msg: msg,
          date: date
        }
      }
    })

    expect(wrapper.vm.$props.message.msg).toBe(msg)
    expect(wrapper.vm.$props.message.date).toBe(date)
  })
})
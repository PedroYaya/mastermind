import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/ChatBox.vue'
import ChatBox from '@/components/ChatBox.vue'

describe('Modal.vue',  () => {
  it('renders modal chat box', async() => {
    const wrapper = shallowMount(Modal)
    expect(wrapper.contains(ChatBox)).toBe(true)
  })
})
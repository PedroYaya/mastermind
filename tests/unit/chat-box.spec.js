import { shallowMount } from '@vue/test-utils'
import ChatBox from '@/components/ChatBox.vue'
import Message from '@/components/Message.vue'
import File from '@/components/File.vue'
import ChatInput from '@/components/ChatInput.vue'

describe('ChatBox.vue',  () => {
  it('renders message file and input', async() => {
    const wrapper = shallowMount(ChatBox)
    expect(wrapper.contains(Message)).toBe(true)
    expect(wrapper.contains(File)).toBe(true)
    expect(wrapper.contains(ChatInput)).toBe(true)
  })
})
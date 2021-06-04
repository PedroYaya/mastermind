import { mount } from '@vue/test-utils'
import Reset from '@/components/buttons/Reset.vue'

describe('Reset.vue', () => {
    it('triggers reset event',  () => {
        const wrapper = mount(Reset)
        wrapper.vm.$emit('reset', 0)
        expect(wrapper.emitted().reset).toBeTruthy()
    })
})
import { mount } from '@vue/test-utils'
import Confirm from '@/components/buttons/Confirm.vue'

describe('Confirm.vue', () => {
    it('triggers confirm event',  () => {
        const wrapper = mount(Confirm)
        wrapper.vm.$emit('confirm', 0)
        expect(wrapper.emitted().confirm).toBeTruthy()
    })
})
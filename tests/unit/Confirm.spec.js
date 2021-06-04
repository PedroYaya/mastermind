import { mount } from '@vue/test-utils'
import Confirm from '@/components/buttons/Confirm.vue'

describe('Confirm.vue', () => {
    it('triggers confirm event', async () => {
        const wrapper = mount(Confirm)
        await wrapper.trigger('click')

        wrapper.vm.$emit('confirm', 0)
        expect(wrapper.emitted().confirm).toBeTruthy()
    })
})
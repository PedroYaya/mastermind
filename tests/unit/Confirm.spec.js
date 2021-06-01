import { shallowMount } from '@vue/test-utils'
import Confirm from '@/components/buttons/Confirm.vue'

describe('Confirm.vue', () => {
    it('triggers click', () => {
        const wrapper = shallowMount(Confirm)

        expect(wrapper.trigger('confirmGuess')).toBe(!null)
    })
})
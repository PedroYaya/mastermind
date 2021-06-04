import { shallowMount } from '@vue/test-utils'
import Actions from '@/components/Actions.vue'
import Confirm from '@/components/buttons/Confirm.vue'

describe('Actions.vue',  () => {
    xit('tu mama en tanga puto', async() => {
        const wrapper = shallowMount(Actions)
        expect(wrapper.contains(Confirm)).toBe(true)
    })
})
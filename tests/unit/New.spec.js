import { mount } from '@vue/test-utils'
import New from '@/components/buttons/New.vue'

describe('New.vue', () => {
    it('renders props when passed', () => {
        const text = 'click here'
        const wrapper = mount(New, {
            propsData: {
                text: text
            }
        })

        expect(wrapper.text()).toContain(text)
    })
})
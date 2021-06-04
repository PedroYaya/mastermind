import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import New from '@/components/buttons/New.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('New.vue', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            newGame: jest.fn(),
        }
        store = new Vuex.Store({
            actions
        })
    })

    it('calls store action "newGame" when button is clicked', () => {
        const wrapper = shallowMount(New, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(actions.newGame).toHaveBeenCalled()
    })
})
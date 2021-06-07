import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Reset from '@/components/buttons/Reset.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Reset.vue', () => {
    let getters
    let actions
    let store

    beforeEach(() => {
        getters = {
            getGrid() {
                return [[0,1,2,3]]
            }
        }
        actions = {
            newGame: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            actions
        })
    })

    it('reset btn dispatch new game', () => {
        const wrapper = mount(Reset, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(actions.newGame).toHaveBeenCalled()
    })
})
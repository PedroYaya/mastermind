import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Colors from '@/components/Colors.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Colors.vue', () => {
    let getters
    let mutations
    let store

    beforeEach(() => {
        getters = {
            getCurrentGame() {
                return {
                    colors: ['red', 'yellow', 'blue', 'green']
                }
            },
            getActive() {
                return 0
            }
        }
        mutations = {
            setUnitGuess: jest.fn(),
            setActive: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            mutations
        })
    })

    it('calls store action "setUnitGuess" when button is clicked', () => {
        const wrapper = shallowMount(Colors, { store, localVue })
        wrapper.find('button').trigger('click')
        expect(mutations.setUnitGuess).toHaveBeenCalled()
    })
})
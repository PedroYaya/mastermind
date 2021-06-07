import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Confirm from '@/components/buttons/Confirm.vue'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Confirm.vue', () => {
    let getters
    let mutations
    let store

    beforeEach(() => {
        getters = {
            getGrid() {
                return [[0,1,2,3],[0,1,2,3]]
            },
            getCurrentGame() {
                return {
                    colors: ['red', 'yellow', 'blue', 'green'],
                    guesses: []
                }
            }
        }
        mutations = {
            setCurrentGame: jest.fn(),
            setActive: jest.fn(),
            setRowPegs: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            mutations
        })
    })

    it('calls store mutations when button is clicked', async () => {
        const wrapper = shallowMount(Confirm, { store, localVue })
        wrapper.find('button').trigger('click')

        setTimeout(() => {
            expect(mutations.setCurrentGame).toHaveBeenCalled()
            expect(mutations.setActive).toHaveBeenCalled()
            expect(mutations.setRowPegs).toHaveBeenCalled()
        }, 0)
    })
})
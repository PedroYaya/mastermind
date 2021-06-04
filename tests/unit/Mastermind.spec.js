import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Mastermind from '@/components/Mastermind.vue'
import Colors from '@/components/Colors.vue'
import Board from '@/components/Board.vue'
import Actions from '@/components/Actions.vue'


const localVue = createLocalVue()

localVue.use(Vuex)

describe('Mastermind.vue', () => {
    let getters
    let store

    beforeEach(() => {
        getters = {
            getCurrentGame() {
                return {
                    reference: ['E454SEE']
                }
            },
            getGameIsDisabled() {
                return false
            }
        }
        store = new Vuex.Store({
            getters
        })
    })

    it('renders child components', () => {
        const wrapper = shallowMount(Mastermind, { store, localVue })
        expect(wrapper.findComponent(Colors).exists()).toBe(true)
        expect(wrapper.findComponent(Board).exists()).toBe(true)
        expect(wrapper.findComponent(Actions).exists()).toBe(true)
    })
})
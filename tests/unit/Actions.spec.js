import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Actions from '@/components/Actions.vue'
import Confirm from '@/components/buttons/Confirm.vue'
import Reset from '@/components/buttons/Reset.vue'
import New from '@/components/buttons/New.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
    let getters
    let store

    beforeEach(() => {
        getters = {
            getCurrentGame() {
                return {
                    status: ['running'],
                    secret_code: ['blue', 'blue', 'blue', 'blue']
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

    it('Actions renders child components', () => {
        const wrapper = shallowMount(Actions, { store, localVue })
        expect(wrapper.findComponent(Confirm).exists()).toBe(true)
        expect(wrapper.findComponent(Reset).exists()).toBe(true)
        expect(wrapper.findComponent(New).exists()).toBe(true)
    })
})
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Board from '@/components/Board.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Board.vue', () => {
    let getters
    let actions
    let mutations
    let store

    beforeEach(() => {
        getters = {
            getCurrentGame() {
                return {
                    guesses: []
                }
            },
            getUnitGuess() {
                return 'red'
            },
            getGrid() {
                return [[0,1,2,3],[0,1,2,3]]
            },
            getPegs() {
                return []
            },
            getGameIsDisabled() {
                return false
            }
        }
        actions = {
            newGame: jest.fn()
        },
        mutations = {
            setGrid: jest.fn()
        }
        store = new Vuex.Store({
            getters,
            actions,
            mutations
        })
    })

    it('pre serves game to paint board and calls store mutation "setGrid" when button is clicked', () => {
        const wrapper = mount(Board, { store, localVue })
        wrapper.find('.index').trigger('click')
        expect(actions.newGame).toHaveBeenCalled()
        expect(mutations.setGrid).toHaveBeenCalled()
    })
})
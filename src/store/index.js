import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: { "guesses": [], "num_colors": 4, "max_guesses": 8, "num_slots": 4},
        currentRow: 'UNO'
    },
    mutations: {
        setCurrentGame(state, payload) {
            state.currentGame = payload
        },
        setCurrentRow(state, payload) {
            state.currentRow = payload
        }
    },
    getters: {
        getCurrentRow: state => state.currentRow,
        getCurrentGame: state => state.currentGame
    }
})
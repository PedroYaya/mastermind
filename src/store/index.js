import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {"colors": ['red', 'blue', 'green', 'yellow'], "guesses": [], "num_colors": 4, "max_guesses": 8, "num_slots": 4},
        unitGuess: '',
        rowGuess: []
    },
    mutations: {
        setCurrentGame(state, payload) {
            state.currentGame = payload
        },
        setUnitGuess(state, payload) {
            state.unitGuess = payload
        },
        setRowGuess(state, payload) {
            state.rowGuess = payload
        }
    },
    getters: {
        getCurrentGame: state => state.currentGame,
        getUnitGuess: state => state.unitGuess,
        getRowGuess: state => state.rowGuess,
    }
})
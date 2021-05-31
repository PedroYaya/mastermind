import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {"colors": ['red', 'blue', 'green', 'yellow'], "guesses": [], "num_colors": 4, "max_guesses": 8, "num_slots": 4},
        unitGuess: '',
        finalGuess: []
    },
    mutations: {
        setCurrentGame(state, payload) {
            state.currentGame = payload
        },
        setUnitGuess(state, payload) {
            state.unitGuess = payload
        },
        setFinalGuess(state, payload) {
            state.finalGuess = payload
        }
    },
    getters: {
        getCurrentGame: state => state.currentGame,
        getUnitGuess: state => state.unitGuess,
        getFinalGuess: state => state.finalGuess,
    }
})
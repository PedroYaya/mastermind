import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {"disabled": true, "colors": ['red', 'blue', 'green', 'yellow'], "guesses": [], "num_colors": 4, "max_guesses": 8, "num_slots": 4},
        unitGuess: '',
        rowGuess: [],
        pegs: []
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
        },
        restartRowGuess(state) {
            state.rowGuess = []
            for (let i = 0; i < state.currentGame.num_slots; i++) {
                state.rowGuess.push('')
            }
        },
        setInitialPegs(state) {
            for (let i = 0; i < state.currentGame.max_guesses; i++) {
                let score = ['', '', '', '']
                state.pegs.push(score)
            }
            console.log(state.pegs)
        }
    },
    getters: {
        getCurrentGame: state => state.currentGame,
        getUnitGuess: state => state.unitGuess,
        getRowGuess: state => state.rowGuess,
        getPegs: state => state.pegs,
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {"disabled": true, "colors": ['red', 'blue', 'green', 'yellow'], "guesses": [], "num_colors": 4, "max_guesses": 8, "num_slots": 4},
        unitGuess: '',
        gridGuess: [],
        pegs: []
    },
    mutations: {

        setCurrentGame(state, payload) {
            state.currentGame = payload
        },

        setUnitGuess(state, payload) {
            state.unitGuess = payload
        },

        setGrid(state, { row, arr}) {
            state.gridGuess[row] = arr
        },

        setRowPegs(state, { row, arr}) {
            state.pegs[row] = arr
        },

        resetGame(state) {
            state.pegs = []
            for (let i = 0; i < state.currentGame.max_guesses; i++) {
                let score = []
                for (let j = 0; j < state.currentGame.num_slots; j++) {
                    score.push('')
                }
                state.pegs.push(score)
            }
            state.gridGuess = []
            for (let i = 0; i < state.currentGame.max_guesses; i++) {
                let arr = []
                state.gridGuess.push(arr)
                for (let j = 0; j < state.currentGame.num_slots; j++) {
                    state.gridGuess[i].push('')
                }
            }
        }
    },
    getters: {
        getCurrentGame: state => state.currentGame,
        getGrid: state => state.gridGuess,
        getUnitGuess: state => state.unitGuess,
        getPegs: state => state.pegs,
    }
})
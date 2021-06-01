import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {},
        unitGuess: '',
        gridGuess: [],
        pegs: []
    },
    mutations: {

        setCurrentGame(state, payload) {
            state.currentGame = payload
            console.log(state.currentGame)
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
            console.log(state.gridGuess)
        }
    },
    getters: {
        getCurrentGame: state => state.currentGame,
        getGrid: state => state.gridGuess,
        getUnitGuess: state => state.unitGuess,
        getPegs: state => state.pegs,
    }
})
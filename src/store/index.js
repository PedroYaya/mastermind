import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {},
        active: '',
        unitGuess: '',
        gridGuess: [],
        pegs: [],
        gameIsDisabled: true,
    },
    mutations: {

        setCurrentGame(state, payload) {
            state.currentGame = payload
        },

        setActive(state, payload) {
            state.active = payload
            console.log(state.active)
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

        setGameIsDisabled(state, payload) {
            state.gameIsDisabled = payload
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
    actions: {
        newGame(state, payload) {
            const url = 'http://localhost:8000/api/games/';
            const game = {
                'num_colors': 4,
                'num_slots': 4,
                'max_guesses': 8
            }

            axios.post(url, game).then( (response) => {
                this.commit('setCurrentGame', response.data)
                console.log(response.data.secret_code)
                this.commit('resetGame')
            })

            if (payload) {
                this.commit('setGameIsDisabled', false)
            }
        }
    },
    getters: {
        getCurrentGame: state => state.currentGame,
        getActive: state => state.active,
        getUnitGuess: state => state.unitGuess,
        getGrid: state => state.gridGuess,
        getPegs: state => state.pegs,
        getGameIsDisabled: state => state.gameIsDisabled,
    }
})
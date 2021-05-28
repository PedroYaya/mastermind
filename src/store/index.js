import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGame: {},
        currentRow: 'UNO',
    },
    mutations: {
        setCurrentRow(state, payload) {
            state.currentRow = payload
        }
    },
    getters: {
        getCurrentRow: state => state.currentRow
    }
})
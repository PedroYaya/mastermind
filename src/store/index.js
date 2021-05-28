import { createStore } from 'vuex'

export default createStore({
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
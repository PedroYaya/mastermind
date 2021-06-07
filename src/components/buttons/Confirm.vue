<template>
    <button v-on:click="confirmGuess" class="confirm shadow" :class="isDisabled ? ' disabled' : ''">
        <img src="../../assets/icons/check.png" height="20px" width="20px"/>
    </button>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getGrid } from '../../store/constants'
    import { getCurrentGame } from '../../store/constants'
    import axios from "axios";

    export default {
        name: 'Confirm',
        computed: {
            ...mapGetters([
                getGrid,
                getCurrentGame
            ]),

            isDisabled() {
                const row = this.getCurrentGame.guesses.length
                let disabled = false
                const currentRow = this.getGrid[row]
                if(currentRow){
                    disabled = currentRow.some(guess => !guess)
                }
                return disabled
            }
        },
        methods: {
            confirmGuess() {
                const id = this.getCurrentGame.id;
                const url = 'http://localhost:8000/api/games/' + id + '/guesses/';
                const row = this.getCurrentGame.guesses.length

                const guess = { code: [] }

                this.getGrid[row].forEach(e => { guess.code.push(e) })

                if (!this.isDisabled) {
                    axios.post(url, guess).then( (response) => {

                        this.$store.commit('setCurrentGame', response.data)
                        this.$store.commit('setActive')

                        let arr = []
                        for (let i = 0; i < response.data.guesses[row].black_pegs; i++) {
                            arr.push('black')
                        }
                        for (let i = 0; i < response.data.guesses[row].white_pegs; i++) {
                            arr.push('white')
                        }
                        while(arr.length < this.getCurrentGame.num_slots) {
                            arr.push('')
                        }

                        this.$store.commit('setRowPegs', {
                            row,
                            arr
                        });
                    })
                }
            }
        }
    }
</script>

<style lang="scss">

    .confirm {
        cursor: pointer;
        border: unset;
        display: block;
        background: white;
        border-radius: 15px;
        padding: 5px;
        margin: 5px 0;
        width: 35px;

        &.disabled {
            opacity: .6;
        }
    }

    @media screen and (min-width: 768px) {

        .confirm {
            margin: 15px !important;
        }
    }

</style>
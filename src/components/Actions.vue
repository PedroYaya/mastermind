<template>
    <div class="actions">

        <div class="buttons-container" v-if="!getGameIsDisabled">
            <Confirm @confirmGuess="confirmGuess" :isDisabled="confirmIsDisabled"/>
            <Reset @reset="reset" :isDisabled="resetIsDisabled"/>
        </div>

        <div v-if="gameIsFinished" class="results">

            <h3 :class="getCurrentGame.status">{{ getCurrentGame.status }}</h3>

            <span>Solution:</span>
            <div class="solution">
                <div v-for="(color, i) in getCurrentGame.secret_code"
                     :key="i" class="slot" :style="{background: color}">
                </div>
            </div>
        </div>

        <New text="New Game" />
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapGetters } from 'vuex'
    import { getCurrentGame } from '../store/constants'
    import { getGrid } from '../store/constants'
    import { getGameIsDisabled } from '../store/constants'
    import Confirm from './buttons/Confirm'
    import Reset from './buttons/Reset'
    import New from './buttons/New'

    export default {
        name: 'Actions',
        components: {
            Confirm,
            Reset,
            New
        },
        methods: {

            reset() {
                if (!this.resetIsDisabled) {
                    this.$store.dispatch('newGame',true)
                }
            },

            confirmGuess() {
                const id = this.getCurrentGame.id;
                const url = 'http://localhost:8000/api/games/' + id + '/guesses/';
                let row = this.getCurrentGame.guesses.length

                const guess = { code: [] }

                this.getGrid[row].forEach(e => { guess.code.push(e) })

                if (!this.confirmIsDisabled) {
                    axios.post(url, guess).then( (response) => {

                        this.$store.commit('setCurrentGame', response.data)

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
        },
        computed: {
            ...mapGetters([
                getGrid,
                getCurrentGame,
                getGameIsDisabled
            ]),

            confirmIsDisabled() {
                const row = this.getCurrentGame.guesses.length
                let disabled = false
                const currentRow = this.getGrid[row]
                if(currentRow){
                    disabled = currentRow.some(guess => !guess)
                }
                return disabled
            },

            resetIsDisabled() {
                const firstRow = this.getGrid[0]
                return !firstRow.some(guess => guess)
            },

            gameIsFinished() {
                return this.getCurrentGame.status && this.getCurrentGame.status !== 'running'
            }
        }
    }
</script>

<style lang="scss">

    .actions {
        position: relative;
        padding: 10px 0;

        .buttons-container {
            position: absolute;

            .confirm, .reset {
                cursor: pointer;
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
        }

        .results {
            margin-top: 120px;
            text-align: left;

            h3 {
                font-weight: 800;
                margin: 0;
                text-transform: uppercase;
                text-align: left;

                &.won {
                    color: green;
                }

                &.lost {
                    color: red;
                }
            }

            span {
                font-weight: 800;
            }

            .solution {
                display: flex;
                .slot {
                    width: 15px;
                    height: 15px;
                    background: green;
                    margin: 3px;
                    border-radius: 20px;
                }
            }
        }

    }


    @media screen and (max-width: 767px) {
        .actions {
            .results {
                position: fixed;
                background: white;
                padding: 10px;
                left: 30%;
                right: 30%;
                text-align: center;
                border-radius: 10px;
                -webkit-box-shadow: 0px 3px 15px 0px #000000;
                box-shadow: 0px 3px 15px -5px #000000;

                h3 {
                    text-align: center;
                }

                .solution {
                    justify-content: center;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {

        .actions {

            .results {
                top: 30%;
                position: absolute;
                margin-left: 20px;
            }
        }
    }


</style>

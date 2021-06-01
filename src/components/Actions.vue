<template>
    <div class="actions">
        <div class="buttons-container" v-if="getCurrentGame.status === 'running'">
            <a v-on:click="confirmGuess" class="confirm shadow" :class="confirmIsDisabled ? ' disabled' : ''">
                <img src="../assets/icons/check.png" height="20px" width="20px"/>
            </a>
            <a v-on:click="resetGame" class="reset shadow" :class="resetIsDisabled ? ' disabled' : ''">
                <img src="../assets/icons/reset.png" height="20px" width="20px"/>
            </a>
        </div>
        <div v-if="getCurrentGame.status && getCurrentGame.status !== 'running'" class="results">
            <h3 :class="getCurrentGame.status">{{ getCurrentGame.status }}</h3>
            <span>Solution:</span>
            <div class="solution">
                <div v-for="(color, i) in getCurrentGame.secret_code" :key="i" class="slot" :style="{background: color}"></div>
            </div>
        </div>
        <a v-on:click="newGame" class="new-game-cta shadow">New Game</a>
    </div>
</template>

<script>
    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Actions',
        methods: {
            newGame() {
                const url = 'http://localhost:8000/api/games/';
                const game = {
                    'num_colors': 4,
                    'num_slots': 4,
                    'max_guesses': 8
                }

                this.$store.commit('initializeGrid')

                axios.post(url, game).then( (response) => {
                    this.$store.commit('setCurrentGame', response.data)
                    console.log(this.getCurrentGame.secret_code)
                })
            },

            resetGame() {
                if (!this.resetIsDisabled) {
                    this.newGame()
                }
            },

            confirmGuess() {
                const id = this.getCurrentGame.id;
                const url = 'http://localhost:8000/api/games/' + id + '/guesses/';
                let row = this.getCurrentGame.guesses.length

                const guess = { code: [] }

                this.getGrid[row].forEach(e => {
                    guess.code.push(e)
                })

                if (!this.confirmIsDisabled) {
                    axios.post(url, guess).then( (response) => {
                        this.$store.commit('setCurrentGame', response.data)
                        this.$store.commit('restartRowGuess')

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
                'getGrid',
                'getCurrentGame'
            ]),
            confirmIsDisabled() {
                let row = this.getCurrentGame.guesses.length
                let disabled = false
                this.getGrid[row].forEach(e => {
                    if (e === '') {
                        disabled = true
                    }
                })
                return disabled
            },
            resetIsDisabled() {
                let row = this.getCurrentGame.guesses.length
                let disabled = true
                this.getGrid[row].forEach(e => {
                    if (e !== '') {
                        disabled = false
                    }
                })
                return disabled
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
                    width: 10px;
                    height: 10px;
                    background: green;
                    margin: 3px;
                    border-radius: 20px;
                }
            }
        }

        .new-game-cta {
            cursor: pointer;
            position: fixed;
            left: 50%;
            transform: translate(-50%, 0);
            bottom: 10%;
            font-weight: 500;
            background: white;
            border-radius: 25px;
            padding: 10px;
            text-decoration: none;
            line-height: 20px;
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

            .new-game-cta {
                position: absolute;
                bottom: 0;
                left: 70px;
                min-width: 105px;
            }
        }
    }


</style>

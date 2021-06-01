<template>
    <div class="actions">
        <a v-on:click="confirmGuess" class="confirm shadow" :class="isDisabled ? ' disabled' : ''">
            <img src="../assets/icons/check.png" height="20px" width="20px"/>
        </a>
        <a v-on:click="newGame" class="reset shadow" :class="isDisabled ? ' disabled' : ''">
            <img src="../assets/icons/reset.png" height="20px" width="20px"/>
        </a>
        <div v-if="getCurrentGame.status && getCurrentGame.status !== 'running'" class="results">
            <h3 class="win">{{ getCurrentGame.status }}</h3>
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
            newGame () {
                const url = 'http://localhost:8000/api/games/';
                const game = {
                    'num_colors': 4,
                    'num_slots': 4,
                    'max_guesses': 8
                }

                this.$store.commit('restartRowGuess')

                axios.post(url, game).then( (response) => {
                    this.$store.commit('setCurrentGame', response.data)
                    console.log(this.getCurrentGame.secret_code)
                })
            },

            confirmGuess () {
                let game = this.getCurrentGame
                const id = game.id;
                const url = 'http://localhost:8000/api/games/' + id + '/guesses/';

                const guess = {
                    code: []
                }

                for (var i in this.$store.getters.getRowGuess) {
                    guess.code.push(this.$store.getters.getRowGuess[i])
                }

                if (!this.isDisabled) {
                    axios.post(url, guess).then( (response) => {
                        this.$store.commit('setCurrentGame', response.data)
                        this.$store.commit('restartRowGuess')

                        let arr = []
                        let row = this.getCurrentGame.guesses.length -1

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
                'getCurrentGame',
                'getPegs'
            ]),
            isDisabled() {
                let disabled = false
                this.$store.getters.getRowGuess.forEach(e => {
                    if (e === '') {
                        disabled = true
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

        .results {
            margin-top: 20px;

            h3 {
                font-weight: 800;
                margin: 0;

                &.win {
                    color: green;
                }

                &.loose {
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
            position: absolute;
            bottom: 1px;
            background: white;
            border-radius: 25px;
            padding: 10px;
            text-decoration: none;
            line-height: 20px;
        }

    }


    @media screen and (min-width: 768px) {

        .actions {
            .new-game-cta {
                left: 10px;
            }
        }
    }


</style>

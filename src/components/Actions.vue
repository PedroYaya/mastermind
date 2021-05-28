<template>
    <div class="actions">
        <a v-on:click="confirmGuess" class="confirm shadow disabled">
            <img src="../assets/icons/check.png" height="20px" width="20px"/>
        </a>
        <a class="reset shadow disabled">
            <img src="../assets/icons/reset.png" height="20px" width="20px"/>
        </a>
        <div class="results">
            <h3 class="win">WON</h3>
            <span>Solution:</span>
            <div class="solution">
                <div class="slot"></div>
                <div class="slot"></div>
                <div class="slot"></div>
                <div class="slot"></div>
            </div>
        </div>
        <a v-on:click="newGame" class="new-game-cta shadow">New Game</a>
    </div>
</template>

<script>
    import axios from 'axios'

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
                axios.post(url, game).then( (response) => {
                    this.$store.commit('setCurrentGame', response.data)
                    console.log(response.data)
                })
            },

            confirmGuess () {
                const id = this.$store.getters.getCurrentGame.id;
                const url = 'http://localhost:8000/api/games/' + id + '/guesses/';
                const guess = {
                    code: ['orange', 'blue', 'green', 'yellow']
                }
                axios.post(url, guess).then( (response) => {
                    console.log(response.data)
                })
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

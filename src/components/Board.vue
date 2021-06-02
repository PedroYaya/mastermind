<template>
    <div class="board shadow">
        <div v-for="(row, i) in getGrid" :key="'row-'+i" class="guess-row">

            <h2 class="row-index"
                :class="[rowIndex !== i || getGameIsDisabled ? ' disabled' : '']">
                0{{ i + 1 }}
            </h2>

            <div class="guess">
                <a v-for="(guess, j) in getGrid[i]"
                   :key="'guess-'+j"
                   v-on:click="guessUnit(i, j)"
                   :style="{background: getGrid[i][j]}"
                   class="index">
                </a>
            </div>

            <div class="result">
                <div class="pegs-row">
                    <div v-for="(peg, k) in getPegs[i]"
                         :key="'peg-'+k"
                         class="peg"
                         :class="peg">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCurrentGame } from '../store/constants'
    import { getUnitGuess } from '../store/constants'
    import { getGrid } from '../store/constants'
    import { getPegs } from '../store/constants'
    import { getGameIsDisabled } from '../store/constants'

    export default {
        name: 'Board',
        beforeMount() {
            this.$store.dispatch('newGame')
        },
        computed: {
            ...mapGetters([
                getCurrentGame,
                getUnitGuess,
                getGrid,
                getPegs,
                getGameIsDisabled
            ]),
            rowIndex(){
                return this.getCurrentGame.guesses.length
            }
        },
        methods: {
            guessUnit(i, j) {
                if (i === this.rowIndex && !this.getGameIsDisabled) {
                    let arr = this.getGrid[i]
                    arr.splice(j, 1, this.getUnitGuess)

                    let row = i
                    this.$store.commit('setGrid', {
                        row,
                        arr
                    })
                }
            }
        }
    }
</script>

<style lang="scss">

    .board {
        background: white;
        border-radius: 7px;
        margin: 0 10px;
        padding: 5px;
    }

    .guess-row {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;

        .row-index {
            color: gray;
            margin: 0;

            &.disabled {
                color: #e2e2e2;
            }
        }

        .guess {
            display: flex;
            margin: 0px 5px;

            .index {
                cursor: pointer;
                width: 30px;
                height: 30px;
                border-radius: 30px;
                background: #f0f0f0;
                margin: 5px;
            }
        }

        .pegs-row {
            display: grid;
            grid-template-columns: 50% 50%;

            .peg {
                width: 10px;
                height: 10px;
                border-radius: 15px;
                background: #c9c9c9;
                margin: 2px;

                &.black {
                    background: black;
                }

                &.white {
                    background: white;
                    border: 1px solid black;
                }
            }
        }

    }

    @media screen and (min-width: 768px) {

        .board {
            padding: 20px;

            .guess-row {

                .row-index {
                    padding: 0 20px;
                }

                .guess {
                    margin: 0px 15px;

                    .index {
                        margin: 10px;
                    }
                }
            }
        }
    }

</style>

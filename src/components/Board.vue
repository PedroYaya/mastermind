<template>
    <div class="board shadow">
        <div v-for="(row, i) in getCurrentGame.max_guesses" :key="i" class="guess-row">
            <h2 class="number"> {{ i + 1 }}</h2>
            <div class="guess">
                <a v-for="(slot,j) in getCurrentGame.num_slots"
                   :key="j"
                   v-on:click="guessUnit(i, j)"
                   :style="[activeRow === i ? {background: colors[j]} : {}]"
                   class="index">
                </a>
            </div>
            <div class="result">
                <div class="spot-row">
                    <div class="spot"></div>
                    <div class="spot"></div>
                </div>
                <div class="spot-row">
                    <div class="spot"></div>
                    <div class="spot"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Board',
        data() {
            return {
                colors: {
                    0: '',
                    1: '',
                    2: '',
                    3: '',
                }
            }
        },
        computed: {
            ...mapGetters([
                'getCurrentGame',
                'getUnitGuess'
            ]),
            activeRow(){
               return this.getCurrentGame.guesses.length
            }
        },
        methods: {
            guessUnit(i, j) {
                if (i === this.activeRow) {
                    this.colors[j] = this.getUnitGuess;
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

        .number {
            color: #e2e2e2;
            margin: 0;

            &.enabled {
                color: gray;
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

        .spot-row {
            display: flex;
        }

        .spot {
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

    @media screen and (min-width: 768px) {

        .board {
            padding: 10px;

            .guess-row {
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

<template>
    <div class="colors">
        <button  v-for="(color, i) in getCurrentGame.colors" :key="i"
            v-on:click="setUnitGuess(i)"
            :style="{background: color}"
            :class="active === i ? ' active ' + color  : ''"
            class="color">
        </button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCurrentGame } from '../store/constants'

    export default {
        name: 'Colors',
        data() {
            return {
                active: ''
            }
        },
        computed: {
            ...mapGetters([
                getCurrentGame,
            ])
        },
        methods: {
            setUnitGuess(i) {
                this.active = i
                this.$store.commit('setUnitGuess', this.getCurrentGame.colors[i])
            }
        }
    }
</script>

<style lang="scss">

    .colors {
        margin-top: 20px;

        .color {
            cursor: pointer;
            display: block;
            margin: 15px auto;
            border: unset;
            width: 27px;
            height: 27px;
            border-radius: 30px;

            @media screen and (min-width: 768px) {
                width: 30px;
                height: 30px;
            }

            &.active {

                &.red {
                    -webkit-box-shadow: 0px 0px 0px 5px #ffcccc;
                    box-shadow: 0px 0px 0px 5px #ffcccc;
                }

                &.blue {
                    -webkit-box-shadow: 0px 0px 0px 5px #cfcffb;
                    box-shadow: 0px 0px 0px 5px #cfcffb;
                }

                &.green {
                    -webkit-box-shadow: 0px 0px 0px 5px #e0f7e0;
                    box-shadow: 0px 0px 0px 5px #e0f7e0;
                }

                &.yellow {
                    -webkit-box-shadow: 0px 0px 0px 5px #f7f7b9;
                    box-shadow: 0px 0px 0px 5px #f7f7b9;
                }
            }
        }
    }

</style>

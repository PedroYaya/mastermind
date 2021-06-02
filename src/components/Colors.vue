<template>
    <div class="colors">
        <a  v-for="(color, i) in getCurrentGame.colors" :key="i"
            v-on:click="setUnitGuess(i)"
            :style="{background: color}"
            class="color">
        </a>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCurrentGame } from '../store/constants'

    export default {
        name: 'Colors',
        computed: {
            ...mapGetters([
                getCurrentGame
            ])
        },
        methods: {
            setUnitGuess(i) {
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
            width: 30px;
            height: 30px;
            border-radius: 30px;
        }
    }
</style>

<template>
    <button v-on:click="reset" class="reset shadow" :class="isDisabled ? ' disabled' : ''">
        <img src="../../assets/icons/reset.png" height="20px" width="20px"/>
    </button>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getGrid } from '../../store/constants'

    export default {
        name: 'Reset',
        computed: {
            ...mapGetters([
                getGrid,
            ]),

            isDisabled() {
                let firstRow = this.getGrid[0]
                return !firstRow.some(guess => guess)
            }
        },
        methods: {
            reset() {
                if (!this.isDisabled) {
                    this.$store.dispatch('newGame',true)
                }
            }
        }
    }
</script>

<style lang="scss">

    .reset {
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

        .reset {
            margin: 15px !important;
        }
    }

</style>

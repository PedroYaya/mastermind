<template>
    <button v-on:click="confirmGuess" class="confirm shadow" :class="isDisabled ? ' disabled' : ''">
        <img src="../../assets/icons/check.png" height="20px" width="20px"/>
    </button>
</template>

<script>
    export default {
        name: 'Confirm',
        props: {
            isDisabled: Boolean
        },
        methods: {
            confirmGuess() {
                this.$emit('confirmGuess')
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
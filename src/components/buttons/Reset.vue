<template>
    <button v-on:click="reset" class="reset shadow" :class="isDisabled ? ' disabled' : ''">
        <img src="../../assets/icons/reset.png" height="20px" width="20px"/>
    </button>
</template>

<script>
    export default {
        name: 'Reset',
        props: {
            isDisabled: Boolean
        },
        methods: {
            reset() {
                this.$emit('reset')
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

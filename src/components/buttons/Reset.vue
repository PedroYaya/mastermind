<template>
    <a v-on:click="reset" class="reset shadow" :class="isDisabled ? ' disabled' : ''">
        <img src="../../assets/icons/reset.png" height="20px" width="20px"/>
    </a>
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

</style>

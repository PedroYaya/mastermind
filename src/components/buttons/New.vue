<template>
    <a v-on:click="newGame" class="new-game shadow">New Game</a>
</template>

<script>
    export default {
        name: 'New',
        methods: {
            newGame() {
                this.$emit('newGame')
            }
        }
    }
</script>

<style lang="scss">

    .new-game {
        cursor: pointer;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 10%;
        font-weight: 500;
        background: white;
        border-radius: 25px;
        padding: 10px;
        text-decoration: none;
        line-height: 20px;
    }

    @media screen and (min-width: 768px) {

        .new-game {
            position: absolute;
            bottom: 0;
            left: 70px;
            min-width: 105px;
        }
    }

</style>

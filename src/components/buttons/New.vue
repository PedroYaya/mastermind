<template>
    <button v-on:click="newGame" class="new-game shadow">{{ text }}</button>
</template>

<script>
    export default {
        name: 'New',
        props: ['text'],
        methods: {
            newGame() {
                this.$store.dispatch('newGame',true)
            }
        }
    }
</script>

<style lang="scss">

    .new-game {
        cursor: pointer;
        border: unset;
        color: #2794ea;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 5%;
        font-weight: 500;
        background: white;
        border-radius: 25px;
        padding: 10px;
        text-decoration: none;
        line-height: 20px;
    }

    @media screen and (min-width: 340px) {

        .new-game {
            bottom: 10%;
        }
    }

    @media screen and (min-width: 375px) {

        .new-game {
            bottom: 20%;
        }
    }

    @media screen and (min-width: 768px) {

        .new-game {
            position: absolute;
            bottom: 0;
            left: 70px;
            min-width: 110px;
        }
    }

</style>

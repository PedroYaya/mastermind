<template>
    <div class="mastermind">

        <div class="title-container" :class="!getGameIsDisabled && getCurrentGame.status === 'running' ? ' reference' : ''">
            <h2>Mastermind</h2>
            <p v-if="!getGameIsDisabled && getCurrentGame.status === 'running'">
                Game reference <br> {{ getCurrentGame.reference}}
            </p>
        </div>

        <div class="game-container">
            <Colors/>
            <Board/>
            <Actions/>
        </div>
    </div>
</template>

<script>
    import Colors from "./Colors";
    import Board from "./Board";
    import Actions from "./Actions";
    import { mapGetters } from 'vuex'

    export default {
        name: 'Mastermind',
        components: {
            Colors,
            Board,
            Actions
        },
        computed: {
            ...mapGetters([
                'getCurrentGame',
                'getGameIsDisabled'
            ]),
        }
    }
</script>

<style lang="scss">

    .title-container {
        display: flex;
        justify-content: center;

        p {
            font-size: 13px;
            line-height: 16px;
            text-align: left;
            margin: 0 0 0 6px;
        }
    }

    .game-container {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        padding: 5px;
        width: 100%;
        margin: auto;
    }

    @media screen and (min-width: 768px) {

        .title-container {
            &.reference {
                position: relative;
                left: 49px;
            }
        }

        .game-container {
            min-width: 500px;
            width: fit-content;
        }
    }
</style>

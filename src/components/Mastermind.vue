<template>
    <div class="mastermind">
        <h2>Mastermind</h2>

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

    export default {
      name: 'Mastermind',
      components: {
          Colors,
          Board,
          Actions
      }
    }
</script>

<style lang="scss">

    .game-container {
        display: grid;
        grid-template-columns: 10% 70% 20%;
        max-width: 600px;
        margin: auto;
    }

    @media screen and (min-width: 768px) {
        .game-container {
            grid-template-columns: 20% 60% 20%;
        }
    }

    h2 {
        margin: 0;
    }
</style>

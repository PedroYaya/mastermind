<template>
    <div class="mastermind">
        <h1>Mastermind</h1>

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
        display: flex;
        justify-content: center;
        padding: 5px;
    }

    h2 {
        margin: 0;
    }
</style>

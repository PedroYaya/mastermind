<template>
    <div class="colors">
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
    </div>
</template>

<script>
    export default {
      name: 'Colors',
    }
</script>

<style lang="scss">

    .colors {
        margin-top: 20px;

        .color {
            display: block;
            margin: 15px auto;
            width: 30px;
            height: 30px;
            border-radius: 30px;
            background: green;
        }
    }
</style>

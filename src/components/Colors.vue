<template>
    <div class="colors">
        <div v-for="(color, index) in colors" :key="index" :style="{background: color}" class="color"></div>
    </div>
</template>

<script>
    export default {
        name: 'Colors',
        computed: {
            colors() {
                return this.$store.getters.getCurrentGame.colors
            }
        }
    }
</script>

<style lang="scss">

    .colors {
        margin-top: 20px;

        .color {
            cursor: pointer;
            display: block;
            margin: 15px auto;
            width: 30px;
            height: 30px;
            border-radius: 30px;
            background: green;
        }
    }
</style>

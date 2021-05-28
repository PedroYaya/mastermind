<template>
    <div class="colors">
        <div v-for="(color, index) in getCurrentGame.colors" :key="index"
             :style="{background: color}"
             class="color">
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Colors',
        computed: {
            ...mapGetters([
                'getCurrentGame'
            ])
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
        }
    }
</style>

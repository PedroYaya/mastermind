<template>
    <div class="board shadow">
        <div v-for="(row, index) in rows" :key="index" class="guess-row">
            <h2 class="number"> {{ row.number }}</h2>
            <div class="guess">
                <div class="index"></div>
                <div class="index"></div>
                <div class="index"></div>
                <div class="index"></div>
            </div>
            <div class="result">
                <div class="spot-row">
                    <div class="spot"></div>
                    <div class="spot"></div>
                </div>
                <div class="spot-row">
                    <div class="spot"></div>
                    <div class="spot"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Board',
        data() {
            return {
                rows: [
                    {
                        number: '1'
                    },
                    {
                        number: '2'
                    },
                    {
                        number: '3'
                    },
                    {
                        number: '4'
                    },
                    {
                        number: '5'
                    },
                    {
                        number: '6'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">

    .board {
        background: white;
        border-radius: 7px;
        margin: 0 10px;
        padding: 5px;
    }

    .guess-row {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;

        .number {
            color: #e2e2e2;
            margin: 0;

            &.enabled {
                color: gray;
            }
        }

        .guess {
            display: flex;
            margin: 0px 5px;

            .index {
                cursor: pointer;
                width: 30px;
                height: 30px;
                border-radius: 30px;
                background: #f0f0f0;
                margin: 5px;
            }
        }

        .spot-row {
            display: flex;
        }

        .spot {
            width: 10px;
            height: 10px;
            border-radius: 15px;
            background: #c9c9c9;
            margin: 2px;

            &.black {
                background: black;
            }

            &.white {
                background: white;
                border: 1px solid black;
            }
        }
    }

    @media screen and (min-width: 768px) {

        .board {
            padding: 10px;

            .guess-row {
                .guess {
                    margin: 0px 15px;

                    .index {
                        margin: 10px;
                    }
                }
            }
        }
    }

</style>

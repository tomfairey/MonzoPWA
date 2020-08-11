<template>
    <div class="page pots">
        <div class="pots-container">
            <div class="pot" v-for="pot in pots" :key="pot">
                <div class="name">{{pot.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";

    import { SwipeableBottomSheet } from "vue-swipeable-bottom-sheet";

    export default Vue.extend({
        name: 'Pots',
        components: {
            SwipeableBottomSheet
        },
        props: {
            
        },
        data() {
            return {
                pots: [
                    {
                        name: "Pot #1",
                        image: "",
                        amount: 0,
                        goal: 1000
                    },
                    {
                        name: "Pot #2",
                        image: "",
                        amount: 0,
                        goal: null
                    }
                ]
            };
        },
        methods: {
            
        }
    });
</script>

<style lang="css" scoped>
    .pots {
        font-family: 'HK Grotesk';
        position: relative;
        display: flex;
        width: 100%;
        overflow: hidden;
        z-index: 0;
    }
    #app:before {
        content: '';
        position: absolute;
        top: -600px;
        left: -600px;
        border-radius: 100%;
        background-color: #FF7276;
        width: 1574px;
        height: 615px;
        z-index: -1;
    }
    .home > .card-container {
        width: 100%;
        display: flex;
        min-height: 170px;
        padding: 30px 0;
        justify-content: center;
    }
    .home > .card-container > .card {
        flex-basis: 270px;
        position: relative;
        width: 270px;
        height: 170px;
        border-radius: 10px;
        background-color: #FF4A5E;
        background-image: url('../../img/monzo-card.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 0px 12px 25px rgba(15, 51, 107, 0.25);
    }
    .home > .card-container > .card > .number {
        position: absolute;
        left: 24px;
        bottom: 24px;
        font-size: 16px;
        color: #FFFFFF;
        font-family: monospace;
    }
    .home .swipeable-sheet-contents {
        margin-top: -20px;
        padding: 0 20px;
    }
</style>
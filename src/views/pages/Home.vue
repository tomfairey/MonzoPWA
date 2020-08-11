<template>
    <div class="page home">
        <div class="card-container">
            <div class="card">
                <div class="number">•••• 0121</div>
            </div>
        </div>
        <swipeable-bottom-sheet ref="swipeableBottomSheet">
            <div class="swipeable-sheet-contents">
                <h1>Ay, up!</h1>
                <h3> Give us a pull up...</h3>
                <p>
                    <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </swipeable-bottom-sheet>
    </div>
</template>

<script>
    import Vue from "vue";

    import { SwipeableBottomSheet } from "vue-swipeable-bottom-sheet";

    export default Vue.extend({
        name: 'Home',
        components: {
            SwipeableBottomSheet
        },
        props: {
            
        },
        data() {
            return {
                
            };
        },
        methods: {
            
        }
    });
</script>

<style lang="css" scoped>
    .home {
        font-family: 'HK Grotesk';
        position: relative;
        display: flex;
        width: 100%;
        overflow: hidden;
        z-index: 1;
    }
    .home > .card-container {
        width: 100%;
        display: flex;
        min-height: 170px;
        padding: 30px 0;
        margin: 30px;
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
<template>
    <div class="nav" :class="activeTab === 0 ? 'large' : null">
        <div class="tab" :class="activeTab === tabIndex ? 'active' : null" @click="clickFunction(tabIndex)" v-for="(tab, tabIndex) in tabs" :key="tabIndex">
            <router-link :to="tab.path">
                <div>{{ tab.name }}</div>
            </router-link>
        </div>
        <div class="indicator" :style="{'left': `${indicatorPosition}px`}"></div>
    </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        name: 'Nav',
        props: {
            tabs: {
                type: Array
            }
        },
        data() {
            return {
                activeTab: 0,
                indicatorPosition: 0
            };
        },
        methods: {
            clickFunction: function (i) {
                this.activeTab = i;
                let indicatorPosition = 0;
                setTimeout(() => {
                    indicatorPosition = 0;
                    for(let x = 0; x < i; x++) {
                        indicatorPosition += this.$el.querySelectorAll('.tab')[x].offsetWidth;
                    }
                    this.indicatorPosition = indicatorPosition;
                }, 200);
            }
        }
    });
</script>

<style lang="css" scoped>
    .nav {
        font-family: 'HK Grotesk';
        position: relative;
        display: flex;
        margin: 0;
        padding-left: 20px;
        height: 84px;
        width: calc(100% - 20px);
        background-color: #FF7276;
        padding-top: env(safe-area-inset-top, 0px);
        margin-bottom: 16px;
        z-index: 1;
    }
    .nav:before {
        content: '';
        position: fixed;
        top: 0;
        left: -50vw;
        border-radius: 100%;
        background-color: #FF7276;
        width: 200vw;
        height: 100px;
        z-index: 0;
        transition: height 0.2s ease-in-out, width 0.2s ease-in-out, top 0.2s ease-in-out, right 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out;
    }
    .nav.large:before {
        top: calc(-150px + 84px);
        left: -40px;
        height: 300px;
    }
    .nav > .tab {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-weight: 900;
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        padding: 0 20px 0 0;
    }
    .nav > .tab > a {
        text-emphasis: none;
        text-decoration: none;
        color: inherit;
        outline: 0;
        -webkit-tap-highlight-color: transparent;
    }
    .nav > .tab > a > div {
        transform-origin: bottom right;
        transition: font-size 0.2s ease-out;
        line-height: 0.8;
        margin-bottom: 16px;
        font-weight: 900;
    }
    .nav > .tab.active {
        color: rgba(255, 255, 255, 1);
    }
    .nav > .tab:not(.active) > a > div {
        font-size: 28px;
    }
    .nav > div.tab.active > a > div {
        font-size: 38px;
    }
    .indicator {
        position: absolute;
        margin-left: 20px;
        bottom: 6px;
        width: 60px;
        height: 3px;
        background-color: #FFFFFF;
        border-radius: 8px;
        transition: left 0.2s ease-out;
    }
</style>
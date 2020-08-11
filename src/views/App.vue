<template>
    <div id="app">
        <Nav :tabs="tabs"></Nav>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Vue from "vue";
    import Router from 'vue-router'

    import Nav from './Nav.vue';

    import Home from './pages/Home.vue';
    import Pots from './pages/Pots.vue';

    const routes = [
        {
            name: "Home",
            path: "/",
            component: Home
        },
        {
            name: "Pots",
            path: "/pots",
            component: Pots
        },
        {
            name: "Settings",
            path: "/settings",
            component: Home
        },
    ];

    const router = new Router({
        routes
    });

    export default Vue.extend({
        router: router,
        components: {
            'Nav': Nav,
            'Home': Home,
            'Pots': Pots
        },
        data() {
            return {
                tabs: routes
            };
        },
        methods: {
            
        }
    });
</script>

<style lang="css" scoped>
    #app {
        height: 100vh;
        width: 100vw;
        padding: 0;
        margin: 0;
        background-color: #EEEEEE;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
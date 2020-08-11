import './css/main.css';

import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './views/App.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
    router: new VueRouter(),
    render: createElement => createElement(App)
}).$mount('#app');
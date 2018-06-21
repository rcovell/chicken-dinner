require('./bootstrap');

import Api from './api.js';
window.api = new Api();

import Auth from './auth.js';
window.auth = new Auth();

import VueRouter from 'vue-router';

window.Vue = require('vue');
window.Vue.use(VueRouter);
window.Bus = new Vue();

import App from './components/App.vue';
import router from './routes.js';

const app = new Vue({
  el: '#app',
  components: {
    'app' : App,
  },
  router,
});

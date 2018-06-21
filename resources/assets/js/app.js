
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// import auth from './auth.js';
// window.auth = auth;

require('./bootstrap');

import Auth from './auth.js';
window.auth = new Auth();

import VueRouter from 'vue-router';

window.Vue = require('vue');
window.Vue.use(VueRouter);
window.Bus = new Vue();

import App from './components/App.vue';
import router from './routes.js';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: '#app',
  components: {
    'app' : App,
  },
  router,
});


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import auth from './auth.js';
window.auth = auth;

require('./bootstrap');
import VueRouter from 'vue-router';

window.Vue = require('vue');
window.Vue.use(VueRouter);
window.Bus = new Vue();


import App from './components/App.vue';
import login from './pages/login.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login-page',
      name: 'login',
      component: login,
    },
  //   {
  //     path: '/',
  //     name: 'dashboard',
  //     component: Dashboard
  //   },
  //   {
  //     path: '/games',
  //     name: 'gamesIndex',
  //     component: GamesIndex
  //   },
  //   {
  //     path: '/create',
  //     name: 'createGame',
  //     component: GamesCreate,
  //   },
  ],
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
  el: '#app',
  components: {
    'app' : App,
  },
  router,
});

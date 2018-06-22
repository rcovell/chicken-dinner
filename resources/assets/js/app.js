require('./bootstrap');

import Api from './api.js';
window.api = new Api();

// import Auth from './auth.js';
// window.auth = new Auth();

import VueRouter from 'vue-router';
import Vuex from 'vuex'

window.Vue = require('vue');
window.Bus = new Vue();

Vue.use(VueRouter);
Vue.use(Vuex);

import App from './components/App.vue';
import router from './routes.js';
import store from './store/auth.js';
import './plugins/axios.js';

const app = new Vue({
  el: '#app',
  components: {
    'app' : App,
  },
  store,
  router,
  beforeCreate() {
		this.$store.commit('initialiseStore');
	},
  mounted() {
    //
  },
});

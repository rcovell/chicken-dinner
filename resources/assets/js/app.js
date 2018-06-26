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

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faLock)
Vue.component('fa', FontAwesomeIcon)
Vue.config.productionTip = false

import store from './store/auth.js';
import router from './routes.js';
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
  created() {
    //
  },
  mounted() {
    //
  },
});

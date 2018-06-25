import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    user: {},
  },
  mutations: {
    initialiseStore(state) {
      if(window.localStorage.getItem('store')) {
				this.replaceState(
					Object.assign(state, JSON.parse(window.localStorage.getItem('store')))
				);
			}
		},
    setToken (state, token) {
      state.token = token;
    },
    setUser (state, user) {
      state.user = user;
    },
  },
  actions: {
    login (context, data) {
      context.commit('setToken', data.token);
      context.commit('setUser', data.user);
    },
    logout (context) {
      context.commit('setToken', '');
      context.commit('setUser', {});
    },
    setToken (context, token) {
      context.commit('setToken', token);
    },
    setUser (context, user) {
      context.commit('setUser', user);
    },
  },
  getters: {
    token: state => {
      return state.token;
    },
    user: state => {
      return state.user;
    },
    authenticated: state => !! state.token,
  }
});

store.subscribe((mutation, state) => {
  window.localStorage.setItem('store', JSON.stringify(state));
});

export default store;

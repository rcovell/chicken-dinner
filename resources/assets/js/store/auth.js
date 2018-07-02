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
      if (window.localStorage.getItem('token')) {
        state.token = window.localStorage.getItem('token');
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
  if (mutation.type === 'setToken') {
    window.localStorage.setItem('token', mutation.payload);
  }
});

export default store;

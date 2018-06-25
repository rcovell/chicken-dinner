import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    user: {},
  },
  mutations: {
    // initialiseStore(state) {
		// 	if (window.localStorage.getItem('token')) {
    //     state.token = window.localStorage.getItem('token');
		// 	}
    //   if (window.localStorage.getItem('user')) {
    //     state.user = window.localStorage.getItem('user');
		// 	}
		// },
    //TODO: Setting two variables is not optimal, rework
    setToken (state, token) {
      // state.token = token;
      window.localStorage.setItem('token', token);
    },
    //TODO: Setting two variables is not optimal, rework
    setUser (state, user) {
      // state.user = user;
      window.localStorage.setItem('user', user);
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
      // return state.token;
      return window.localStorage.getItem('token');
    },
    user: state => {
      // return state.user;
      return window.localStorage.getItem('user');
    },
    // authenticated: state => !! state.token,
    authenticated: state => !! window.localStorage.getItem('token'),
  }
});

// Subscribe to store updates
// store.subscribe((mutation, state) => {
//   console.log('mutation.type');
//   console.log(mutation.type);
//   console.log('mutation.payload');
//   console.log(mutation.payload);
//   console.log('state');
//   console.log(state);
// 	Store the state object as a JSON string
// 	localStorage.setItem('token', token);
// });

export default store;

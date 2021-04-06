// import createPersistedState from "vuex-persistedstate"
import authentication from './authentication'
import Vue from "vue";
import Vuex from "vuex";
import projects from './projects'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: '/api'
  },
  mutations: {},
  actions: {},
  modules: {authentication, projects},
  plugins: [
    // createPersistedState(),
  ]
});

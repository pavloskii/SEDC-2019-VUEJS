import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    token: ""
  },
  mutations: {
    setUserDetails(state, { email, token }) {
      state.email = email;
      state.token = token;
    }
  },
  actions: {},
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    }
  }
});

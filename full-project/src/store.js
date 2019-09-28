import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "asd@asd.com",
    token: "blabla",
    id: 123,
    user: {
      name: "Igor"
    },
    users: [{ name: "John" }, { name: "Joanna" }, { name: "Igor" }]
  },
  mutations: {
    setEmail(state, email) {
      state.email = email;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    fetchAds({ commit }, email) {
      //Asinhroni raboti ovde pa posle prajte commit na mutacija
      commit("setEmail", email);
    }
  },
  getters: {
    getEmail(state) {
      return state.email;
    },
    getUsers(state) {
      return state.users.filter(user => user.name.indexOf("Jo") >= 0);
    }
  }
});

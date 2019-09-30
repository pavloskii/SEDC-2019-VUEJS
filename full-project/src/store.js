import Vue from "vue";
import Vuex from "vuex";
import { axiosData } from "./axiosConfig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: "",
    token: "",
    ads: []
  },
  mutations: {
    setUserDetails(state, { email, token }) {
      state.email = email;
      state.token = token;
    },
    setAds(state, newAds) {
      state.ads = newAds;
    }
  },
  actions: {
    fetchAds({ commit }) {
      axiosData.get("/ads.json").then(response => {
        // const values = Object.values(response.data);
        // this.ads = values;
        const responseObject = response.data;

        // const remappedAds = Object.keys(responseObject).map(key => {
        //   const item = responseObject[key];
        //   item.id = key;
        //   return item;
        // });
        const remappedAds = Object.keys(responseObject).map(key => {
          return { id: key, ...responseObject[key] };
        });

        commit("setAds", remappedAds);
      });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    }
  }
});

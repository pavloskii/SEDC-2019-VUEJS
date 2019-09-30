import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  beforeCreate() {
    const token = localStorage.getItem("token");
    if (token === null) {
      return;
    }

    this.$store.commit("setUserDetails", {
      email: "",
      token
    });
  },
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import PostAD from "./views/PostAD.vue";
import AdDetails from "./views/AdDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/post-ad",
      component: PostAD
    },
    {
      path: "/ad-details",
      component: AdDetails
    }
  ]
});

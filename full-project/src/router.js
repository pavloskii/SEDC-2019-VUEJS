import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import PostAD from "./views/PostAD.vue";
import AdDetails from "./views/AdDetails.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Home,
      beforeEnter: navigationGuard
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
      component: PostAD,
      beforeEnter: navigationGuard
    },
    {
      path: "/ad-details/:id",
      component: AdDetails,
      beforeEnter: navigationGuard
    }
  ]
});

function navigationGuard(to, from, next) {
  const token = localStorage.getItem("token");
  if (token !== null) {
    next();
  } else {
    next("/login");
  }
}

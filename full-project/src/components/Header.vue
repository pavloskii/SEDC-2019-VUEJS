<template>
  <header>
    <nav class="navbar navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt />
      </router-link>
      <ul class="nav justify-content-end nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>
            <i class="fas fa-home"></i>
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/post-ad">
            <i class="fas fa-plus-circle"></i>
            Post AD
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout" href>
            <i class="fas fa-sign-out-alt"></i>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("setUserDetails", {
        email: "",
        token: ""
      });
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.nav-item .nav-link {
  color: white;
}

.active {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
/* .router-link-exact-active {
  background-color: white;
  color: blue !important;
}
.router-link-active {
  background-color: white;
  color: blue !important;
} */
</style>
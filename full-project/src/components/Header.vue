<template>
  <header>
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt />
        SEDC ADS
      </a>
      <ul class="nav justify-content-end nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/post-ad">Post AD</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

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
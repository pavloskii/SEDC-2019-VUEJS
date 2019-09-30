<template>
  <div>
    <Header v-if="isLoggedIn" />

    <main class="container margin-bottom-70">
      <router-view></router-view>
    </main>

    <Footer v-if="isLoggedIn" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer: Footer
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style>
body {
  background-color: #9fcfeb;
}
.margin-bottom-70 {
  margin-bottom: 70px;
}
</style>
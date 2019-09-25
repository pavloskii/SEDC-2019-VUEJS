<template>
  <div>
    <Header />

    <main class="container margin-bottom-70">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer: Footer
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
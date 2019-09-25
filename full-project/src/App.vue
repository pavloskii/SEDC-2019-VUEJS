<template>
  <div>
    <Header />

    <main>
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
</style>
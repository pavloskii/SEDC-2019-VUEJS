<template>
  <div>
    <h1>{{ ad.title}}</h1>
    <p>{{ad.description}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    ad() {
      return this.$store.state.ads.find(ad => ad.id === this.$route.params.id);
    }
  }
};
</script>
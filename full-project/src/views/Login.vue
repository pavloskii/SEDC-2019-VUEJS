<template>
  <div>
    <h1>{{email}}</h1>
    <button @click="changeEmailInStore">Change mail in store with mutation</button>
  </div>
</template>

<script>
export default {
  // created() {
  // const emailFromStore = this.$store.state.email;
  // this.email = emailFromStore;
  // }
  // data() {
  //   return {
  //     email: "emailot od data od vue"
  //   };
  // }
  computed: {
    // email() {
    //   return this.$store.state.email;
    // }
    email() {
      return this.$store.getters.getEmail;
    }
  },
  methods: {
    changeEmailInStore() {
      //We use .commit() to call a mutation from the store
      //First parameter: name of the mutation
      //Second parameter: the value that you want to send
      // this.$store.commit("setEmail", "igor@sedc.com");

      //We use .dispatch() to call an action from the store
      //First paramter: name of the action
      //Second parameter: the values we want to send to the action
      this.$store.dispatch("fetchAds", "preku@akcija.com");
    }
  }
};
</script>
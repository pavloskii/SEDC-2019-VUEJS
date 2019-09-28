<template>
  <div class="container mt-5">
    <form @submit.prevent="register">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <router-link to="/login">Already registered? Login</router-link>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { axiosAuth, apiKey } from "../axiosConfig";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      axiosAuth
        .post(`/accounts:signUp?key=${apiKey}`, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response.data.error.message);
        });
    }
  }
};
</script>

<style scoped>
div.container {
  max-width: 400px;
}
</style>
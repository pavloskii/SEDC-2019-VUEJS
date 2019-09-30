<template>
  <div class="container mt-5">
    <form @submit.prevent="login" novalidate>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <router-link to="/register">Don't have an account? Register</router-link>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div class="alert alert-danger mt-3" role="alert" v-if="errors.length > 0">
      <p v-for="error in errors" :key="error">{{error | errorMessage}}</p>
    </div>
  </div>
</template>

<script>
import { axiosAuth, apiKey } from "../axiosConfig";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    login() {
      this.errors = [];

      if (this.email == "") {
        this.errors.push("Email is required");
      } else if (!/[^@]+@[^\.]+\..+/g.test(this.email)) {
        this.errors.push("Invalid email");
      }

      if (this.password == "") {
        this.errors.push("Password is required");
      } else if (this.password.length < 6) {
        this.errors.push("Password needs to be atleast 6 characters");
      }

      if (this.errors.length > 0) {
        return;
      }

      axiosAuth
        .post(`/accounts:signInWithPassword?key=${apiKey}`, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then(response => {
          this.$store.commit("setUserDetails", {
            email: response.data.email,
            token: response.data.idToken
          });
          this.$router.push("/");
        })
        .catch(error => {
          this.errors.push(error.response.data.error.message);
        });
    }
  },
  filters: {
    errorMessage(value) {
      return value.replace(/_/g, " ");
    }
  }
};
</script>

<style scoped>
div.container {
  max-width: 400px;
}
</style>
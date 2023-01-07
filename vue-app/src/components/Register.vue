<template>
  <div id="register">
    <div class="row justify-content-md-center">
      <div class="card" style="width: 30%">
        <form class="form-register" @submit.prevent="register">
          <div class="card-header">
            <h1 class="h3 mb-3 font-weight-normal">Create Account</h1>
          </div>
          <div class="card-body">
            <div
              class="alert alert-danger"
              role="alert"
              v-if="registrationErrors"
            >
              {{ registrationErrorMsg }}
            </div>
            <label for="username" class="sr-only">Username</label>
            <input
              type="text"
              id="username"
              class="form-control"
              placeholder="Username"
              v-model="user.username"
              required
              autofocus
            />
            <label for="password" class="sr-only">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="Password"
              v-model="user.password"
              required
            />
            <br />
            <input
              type="password"
              id="confirmPassword"
              class="form-control"
              placeholder="Confirm Password"
              v-model="user.confirmPassword"
              required
            />
            <br />
            <hr />
            <router-link :to="{ name: 'login' }">Have an account?</router-link>
            <br />
            <button class="btn btn-md btn-primary btn-block" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "@/services/auth.service";
export default {
  name: "register",
  data() {
    return {
      user: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      registrationErrors: false,
      registrationErrorMsg: "There was a problem with registering",
    };
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = "Password & Confirm Password do not match.";
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: "/login",
                query: { registration: "success" },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = "Bad Request: Validation Errors";
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = "There were problems registering this user.";
    },
  },
};
</script>

<style scoped></style>

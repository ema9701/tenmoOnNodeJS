<template>
  <div id="navbar">
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      style="background-color: #e3f2fd"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tenmo-Node</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-if="loggedIn"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" v-if="loggedIn">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'home' }" class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'users' }" class="nav-link"
                >View Users</router-link
              >
            </li>
            <li class="nav-item">
              <router-link v-bind:to="{ name: 'logout' }" class="nav-link"
                >Logout</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    loggedIn() {
      return this.$store.state.accessToken != "";
    },
  },
};
</script>

<style></style>

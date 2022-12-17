<template>
  <div id="app">
    <div id="nav">
      <nav v-if="loggedIn">
        <router-link v-bind:to="{ name: 'home' }">Home</router-link
        >&nbsp;|&nbsp;
        <router-link :to="{ name: 'account' }">Account</router-link
        >&nbsp;|&nbsp;
        <router-link :to="{ name: 'users' }">View Users</router-link
        >&nbsp;|&nbsp;
        <router-link v-bind:to="{ name: 'logout' }">Logout</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    loggedIn() {
      return this.$store.state.accessToken != "";
    },
  },
};
</script>

<style>
</style>

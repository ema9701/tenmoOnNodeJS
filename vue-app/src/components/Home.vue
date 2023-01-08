<template>
  <div id="home">
    <h1>Home</h1>
    <ul>
      <li>Id: {{ currentUser.id }}</li>
      <li>Name: {{ currentUser.username }}</li>
      <li>Token: {{ token.substring(0, 30) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    },
    token() {
      return this.$store.state.accessToken;
    },
  },
};
</script>

<style scoped></style>

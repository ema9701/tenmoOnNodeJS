<template>
  <div id="home" class="d-flex justify-content-md-center">
    <div class="card" style="width: 60%">
      <div class="card-header">Tenmo Dashboard</div>
      <div class="card-body">
        <h2 class="card-title">Current user info:</h2>
        <p>Id: {{ currentUser.id }}</p>
        <p>Name: {{ currentUser.username }}</p>
        <p>Token: {{ currentToken.substring(0, 30) }}</p>
      </div>
      <div></div>
    </div>
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
      return this.$store.getters.currentUser;
    },
    currentToken() {
      return this.$store.getters.activeToken;
    },
  },
};
</script>

<style scoped></style>

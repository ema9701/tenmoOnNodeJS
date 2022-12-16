<template>
  <div id="logout">
    <h1>Logout</h1>
  </div>
</template>

<script>
export default {
  name: "logout",
  data() {
    return {};
  },
  created() {
    this.$store.commit("LOGOUT");
    this.$router.push({ name: "login" });
  },
};
</script>

<style scoped>
</style>
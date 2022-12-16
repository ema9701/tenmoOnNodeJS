<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.user.username }}</strong>
      </h3>
      <p>
        <strong>Token:</strong>
        {{ currentUser.accessToken.substring(0, 20) }} ...
        {{
          currentUser.accessToken.substring(currentUser.accessToken.length - 20)
        }}
      </p>
      <p>
        <strong>User Id:</strong>
        {{ currentUser.user.id }}
      </p>
      <p>
        <strong>Account: </strong>
      </p>
    </header>
  </div>
</template>

<script>
export default {
  name: "Account",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created() {},
  mounted() {
    if (!this.currentUser) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style scoped>
</style>
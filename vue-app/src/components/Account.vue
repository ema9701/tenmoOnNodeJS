<template>
  <div>
    <h4>Account Info:</h4>
    <ul>
      <li>Account ID: {{ activeAccount.accountId }}</li>
      <li>User ID: {{ activeAccount.userId }}</li>
      <li>Balance: {{ activeAccount.balance }}</li>
    </ul>
  </div>
</template>

<script>
import accountService from "@/services/account.service";

export default {
  name: "account",
  data() {
    return {};
  },
  computed: {
    currentUserId() {
      return this.$store.state.user.id;
    },
    activeAccount() {
      return this.$store.state.account;
    },
  },
  created() {
    const loggedIn = this.currentUserId;
    accountService.getAccountById(loggedIn).then((response) => {
      this.$store.commit("SET_ACCOUNT", response.data);
    });
  },
};
</script>

<style scoped>
</style>
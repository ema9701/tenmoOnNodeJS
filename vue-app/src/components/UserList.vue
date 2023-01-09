<template>
  <div class="container text-center">
    <div id="user-list" class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="user in filteredUsers" :key="user.id">
        <user-card :user="user">
          <template #transferForm>
            <form @submit.prevent="transferCash(currentUser.id, user.id)">
              <label>From: {{ currentUser.id }}</label>
              <label>To: {{ user.id }}</label>
              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input
                  type="numeric"
                  class="form-control"
                  aria-label="Amount"
                  v-model.number="transfer.amount"
                />
                <span class="input-group-text">.00</span>
              </div>
              <button type="submit" class="btn btn-primary">
                Send transfer
              </button>
            </form>
          </template>
        </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import userService from "@/services/user.services";
import UserCard from "@/components/UserCard.vue";
import transferService from "@/services/transfer.service";

export default {
  name: "user-list",
  components: { UserCard },
  data() {
    return {
      transfer: {
        accountFromId: "",
        accountToId: "",
        amount: 0,
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    users() {
      return this.$store.state.users;
    },
    filteredUsers() {
      return this.users.filter((f) => f.id !== this.currentUser.id);
    },
  },
  methods: {
    getUsers() {
      userService.listUsers().then((response) => {
        if (response.status == 200) {
          this.$store.commit("SET_USERS", response.data);
        }
      });
    },
    transferCash(from, to) {
      this.transfer.accountFromId = from;
      this.transfer.accountToId = to;
      console.log(this.transfer);
      transferService.createTransfer(this.transfer).then((response) => {
        if (response.status === 201) {
          alert("transfer processed!");
        }
      });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped></style>

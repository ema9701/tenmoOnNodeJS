<template>
  <div class="container text-center">
    <div id="user-list" class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="user in users" :key="user.id">
        <user-card :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import userService from "@/services/user.services";
import UserCard from "@/components/UserCard.vue";

export default {
  name: "user-list",
  components: { UserCard },
  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.state.users;
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
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped></style>

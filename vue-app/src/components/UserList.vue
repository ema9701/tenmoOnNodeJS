<template>
  <div id="user-list" class="container fluid">
    <b-card-group deck>
      <b-card header="Tenmo Users">
        <b-list-group v-for="user in users" :key="user.id">
          <b-list-group-item :user="user" button>{{
            user.username
          }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import userService from "@/services/user.services";

export default {
  name: "user-list",
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

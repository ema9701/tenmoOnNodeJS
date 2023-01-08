<template>
  <div id="user-card">
    <div class="card text-center" style="max-width: auto">
      <div class="card-header">Tenmo user</div>
      <div class="card-body">
        <h5 class="card-title">{{ user.username }}</h5>
        <p class="card-text">ID: {{ user.id }}</p>
        <button class="btn btn-primary">Transact</button>
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user"],
};
</script>

<style scoped></style>

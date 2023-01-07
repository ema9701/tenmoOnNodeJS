<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <div class="container-fluid text-center">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style></style>

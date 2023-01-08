<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <main class="container-fluid m-auto text-center">
      <!-- <div class="container-fluid text-center"> -->
      <router-view />
      <!-- </div> -->
    </main>
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

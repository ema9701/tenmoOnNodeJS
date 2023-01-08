<template>
  <div>
    <navbar />
    <main>
      <div class="container-fluid text-center">
        <router-view />
      </div>
    </main>
    <footbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footbar from "./components/Footbar.vue";

export default {
  name: "App",
  components: { Navbar, Footbar },
};
</script>

<style>
main {
  height: 80vh;
  display: flex;
  align-items: center;
}
</style>

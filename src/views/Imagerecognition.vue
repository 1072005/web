<template>
  <div id="app">
    <div id="nav">
      <Navbar />

      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from "../components/Home/Navbar.vue";

import Connect from "../components/Home/Connect.vue";

export default {
  name: "App",
  components: {
    Navbar,

    Connect,
  },
};
</script>

<style>
</style>
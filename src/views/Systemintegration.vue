<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <Pagination />
      <Sucesssystem />
      <Projectname />
      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from "../components/Home/Navbar.vue";
import Pagination from "../components/Systemintegration/Pagination.vue";
import Connect from "../components/Home/Connect.vue";
import Sucesssystem from "../components/Systemintegration/Sucess_system.vue";
import Projectname from "../components/Systemintegration/Projectname.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Pagination,
    Connect,
    Sucesssystem,
    Projectname
  },
};
</script>

<style>
</style>
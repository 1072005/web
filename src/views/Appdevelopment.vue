<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <PaginationApp />
      <SucessApps />
      <Appname />
      <Appintroduce />
      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from "../components/Home/Navbar.vue";
import PaginationApp from "../components/Appdevelopment/Paginationapp.vue";
import SucessApps from "../components/Appdevelopment/Sucess_app.vue";
import Appname from "../components/Appdevelopment/Appname.vue";
import Appintroduce from "../components/Appdevelopment/Appintroduce.vue";
import Connect from "../components/Home/Connect.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PaginationApp,
    SucessApps,
    Appname,
    Appintroduce,
    Connect,
  },
};
</script>

<style>
</style>
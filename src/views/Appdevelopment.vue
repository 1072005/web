<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <Pagination />
      <Developprocess />
      <Projectname />
      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from '../components/Home/Navbar.vue';
import Pagination from '../components/Systemintegration/Pagination.vue';
import Developprocess from '../components/Home/Developprocess.vue'
import Projectname from '../components/Systemintegration/Projectname.vue'
import Connect from "../components/Home/Connect.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Pagination,
    Developprocess,
    Projectname,
    Connect
  }
}
</script>

<style>
  
</style>
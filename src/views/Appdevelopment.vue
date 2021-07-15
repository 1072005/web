<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <Pagination />
      <Sucessproject />
      <Projectname />
      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from '../components/Navbar.vue';
import Pagination from '../components/Pagination.vue';
import Sucessproject from '../components/Sucessproject.vue'
import Projectname from '../components/Projectname.vue'
import Connect from "../components/Connect.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Pagination,
    Sucessproject,
    Projectname,
    Connect
  }
}
</script>

<style>
  
</style>
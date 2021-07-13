<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <Pagination />

      
    </div>
  </div>
</template>



<script>
import Navbar from '../components/Navbar.vue';
import Pagination from '../components/Pagination.vue';




export default {
  name: 'App',
  components: {
    Navbar,
    Pagination
  }
}
</script>

<style>
  
</style>
<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <Pagination />
      <Sucessproject />
      
    </div>
  </div>
</template>



<script>
import Navbar from '../components/Navbar.vue';
import Pagination from '../components/Pagination.vue';
import Sucessproject from '../components/Sucessproject.vue'



export default {
  name: 'App',
  components: {
    Navbar,
    Pagination,
    Sucessproject
  }
}
</script>

<style>
  
</style>
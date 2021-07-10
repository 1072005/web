<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    <Carousel />
    <Introduce />
    <Projectintrolduce  />
    <Connect  />
      
    </div>
  </div>
</template>



<script>
import Navbar from '../components/Navbar.vue';
import Carousel from '../components/Carousel.vue';
import Introduce from '../components/Introduce.vue';
import Projectintrolduce from '../components/Projectintrolduce.vue';
import Connect from '../components/Connect.vue';



export default {
  name: 'App',
  components: {
    Navbar,
    Carousel,
    Introduce,
    Projectintrolduce,
    Connect,
  }
}
</script>

<style>
  
</style>

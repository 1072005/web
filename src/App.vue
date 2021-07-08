<template>
  <div id="app">


    <Navbar />
    <Carousel />
    <Introduce />
    <Projectintrolduce  />
   
  </div>
    
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import Carousel from './components/Carousel.vue';
import Introduce from './components/Introduce.vue';
import Projectintrolduce from './components/Projectintrolduce.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Carousel,
    Introduce,
    Projectintrolduce,
  }
}
</script>

<style>
  
</style>

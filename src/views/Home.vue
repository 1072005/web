<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <Carousel />
      <Introduce />
      <Developprocess />
      <Havetechnology />
      <Sucessproject />
      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from "../components/Home/Navbar.vue";
import Carousel from "../components/Home/Carousel.vue";
import Introduce from "../components/Home/Introduce.vue";
import Havetechnology from "../components/Home/Havetechnology.vue";
import Developprocess from "../components/Home/Developprocess.vue";
import Sucessproject from "../components/Home/Sucessproject_carousel.vue"
import Connect from "../components/Home/Connect.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Carousel,
    Introduce,
    Havetechnology,
    Sucessproject,
    Connect,
    Developprocess,
  },
};
</script>

<style>
</style>

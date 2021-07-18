<template>
  <div id="example">
    <carousel-3d
      :autoplay="true"
      :width="680"
      :height="350"
      :autoplayHoverPause="true"
      :autoplayTimeout="4000"
    >
      <slide v-for="(slide, i) in slides" :index="0" :key="(slide, i)">
        <figure>
          <img src="../../assets/Thermalimg.png">
        </figure>
      </slide>

      <slide v-for="(slide, i) in slides" :index="1" :key="(slide, i+1)">
        <figure>
          <img src="../../assets/Thermalimg1.png">
        </figure>
      </slide>

      
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: 1,
    };
  },
};
</script>
<style>


.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
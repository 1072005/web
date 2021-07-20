<template>
  <div class="example">
    <div class="top_order_1">
      <div class="topline"></div>
      <img src="../../assets/worriesicon.png" style="height=50px" />
      <div class="topname">解憂福利社</div>
    </div>

    <carousel-3d
      :autoplay="true"
      :width="680"
      :height="350"
      :autoplayHoverPause="true"
      :autoplayTimeout="4000"
    >
      <slide v-for="(slide, i) in slides" :index="0" :key="(slide, i)">
        <figure>
          <img src="../../assets/worriesimg1.png" />
        </figure>
      </slide>
      <slide v-for="(slide, i) in slides" :index="1" :key="(slide, i+1)">
        <figure>
          <img src="../../assets/worriesimg2.png" />
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

</style>
<template>
  <div class="example">
    <div class="top_order_1">
      <div class="topline"></div>
      <img src="../../assets/Dolly.png" style="height=50px" />
      <div class="topname">漫漫物流 LineBot</div>
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
          <img src="../../assets/dollyimg.png" />
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
.top_order_1 img {
  padding-top: 5px;
  width: 120px;
  height: 120px;
}

@media (max-width: 576px) {
  .top_order_1 img {
    width: 80px;
    height: 80px;
  }
}
</style>
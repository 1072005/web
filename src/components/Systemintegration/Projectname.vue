<template>
  <div class="example">
    <div class="top_order">
      <div class="topline"></div>
      <img src="../../assets/FeverGuard.jpg" />
      <div class="topname">Fever Guard 熱像儀</div>
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
          <img src="../../assets/Thermalimg.png" />
        </figure>
      </slide>

      <slide v-for="(slide, i) in slides" :index="1" :key="(slide, i + 1)">
        <figure>
          <img src="../../assets/Thermalimg1.png" />
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
.topline {
  display: inline-block;
  width: 80px;
  border-top: 4px solid #62accf;
}
.top_order img {
  width: 160px;
  height: 100px;
}
.topname {
  position: relative;
  font-size: 2rem;
  top: -72px;
  text-align: center;
  font-weight: bold;
}
@media (max-width: 576px) {
  .topname {
    font-size: 1.1rem;
    font-weight: bold;
    top: -10px;
  }
  .topline {
    width: 20px;
  }
  .top_order img {
    width: 80px;
    height: 50px;
  }
}
@media (min-width: 576px) and (max-width:768px) {
  .topname {
    font-size: 1.8rem;
    top: 0px;
  }
  .topline {
    width: 20px;
  }
  
}
</style>
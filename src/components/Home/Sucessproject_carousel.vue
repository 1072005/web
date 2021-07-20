<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      no-Touch="true"
      background="#FFFFF"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/Thermalimaging.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/Worries.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/Logistics.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../../assets/MyFace.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.carousel {
  padding-top: 0px;
}
.img-fluid {
  height: 700px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  background-size: 100%, 100%;
  background-image: none;
}

.carousel-control-next-icon:after {
  content: ">";
  font-size: 55px;
  color: black;
}

.carousel-control-prev-icon:after {
  content: "<";
  font-size: 55px;
  color: black;
}
.carousel-indicators li {
  background-color: black ;
}
@media (max-width: 1400px) {
  .img-fluid {
    height: auto;
  }
}
</style>
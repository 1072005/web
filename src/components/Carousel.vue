<template>
  <b-container fluid class="carousel">
    <h1>廣告牆</h1>
  </b-container>
</template>

<script>
export default {
  name: "Carousel",
};
</script>
<style>
.carousel {
  padding-top: 100px;
}
@media (max-width: 765px) {
  .carousel {
    padding-top: 50px;
  }
}
@media (min-width: 765px)and (max-width: 992px) {
  .carousel {
    padding-top: 40px;
  }
}
</style>
<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <PaginationFace />
      <SucessFaces />
      <Facename />
      <Faceintroduce />
      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from "../components/Home/Navbar.vue";
import PaginationFace from "../components/Facerecognition/PaginationFace.vue";
import SucessFaces from "../components/Facerecognition/Sucess_face.vue";
import Facename from "../components/Facerecognition/Facename.vue";
import Faceintroduce from "../components/Facerecognition/Faceintroduce.vue";
import Connect from "../components/Home/Connect.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PaginationFace,
    SucessFaces,
    Facename,
    Faceintroduce,
    Connect,
  },
};
</script>

<style>
</style>
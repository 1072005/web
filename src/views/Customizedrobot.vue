<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <PaginationRobot />
      <SucessRobots />
      <Robotname />
      <Robotintroduce />
      <Connect />
    </div>
  </div>
</template>



<script>
import Navbar from "../components/Home/Navbar.vue";
import PaginationRobot from "../components/Customizedrobot/Paginationrobot.vue";
import SucessRobots from "../components/Customizedrobot/Sucess_robot.vue";
import Robotname from "../components/Customizedrobot/Robotname.vue";
import Robotintroduce from "../components/Customizedrobot/Robotintroduce.vue";
import Connect from "../components/Home/Connect.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PaginationRobot,
    SucessRobots,
    Robotname,
    Robotintroduce,
    Connect,
  },
};
</script>

<style>
</style>
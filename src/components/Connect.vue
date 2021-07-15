<template>
  <b-container fluid>
    <div class="connect_back" id="connect">
      <h1>聯絡我們</h1>
      <b-row class="fontbox">
        <b-col md="12" sm="12" lg="12">
          <p>+886-3-4912580</p>
        </b-col>
        <b-col md="4" sm="4" lg="4">
          <p>Email：mywaytech@getmywaytech.com</p>
        </b-col>
        <b-col md="4" sm="4" lg="4">
          <a href="https://www.facebook.com/MyWayTechCorp/">
            <font-awesome-icon
              class="fbicon"
              :icon="['fab', 'facebook-f']"
              style="color: white"
          /></a>
        </b-col>
        <b-col md="4" sm="4" lg="4">
          <img class="connecticon" src="../assets/WM-1.png" alt="" />
        </b-col>
        <b-col md="12" sm="12" lg="12">
          <p>地址：320 桃園市中壢區明德路60號5樓</p>
        </b-col>

        <b-col align="center"
          >Copyright ©2021 All rights reserved | by 麥威科技股份有限公司</b-col
        >
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Connect",
};
</script>
<style>
.connect_back {
  background-color: #071c35;
  color: white;

  font-size: 2rem;
}
.fbicon {
  position: relative;
  left: 200px;
  width: 80px !important;
  height: 80px;
  border: solid 2px;
  padding: 10px;
  border-radius: 50%;
  border-color: white;
}
.fbicon:hover {
  background-color: #5496ff;
}
.fa-facebook-f:hover {
  color: white !important;
}
.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  padding-right: 0px !important ;
  padding-left: 0px !important ;
}
.fontbox {
  padding-left: 100px;
}
.connecticon {
  position: absolute;
  bottom: -40px;
  height: auto;
  width: 50%;
}
@media (max-width: 576px) {
  .fontbox {
    padding-left: 15px;
  }
  .connect_back {
    font-size: 0.3rem;
  }
  .fbicon {
    position: absolute;
    width: 40px !important;
    height: 40px;
    left: 250px;
    bottom: -20px;
  }
  .connecticon {
    width: 30%;
    bottom: 70px;
    left: 210px;
  }
}
@media (min-width: 576px) and (max-width: 765px) {
  .connecticon {
    width: 100%;
    bottom: 80px;
    left: -60px;
  }
    .fbicon {
    left: 180px;
    bottom: 0px;
    width: 60px !important;
    height: 60px;
   
  }
  .fontbox {
    font-size: 1rem;
  }
}
@media (min-width: 765px) and (max-width: 992px) {
  .connect_back {
    font-size: 1rem;
  }
  .fbicon {
    left: 80px;
    width: 60px !important;
    height: 60px;
  }
  .connecticon {
    width: 60%;
    bottom: -30px;
    left: 50px;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .connecticon {
    width: 60%;
    bottom: -60px;
    left: 50px;
  }
}
</style>
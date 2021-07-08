
<template>
  <div class="b-container project_back_color">
    <h1>專案介紹</h1>
    <b-row>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/systemicon.png" alt="no picture" />
          <h1>系統整合</h1>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12"> </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12"> </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12"> </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Projectintrolduce",
};
</script>
<style>
.project_back_color {
  height: 1172px;
  background: #c6cfde;
}
img{
  max-width: 100%;
  height: auto;
}
.inbox {
  margin-top: 20px;
}
.h1 {
  padding: 30px;
}
.row {
  margin-right: 0px !important;
}
.produce {
  height: 380.96px;
  left: 70px;
  margin-right: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(152, 152, 152, 0.25);
  border-radius: 5px;
  text-align: center;
}
@media (max-width: 765px) {
  .produce {
    left: 0px;
    height: 200px;
    margin-right: 0px;
    padding: 0px !important;
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .col-sm-12 {
    height: 300px;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .col-md-5 {
    margin-right: 15px;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .col-lg-2 {
    height: 250px;
    margin-right: 20px;
  }
}
@media (min-width: 1400px) {
  .col-xl-2 {
    margin-right: 40px;
  }
}
</style>
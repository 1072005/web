
<template>
  <div class="b-container project_back_color">
    <h1>專案介紹</h1>
    <b-row>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/systemicon.png" alt="no picture" />
          <p>系統整合</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/image_search.png" alt="no picture" />
          <p>圖像辨識</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/account_box.png" alt="no picture" />
          <p>人臉辨識</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/robot.png" alt="no picture" />
          <p>客製化機器人</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/phone_android.png" alt="no picture" />
          <p>APP開發</p>
        </div>
      </b-col>
    </b-row>

    <h1>成功專案</h1>
    <b-row>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/systemicon.png" alt="no picture" />
          <p>產品名稱</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/image_search.png" alt="no picture" />
          <p>產品名稱</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/account_box.png" alt="no picture" />
          <p>產品名稱</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/robot.png" alt="no picture" />
          <p>產品名稱</p>
        </div>
      </b-col>
      <b-col xl="2" lg="2 produce" md="5" sm="12">
        <div class="inbox">
          <img src="../assets/phone_android.png" alt="no picture" />
          <p>產品名稱</p>
        </div>
      </b-col>
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


.inbox img {
  width: 184px;
  height: 190px;
  max-width: 100%;
}
.produce:hover {
  background-color: #4887bf;
}
.inbox {
  margin-top: 20px;
}
.inbox p {
  font-size: 2.5rem;
  padding-top: 25px;
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
    height: 350px;
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
    margin-top: 15px;

  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .col-lg-2 {
    height: 350px;
    margin-right: 20px;
  }
  .inbox p {
  font-size: 1.4rem;
  
}
}
@media (min-width: 1400px) {
  .col-xl-2 {
    margin-right: 40px;
  }
}
</style>
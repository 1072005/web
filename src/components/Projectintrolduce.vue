
<template>
  <b-container fluid>
    <div class="project_back_color ">
      <h1>專案介紹</h1>
      <b-row>
        <b-col xl="2" lg="2 " md="5 produce" sm="12">
          <div class="inbox">
            <img src="../assets/systemicon.png" alt="no picture" />
            <p>系統整合</p>
          </div>
        </b-col>
        <b-col xl="2" lg="2 " md="5 produce" sm="12">
          <div class="inbox">
            <img src="../assets/image_search.png" alt="no picture" />
            <p>圖像辨識</p>
          </div>
        </b-col>
        <b-col xl="2" lg="2 " md="5 produce" sm="12">
          <div class="inbox">
            <img src="../assets/account_box.png" alt="no picture" />
            <p>人臉辨識</p>
          </div>
        </b-col>
        <b-col xl="2" lg="2 " md="5 produce" sm="12">
          <div class="inbox">
            <img src="../assets/robot.png" alt="no picture" />
            <p>客製化機器人</p>
          </div>
        </b-col>
        <b-col xl="2" lg="2 " md="5 produce" sm="12">
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
      <b-row>
        <p></p>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Projectintrolduce",
};
</script>
<style>
.project_back_color {
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
  padding-top: 20px;
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
  margin-left: 0px !important;
}
.produce {
  left: 140px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(152, 152, 152, 0.25);
  border-radius: 5px;
  text-align: center;
}
@media (max-width: 765px) {
  .produce {
    left: 0px;
    height: 350px;
    padding-right: 0px;
    padding: 0px !important;
  }
}
@media (min-width: 768px)and (max-width: 992px) {
  .produce {
    left: 60px;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .col-lg-2 {
    height: 350px;
  }
  .inbox p {
    font-size: 1.4rem;
  }
  .produce {
    left: 90px;
    
  }
}
</style>
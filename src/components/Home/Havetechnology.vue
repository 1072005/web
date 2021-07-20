
<template>
  <b-container fluid>
    <div class="project_back_color">
      <h1>我們擁有的技術</h1>
      <b-row class="justify-content-md-center">
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <router-link to="/Systemintegration">
            <div class="produce">
              <div class="inbox">
                <img src="../../assets/systemicon.png" alt="no picture" />
                <p>系統整合</p>
              </div>
            </div>
          </router-link>
        </b-col>
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <router-link to="/Imagerecognition">
            <div class="produce">
              <div class="inbox">
                <img src="../../assets/image_search.png" alt="no picture" />
                <p>圖像辨識</p>
              </div>
            </div>
          </router-link>
        </b-col>
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <router-link to="/Facerecognition">
            <div class="produce">
              <div class="inbox">
                <img src="../../assets/account_box.png" alt="no picture" />
                <p>人臉辨識</p>
              </div>
            </div>
          </router-link>
        </b-col>
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <router-link to="/Customizedrobot">
            <div class="produce">
              <div class="inbox">
                <img src="../../assets/roboticon.png" alt="no picture" />
                <p>客製化機器人</p>
              </div>
            </div>
          </router-link>
        </b-col>

        <b-col xl="2" lg="2 " md="5 " sm="12">
          <router-link to="/Appdevelopment">
            <div class="produce">
              <div class="inbox">
                <img src="../../assets/phone_android.png" alt="no picture" />
                <p>APP開發</p>
              </div>
            </div>
          </router-link>
        </b-col>
      </b-row>
      <b-row><p></p></b-row>
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
  background: #f1f1f1;
}
.project_back_color h1 {
  text-align: center;
}
.inbox img {
  width: 50%;
  height: 50%;
}
.produce:hover {
  background-color: #4887bf;
}
.inbox {
  padding-top: 20px;
}

.inbox p {
  color: black;
  font-size: 2rem;
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
  width: 100%;
  height: 320px;
  padding-bottom: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(152, 152, 152, 0.25);
  border-radius: 5px;
  text-align: center;
}
a:-webkit-any-link {
  text-decoration: none;
}

@media (max-width: 991px) {
  .produce {
    height: 0;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .produce {
    margin-top: 10px;
    left: 60px;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .inbox p {
    padding-top: 15px;
    font-size: 1.3rem;
  }
  .produce {
    left: 90px;
    height: 200px;
  }
}
</style>
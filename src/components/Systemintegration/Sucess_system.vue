<template>
  <b-container fluid>
    <div class="project_back_color_1">
      <h1>成功專案</h1>
      <b-row class="justify-content-md-center">
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <router-link to="/Systemintegration">
            <div class="produce_1">
              <div class="inbox_1">
                <img src="../../assets/FeverGuard.png" alt="no picture" style="width:80%"/>
                <p>熱像儀</p>
              </div>
            </div>
          </router-link>
        </b-col>
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <div class="produce">
            <router-link to="/Imagerecognition">
              <div class="inbox_1">
                <img src="../../assets/image_search.png" alt="no picture" />
                <p>
                  房仲物件<br />
                  配對系統
                </p>
              </div>
            </router-link>
          </div>
        </b-col>
      </b-row>
      <b-row><p></p></b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Sucess_system",
};
</script>
<style>
.project_back_color_1 {
  background: #CEE6F1;
}
.project_back_color_1 h1 {
  text-align: center;
}
.inbox_1 img {
  width: 50%;
  height: 50%;
}
.produce_1:hover {
  background-color: #4887bf;
}
.inbox_1 {
  padding-top: 20px;
}

.inbox_1 p {
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
.produce_1 {
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
  .produce_1 {
    height: 0;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .produce_1 {
    margin-top: 10px;
    left: 60px;
  }

}
@media (min-width: 992px) and (max-width: 1400px) {
  .inbox_1 p {
    padding-top: 15px;
    font-size: 1.3rem;
  }
  .produce_1 {
    left: 90px;
    height: 200px;
  }
}
</style>
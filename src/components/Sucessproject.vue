<template>
  <b-container fluid>
    <div class="project_back_color">
      <h1>成功專案</h1>
      <b-row class="justify-content-md-center">
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <router-link to="/Systemintegration">
          <div class="produce">
              <div class="inbox">
                <img src="../assets/systemicon.png" alt="no picture" />
                <p>產品名稱</p>
              </div>
          </div>
            </router-link>
        </b-col>
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <div class="produce" >
            <router-link to="/Imagerecognition">
              <div class="inbox">
                <img src="../assets/image_search.png" alt="no picture" />
                <p>產品名稱</p>
              </div>
            </router-link>
          </div>
        </b-col>
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <div class="produce">
            <router-link to="/Facerecognition">
              <div class="inbox">
                <img src="../assets/account_box.png" alt="no picture" />
                <p>產品名稱</p>
              </div>
            </router-link>
          </div>
        </b-col>
        <b-col xl="2" lg="2 " md="5 " sm="12">
          <div class="produce">
            <router-link to="/Customizedrobot">
              <div class="inbox">
                <img src="../assets/robot.png" alt="no picture" />
                <p>產品名稱</p>
              </div>
            </router-link>
          </div>
        </b-col>

        <b-col xl="2" lg="2 " md="5 " sm="12">
          <div class="produce">
            <router-link to="/Appdevelopment">
              <div class="inbox">
                <img src="../assets/phone_android.png" alt="no picture" />
                <p>產品名稱</p>
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
  name: "Projectintrolduce",
};
</script>
<style>

</style>
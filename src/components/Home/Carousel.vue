<template>
  <b-container fluid>
  <hooper :infiniteScroll="true" :autoPlay="true" :playSpeed="3000">
    <slide class="slider" id="System_slider">
      <div class="intro">        
        <div class="introtext">
          <h3>系統整合</h3>
          <p>客製化API、Gateway系統，<br>豐富經驗整合各種系統，完成您的需求</p>         
          <router-link to="/Systemintegration" tag="button" class="more_btn">了解更多</router-link>       
        </div>  
        <img src="../../assets/Back.png" alt=" ">
      </div>
    </slide>
    <slide class="slider" id="Img_slider">
      <div class="intro">
        <div class="introtext">
          <h3>圖像辨識</h3>
          <p>利用電腦對圖像進行處理、分析與理解，<br>識別各種不同的對像的技術。</p>
          <router-link to="/Imagerecognition" tag="button" class="more_btn">了解更多</router-link> 
        </div>
        <img src="../../assets/Back.png" alt=" ">
      </div>
    </slide>
    <slide class="slider" id="Face_slider">
      <div class="intro">
        <div class="introtext">
          <h3>人臉辨識</h3>
          <p>透過採集以及擷取圖像人臉影像，<br>進行分析比對，準確辨認人像。 </p>
          <router-link to="/Facerecognition" tag="button" class="more_btn">了解更多</router-link> 
        </div>
        <img src="../../assets/Back.png" alt=" ">
      </div>
    </slide>
    <slide class="slider" id="Bot_slider">
      <div class="intro">
        <div class="introtext">
          <h3>LineBot</h3>
          <p>客製化獨一無二的Line機器人，<br>整合商業流程，提高商品成交率。</p>
          <router-link to="/Customizedrobot" tag="button" class="more_btn">了解更多</router-link> 
        </div>
        <img src="../../assets/Back.png" alt=" ">
      </div>
    </slide>
    <slide class="slider" id="App_slider">
      <div class="intro">
        <div class="introtext">
          <h3>APP開發</h3>
          <p>提供Android / ios <br>各項整合方案</p>
          <router-link to="/Appdevelopment" tag="button" class="more_btn">了解更多</router-link> 
        </div>
        <img src="../../assets/Back.png" alt=" ">
      </div>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </b-container>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination
  } from 'hooper';
  
import 'hooper/dist/hooper.css';

export default {
  name: "Carousel",
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
 
};
</script>

<style>
#System_slider {
  background-image: url("../../assets/BG_System.png");
}
#Img_slider {
  background-image: url("../../assets/BG_Image.png");
}
#Face_slider {
  background-image: url("../../assets/BG_Face.png");
}
#Bot_slider {
  background-image: url("../../assets/BG_LineBot.png");
}
#App_slider {
  background-image: url("../../assets/BG_APP.png");
}

.introtext{
  position: absolute;
  width: 432px;
  height: 241.77px;
  color: #071C35;
}
.introtext h3{
  position: relative;
  font-family: Roboto;
  font-weight: bold;
  font-size: 64px;
  left: 0px;
}
.introtext p{
  position: relative;
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
}
.more_btn{
  background: #FFFFFF;
  border: 1px solid #62ACCF;
  color: #071C35;
  box-sizing: border-box;
  font-size: 18px;  
  width: 150px;
  height: 45px;
}
.more_btn:hover{
  background: #62ACCF;
  border: 1px solid #62ACCF;
  color: #FFFFFF;
  box-sizing: border-box;
}


@media (max-width: 765px) {  
  .slider{
    margin-top: 5%;
  }
  .intro img{
    width: 100%;
    height: 600px;
  }
  .introtext{
    margin-top: 200px;
    margin-left: 27%;
    width: 43%;
  }
  .introtext h3{
    font-size: 40px;
  }
  .introtext p{
    font-size: 12px;
  }
}
@media (min-width: 768px)and (max-width: 992px) {
  .slider{
    margin-top: 5%;
  }
  .intro img{
    width: 100%;
    height: 600px;
  }
  .introtext{
    margin-top: 100px;
    margin-left: 30%;
    width: 40%;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .slider{
    margin-top: 8%;
  }
  .introtext{
    margin-top: 100px;
    margin-left: 280px;
  }
}


@media (min-width: 1400px){
  .introtext{
    margin-top: 200px;
    margin-left: 280px;
  }
}
</style>


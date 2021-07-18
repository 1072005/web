<template>
  <b-container fluid class="carousel">
    <!-- <div class="slide"> -->
      <!-- <div> -->
        <hooper>
          <slide class="slider">
          <!-- <img src="../assets/System.png" alt=""> -->
            <div class="more_btn">
              <img src="../../assets/more.png">
            </div>
            <div class="intro">
              <h1>系統整合</h1>
              <p>以提升客戶需求為核心目標 <br>提供高品質、 <br>彈性的資訊服務</p>
              <img src="../../assets/Vector6.png" alt=" " >
            </div>
          </slide>
          <slide class="slider" style="background-color:red">
            <div class="more_btn">
              <img src="../../assets/more.png">
            </div>
            <div class="intro">
              <h1>圖像辨識</h1>
              <p>以提升客戶需求為核心目標 <br>提供高品質、 <br>彈性的資訊服務</p>
              <img src="../../assets/Vector6.png" alt=" " >
            </div>
          </slide>
          <slide class="slider">
            <div class="more_btn">
              <img src="../../assets/more.png">
            </div>
            <div class="intro">
              <h1>人臉辨識</h1>
              <p>以提升客戶需求為核心目標 <br>提供高品質、 <br>彈性的資訊服務</p>
              <img src="../../assets/Vector6.png" alt=" " >
            </div>
          </slide>
          <slide class="slider">
            <div class="more_btn">
              <img src="../../assets/more.png">
            </div>
            <div class="intro">
              <h1>LineBot</h1>
              <p>以提升客戶需求為核心目標 <br>提供高品質、 <br>彈性的資訊服務</p>
              <img src="../../assets/Vector6.png" alt=" " >
            </div>
          </slide>
          <slide class="slider">
            <div class="more_btn">
              <img src="../../assets/more.png">
            </div>
            <div class="intro">
              <h1>APP開發</h1>
              <p>以提升客戶需求為核心目標 <br>提供高品質、 <br>彈性的資訊服務</p>
              <img src="../../assets/Vector6.png" alt=" " >
            </div>
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
         </hooper>
      <!-- </div>      -->
    <!-- </div> -->

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

.carousel{
  padding-top: 5%;
}
.slider {
  background-image: url("../../assets/System.png");
}
.intro {
  position: relative;
  left: 4.03%;
  right: 47.78%;
  top: 0px;
  bottom: 23.14%;
}
.intro img{
  width: 100%;
}
.intro h1{
  position: absolute;
  left: 130px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 80px;
  line-height: 112px;
  text-align: center;

  color: #FFFFFF;
}
.intro p{
  position: absolute;
  left: 110px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 42px;
  color: #FFFFFF;
}
.more_btn{
  position: relative;
  height: 100px;
  width: 100px;
}
.more_btn img {
  opacity: 80%;
}
.more_btn img:hover {
  opacity: 100%;
}

@media (max-width: 765px) {  
  .intro {
    /* width: 450px;
    height: 290px; */
    width: 95%;
  }
  .intro img{
    height: 300px;
  }
  .intro h1{
    top: 0px;
    left: 15%;
    font-size: 55px;
  }
  .intro p{
    top: 130px;
    left: 18%;
    font-size: 20px;
  }
  .more_btn{
    top: 450px;
    left: 50%; 
    /* right: 10%; */
  }
  .more_btn img{
    height: 90%;
  }
}
@media (min-width: 768px)and (max-width: 992px) {
  .intro {
    width: 600px;
    height: 410px;
  }
  .intro h1{
    top: 10px;
  }
  .intro p{
    top: 180px;
    font-size: 30px;
  }
  .more_btn{
    top: 400px;
    left: 450px;    
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .intro {
    width: 660px;
    height: 410px;
  }
  .intro h1{
    top: 30px;
    font-size: 96px;
  }
  .intro p{
    top: 230px;
    font-size: 36px;
  }
  .more_btn{
    max-width: 100%;
    top: 400px;
    left: 700px;
  }

}


@media (min-width: 1400px){
  .intro {
    width: 660px;
    height: 410px;
  }
  .intro h1{
    top: 30px;
    font-size: 96px;
  }
  .intro p{
    top: 230px;
    font-size: 36px;
  }
  .more_btn{
    max-width: 100%;
    top: 400px;
    left: 1100px;
  }
}
</style>


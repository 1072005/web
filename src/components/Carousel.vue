<template>
  <b-container fluid>
    <div class="slide">
      <div>
          <!-- <img class="introBG" src="../assets/System.png" alt=" " > -->
      </div>
      <div class="intro">
        <h1>系統整合</h1>
        <p>以提升客戶需求為核心目標 <br>提供高品質、 <br>彈性的資訊服務</p>
        <img src="../assets/Vector6.png" alt=" " >
      </div>
      
      <div>
        <!-- <img class="line" src="../assets/Line6.png" alt=" " > -->
      </div>
      <b-row align-h="center">
        <b-col xl="2" lg="2" md="2" sm="2" cols="2">
          <div class="dot">
            <img src="../assets/Ellipse3.png" alt=" " >
          </div>
        </b-col>
        <b-col xl="2" lg="2" md="2" sm="2" cols="2">
          <div class="dot">
            <img src="../assets/Ellipse3.png" alt=" " >
          </div>
        </b-col>
        <b-col xl="2" lg="2" md="2" sm="2" cols="2">
          <div class="dot">
            <img src="../assets/Ellipse3.png" alt=" " >
          </div>
        </b-col>
        <b-col xl="2" lg="2" md="2" sm="2" cols="2">
          <div class="dot">
            <img src="../assets/Ellipse3.png" alt=" " >
          </div>
        </b-col>
        <b-col xl="2" lg="2" md="2" sm="2" cols="2">
          <div class="dot">
            <img src="../assets/Ellipse3.png" alt=" " >
          </div>
        </b-col>
        <b-col>
          <div class="more_btn">
            <img src="../assets/more.png" alt=" " >
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style>

.slide {
  height: 630px;
  background-image: url("../assets/System.png");
}
.intro {
  position: absolute;
  left: 4.03%;
  right: 47.78%;
  top: 105px;
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
  left: 120px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 42px;

  color: #FFFFFF;
}
.line{
  position: absolute;
  /* left: 186px; */
  top: 656.5px;
  width: auto;
  left: auto;
  right: 20%;
  /* bottom: 11px; */
}

.dot {
  position: absolute;
}
.dot :hover{
  background-image: url("../assets/Ellipse1.png");
}
.more_btn{
  position: absolute;
  right: 30px;
}
.more_btn img {
  opacity: 80%;
}
.more_btn img:hover {
  opacity: 100%;
}

@media (max-width: 765px) {  
  .intro {
    width: 450px;
    height: 290px;
  }
  .intro h1{
    top: 0px;
    left: 55px;
    font-size: 78px;
  }
  .intro p{
    top: 130px;
    left: 80px;
    font-size: 22px;
  }
  .dot {
    top: 530px;
  }
  .more_btn{
    top: 400px;
  }
  .more_btn img{
    max-width: 70%;
  }
}
@media (min-width: 768px)and (max-width: 992px) {
  .intro {
    width: 600px;
    height: 410px;
   
  }
  .intro img{
    width: 100%;
  }
  .intro h1{
    top: 10px;
  }
  .intro p{
    top: 180px;
    font-size: 30px;
  }
  .dot{
    top: 530px;
  }
  .more_btn{
    top: 400px;
  }
  .more_btn img{
    max-width: 80%;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .slide{
    margin-top: 100px;
  }

  .intro {
    top: 170px;
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
  .dot {
    top: 600px;
  }
  .more_btn{
    max-width: 100%;
    top: 480px;
  }

}


@media (min-width: 1400px){
  .slide{
    margin-top: 100px;
  }

  .intro {
    top: 170px;
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
  .dot {
    top: 600px;
  }
  .more_btn{
    max-width: 100%;
    top: 480px;
  }
}
</style>

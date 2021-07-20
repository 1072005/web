<template>
  <div class="b-container bkcolor_1" id="mainpage">
    <h1>系統整合</h1>
    <div class="introduce_1">
      <p>介紹</p>
      <div class="introduce_box">
        <div class="borleft"></div>
        透過有效率的系統規劃、軟體設計、硬體設計、演算法植入...等<br />
        ，因應客戶需求，將各領域的技術整合，形成一個功能更完整的<br />
        產品並實際應用。我們可以幫您製作客製化網頁、系統、API和<br />
        Gateway的各項整合服務，對應不同專案整合各種系統，完成您的需求。<br />
      </div>
      <img src="../../assets/Systemintro.gif" alt="" class="background_gif_1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
};
</script>
<style>
.bkcolor_1 {
  padding-top: 100px;
  background-color: white;
}
.bkcolor_1 h1 {
  text-align: center;
}
.introduce_1 {
  position: relative;

  height: 300px;
  padding-left: 10%;
  padding-top: 1%;
  font-size: 1.5rem;
}
.introduce_box{
  position: relative;
}
.borleft {
  position: absolute;
  width: 1%;
  height: 100px;
  left:-30px;
  border-left: solid 5px #62ACCF;
}
.introduce_1 p {
  font-weight: bold;
  font-size: 2rem;
}
h1,
.h1 {
  padding: 30px;
}
.background_gif_1 {
  position: relative;
  left: 70%;
  bottom: 280px;
  width: 25%;
}
@media (max-width: 300px) {
  .introduce_1 {
    font-size: 0.5rem;
  }
  .background_gif_1 {
    bottom: 180px;
  }
  .introduce_1 {
    height: 200px !important;
  }
}
@media (min-width: 301px) and (max-width: 572px) {
  .background_gif_1 {
    bottom: 270px;
  }
  .introduce_1 {
    height: 265px;
    font-size: 1rem;
    padding-left: 5%;
  }
  .bkcolor_1 h1 {
    font-size: 1.5rem;
  }
}
@media (min-width: 573px) and (max-width: 765px) {
  .introduce_1 {
    padding-left: 5%;
    font-size: 1rem;
    height: 200px;
  }
  .background_gif_1 {
    width: 20%;
    bottom: 210px;
  }
  .bkcolor_1 h1 {
    font-size: 1.5rem;
  }
}
@media (min-width: 765px) and (max-width: 992px) {
  .introduce_1 {
    font-size: 1rem;
  }
  .background_gif_1 {
    width: 23%;
    left: 75%;
    bottom: 150px;
  }
  .introduce_1 {
    height: 250px;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .introduce_1 {
    font-size: 1.3rem;
  }
  .background_gif_1 {
    left: 73%;
    bottom: 220px;
  }
}
</style>
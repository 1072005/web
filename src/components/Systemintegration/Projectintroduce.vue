<template>
  <b-container fluid class="tabcontain">
    <b-tabs pills card vertical>
      <b-tab title="介紹"
        ><p>
          麥威研發的這款Fever
          Guard，能夠做到人體溫度檢測之外，也能夠紀錄檢測到的人、時間、體溫等等，再以資料庫做後台管理。<br />
          <br />在技術上能夠結合麥威最新的My-Face人臉辨識系統，延伸至打卡系統、出缺勤系統、門禁系統。
        </p></b-tab
      >
      <b-tab title="特色"
        ><p>
          • ⾏進間可進⾏⼈臉追蹤<br />
          • 精準定位臉部額頭偵測溫度 <br />
          •超過1M距離量測，避免⼈員誤觸損壞 <br />
          • 具備報表功能 <br />
          •節省勤務⼈⼒、完善防疫缺⼝ <br />
          • 偵測體溫異常可對管理端發出告警訊息<br />
          •雙鏡頭同時進⾏熱成像及臉部辨識<br />
          • 可選購⼈臉辨識系統 <br />
          •可整合企業差勤系統<br /></p
      ></b-tab>
      <b-tab title="規格"
        ><p>
          作業系統：Win 10<br />
          多⼈偵測：同時偵測⼈數 4~6 ⼈<br />
          溫度偵測：⽀援<br />
          ⼝罩偵測：⽀援<br />
          告警系統：⽀援警⽰⾳輸出<br />
          報表系統：⽀援 EXCEL 報表輸出（含熱感應圖）<br />
          ⼈臉辨識 ：⽀援無遮擋⼈臉辨識<br /></p
      ></b-tab>
      <b-tab title="認證與專利 "><img src="../../assets/patent.png" /></b-tab>
      <b-tab title="客戶"
        ><p>
          台中郵局*5<br />
          台北監理站*3<br />
          台北復興堂教會<br />
          台北禮客賣場<br />
          新北三峽農會<br />
          新北三峽區公所<br />
          新北三峽生命紀念館
        </p>
        <p>
          新北WARIS公司<br />
          桃園新光影城巧虎樂園<br />
          中壢元生國小<br />
          中壢新明基地<br />
          新竹文化局<br />
          新竹明泰科技<br />
          
        </p>
      </b-tab>
    </b-tabs>
    
  </b-container>
</template>
<script>
export default {
  name: "Projectintroduce",
};
</script>
<style>
.tabcontain {
  width: 80%;
}
.nav-pills {
  background-color: #cee6f1;
  transform: skewX(-20deg);
  box-shadow: -6px -2px 18px 0px #84b1b7;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: #62accf;
  color: black;
}
.nav-pills .nav-link {
  color: black;
  font-size: 1.5rem;
  transform: skewX(20deg);
}
.tab-content {
  background-color: #f1f1f1;

  transform: skewX(-20deg);
  box-shadow: 0px 0px 13px 0px #c4c4c4;
}
.tab-pane p {
  padding-left: 50px;
  padding-top: 50px;
  font-size: 2.2rem;
  transform: skewX(20deg);
  display: inline-block;
}
.tab-pane img {
  width: 70%;
  transform: skewX(20deg);
}
.card-body {
  text-align: center;
}
@media (max-width: 400px) {
  .tabcontain {
    width: auto;
  }
  .nav-pills {
    transform: skewX(-0deg);
    padding: 0;
    box-shadow: -6px -2px 18px 0px #84b1b7;
  }
  .nav-pills .nav-link {
    font-size: 0.5rem;
    transform: skewX(0deg);
  }
  .tab-content {
    transform: skewX(0deg);
    box-shadow: 0px 0px 0px 0px #c4c4c4;
  }
  .tab-pane p {
    padding-left: 0px;
    padding: 20px;
    font-size: 1rem;
    transform: skewX(0deg);
  }
  .card-body {
    padding: 0;
  }
    .tab-pane img {
width: 100%;
  transform: skewX(0deg);
}
}
@media (min-width: 400px) and (max-width: 768px) {
  .tabcontain {
    width: auto;
  }
  .nav-pills {
    transform: skewX(-0deg);
    padding: 0;
    box-shadow: -6px -2px 18px 0px #84b1b7;
  }
  .nav-pills .nav-link {
    font-size: 0.3rem;
    transform: skewX(0deg);
  }
  .tab-content {
    transform: skewX(0deg);
    box-shadow: 0px 0px 0px 0px #c4c4c4;
  }
  .tab-pane p {
    padding-left: 0px;
    padding: 20px;
    font-size: 1.1rem;
    transform: skewX(0deg);
  }
  .card-body {
    padding: 0;
  }
  .tab-pane img {
width: 100%;
  transform: skewX(0deg);
}
}
@media (min-width: 768px) and (max-width: 992px) {
  .tab-pane p {
    padding-top: 25px;
    font-size: 1.3rem;
  }
  .tabcontain {
    width: 75%;
  }
  .tab-pane img {
  width: 90%;
  
}
}
@media (min-width: 992px) and (max-width: 1225px) {
  .tab-pane p {
    font-size: 1.4rem;
  }
}
@media (min-width: 1225px) and (max-width: 1400px) {
  .tab-pane p {
    font-size: 1.7rem;
  }
}
</style>
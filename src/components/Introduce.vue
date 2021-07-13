<template>
  <div class="b-container bkcolor" id="mainpage">
    <h1>公司簡介</h1>
    <div class="introduce">
      你的需求，我們在聽。<br />
      麥威科技累積多年經驗，善於為客戶打造專屬於企業的客製化數位產品。<br />
      結合專業知識與技術的一條龍服務，從諮詢評估、設計開發，到功能測試，讓客戶清楚的掌握進度，同時把關良好品質。<br />
      歡迎和我們聊聊你的需求、你想要達成的理想，讓我們協助你一步一步實現它。
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
};
</script>
<style>
.bkcolor {
  background-color: white;
}
.introduce {
  height: 300px;
  padding-left: 5%;
  padding-top: 1%;
  font-size: 1.5rem;
}
h1,
.h1 {
  padding: 30px;
}
@media (max-width: 765px) {
  .introduce {
    padding-left: 5%;
    font-size: 0.9rem;
    height: 200px;
  }
}
@media (min-width: 765px) and (max-width: 992px) {
  .introduce {
    font-size: 1rem;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .introduce {
    font-size: 1.3rem;
  }
}
</style>
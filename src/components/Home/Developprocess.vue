<template>
  <b-container fluid>
    <div class="project_develop_color">
      <h1>專案開發流程</h1>
      <div class="project">
        <img src="../../assets/development.gif" alt="" />
        <b-row class="develop_name">
          <b-col class="order_name">評估</b-col>
          <b-col class="order_name">計畫</b-col>
          <b-col class="order_name">設計</b-col>
          <b-col class="order_name">開發</b-col>
          <b-col class="order_name">測試</b-col>
          <b-col class="order_name">上線</b-col>
        </b-row>
      </div>
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
.project img {
  width: 100%;
}
.project_develop_color {
  background-color: white;
  
}
.develop_name {
  font-size: 4.5rem;
  font-weight: bolder;
  width: 100%;
}
.order_name {
  bottom: 150px;
  text-align: center;
  padding: 0;
}
@media (max-width:576px) {
     .develop_name {
    font-size: 1.5rem;
  }
  .order_name {
    bottom: 20px;
    
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .develop_name {
    font-size: 1.9rem;
  }
  .order_name {
    bottom: 50px;
    
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .develop_name {
    font-size: 2rem;
  }
  .order_name {
    bottom: 80px;
    
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .develop_name {
    font-size: 3rem;
  }
  .order_name {
    bottom: 110px;
    
  }
}
</style>
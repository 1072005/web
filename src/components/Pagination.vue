<template>
  <b-container fluid class="Pagination">
    <div class="linetop">
      <div class="line"></div>
      <div class="linefont">APP開發</div>
    </div>
    <div class="mainbox">
      <div class="graphics"></div>
      <div class="linestright">
        <div class="marker"></div>
        <div class="techIntroduce">技術介紹</div>

        <div class="marker1"></div>
      <div class="techprocess">技術流程</div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Introduce",
};
</script>
<style>
.Pagination {
  padding-top: 120px;
}
.linetop {
  padding-left: 180px;
}
.line {
  display: inline-block;
  width: 40%;
  border-top: 2px solid #62accf;
}
.linefont {
  display: inline-block;
  vertical-align: middle;
  font-size: 48px;
}
.linestright {
  position: fixed;
  width: 180px;
  height: 600px;
  margin-top: -34px;
  border-right: 2px solid #62accf;
  z-index: 3;
}
.marker {
  position: fixed;
  top: 360px;
  left: 171px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.2125rem solid #62accf;
  background: #62accf;
  z-index: 3;
}
.marker1 {
  position: fixed;
  top: 750px;
  left: 171px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.2125rem solid #62accf;
  background: #62accf;
  z-index: 3;
}
.techIntroduce{
    position: fixed;
    font-size: 3rem;
    left: 200px;
    top: 325px;
}
.techprocess{
    position: fixed;
    font-size: 3rem;
    left: 200px;
    top: 720px;
}
.graphics {
  margin-top: 70px;
  position: fixed;
  width: 80%;
  height: 800px;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  background: rgba(241, 241, 241, 0.8);
  z-index: 1;
}
@media (max-width: 765px) {
  .line {
    display: initial;
    width: initial;
    border-top: initial;
  }
  .linefont {
    display: initial;
    vertical-align: initial;
    font-size: 3.5rem;
  }
  .linetop {
    padding-left: 50px;
  }
  .Pagination {
    padding-top: 100px;
  }
}
</style>
<template>
  <b-container fluid class="Pagination">
    <div class="linetop">
      <div class="line"></div>
      <div class="linefont">APP開發</div>
    </div>
    <div class="mainbox">
      <div class="backimg">
        <img src="../assets/System.png" alt="no picture" />
      </div>
      <div class="linestright">
        <div class="marker"></div>
        <div class="marker1"></div>
      </div>
      <div class="graphics">
        <div class="techIntroduce">技術介紹</div>

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
  padding-top: 130px;
  height: 1030px;
}
.linetop {
  padding-left: 180px;
}
.mainbox {
  margin-top: -100px;
}
.backimg {
  padding-left: 21%;
}
.backimg img {
  position: absolute;
  max-width: 70%;
  max-height: 820px;
  height: 820px;
  top: 195px;
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
  position: absolute;
  top: 168px;
  left: 162px;
  height: 420px;

  border-right: 2px solid #62accf;
  z-index: 3;
}
.marker {
  position: relative;
  top: 100px;
  left: 10px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.2125rem solid #62accf;
  background: #62accf;
  z-index: 3;
}
.marker1 {
  position: relative;
  top: 400px;
  left: 9px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.2125rem solid #62accf;
  background: #62accf;
  z-index: 3;
}
.techIntroduce {
  position: absolute;
  font-size: 3rem;
  left: 200px;
  top: 35px;
}
.techprocess {
  position: absolute;
  font-size: 3rem;
  left: 200px;
  top: 355px;
}
.graphics {
  margin-top: 100px;
  position: relative;
  width: 80%;
  height: 800px;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  background: rgba(241, 241, 241, 0.8);
  z-index: 1;
}
@media (max-width: 765px) {
  .line {
    display: none;
  }
  .linefont {
    display: initial;
    vertical-align: initial;
    font-size: 1rem;
  }
  .linetop {
    padding-left: 50px;
  }
  .Pagination {
    padding-top: 100px;
  }
  .linestright {
    left: 0;
  }
  .graphics {
    width: 100%;
  }
  .techIntroduce {
    font-size: 1.5rem;
  }
  .techprocess {
    font-size: 1.5rem;
  }
}
@media (max-width: 1400px) {
  .backimg {
    padding-left: 0%;
  }
  .backimg img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
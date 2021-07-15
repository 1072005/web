<template>
  <b-container fluid class="Project_name">
    <div class="linetop_name">
      <div class="linefont_name">APP開發</div>
      <div class="line_name">
        <div class="linestright_name">
          <div class="inmainbox">
            <div
              class="mainbox_border"
              @mouseover="onmainbox = true"
              @mouseleave="onmainbox = false"
            >
              專案解說文字
            </div>
            <transition>
              <div class="mainbox_content" v-show="onmainbox"></div>
            </transition>
          </div>
          <div class="marker_name"></div>
          <div class="marker1_name"></div>
          <div class="inmainbox_1">
            <div
              class="mainbox_border_1"
              @mouseover="onmainbox_1 = true"
              @mouseleave="onmainbox_1 = false"
            >
              專案解說文字
            </div>
            <transition>
              <div class="mainbox_content_1" v-show="onmainbox_1"></div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <div class="mainbox_name">
      <div class="backimg_name">
        <img src="../assets/System.png" alt="no picture" />
      </div>

      <div class="graphics_name"></div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "projectname",
  data() {
    return {
      onmainbox: true,
      onmainbox_1: true,
    };
  },
};
</script>
<style>
.Project_name {
  padding-top: 100px;
  padding-bottom: 30px;
  height: 1000px;
}
.linetop_name {
  padding-left: 46%;
}
.linetop_name_1 {
  padding-left: 180px;
}
.mainbox_name {
  margin-top: -100px;
}
.backimg_name {
  padding-left: 5%;
}
.backimg_name img {
  position: absolute;
  margin-top: 93px;
  width: 70%;
  max-width: 70%;
  max-height: 820px;
  height: 820px;
}
.line_name {
  position: absolute;
  display: inline-block;
  margin-top: 35px;
  margin-left: 10px;
  width: 35%;
  border-top: 2px solid #62accf;
}
.linefont_name {
  display: inline-block;
  vertical-align: middle;
  font-size: 48px;
}
.linestright_name {
  position: absolute;
  width: 100%;
  right: 0px;
  height: 420px;
  border-right: 2px solid #62accf;
  z-index: 3;
}
.marker_name {
  position: relative;
  top: 20px;
  left: 8px;
  float: right;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.2125rem solid #62accf;
  background: #62accf;
  z-index: 3;
}
.marker1_name {
  position: relative;
  top: 370px;
  left: 25px;
  float: right;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.2125rem solid #62accf;
  background: #62accf;
  z-index: 3;
}

.graphics_name {
  margin-top: 100px;
  position: relative;
  width: 80%;
  float: right;
  height: 800px;
  clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0% 100%);
  background: rgba(241, 241, 241, 0.8);
  z-index: 1;
}
.inmainbox {
  width: 100%;
}
.mainbox_border {
  position: relative;
  float: right;
  top: 50px;
  right: 50px;
  width: 130%;
  height: 50px;
  clip-path: polygon(6% 1%, 100% 0%, 94% 100%, 0% 100%);
  background-color: white;
  text-align: center;
  font-size: 1.5rem;
}
.mainbox_border_1 {
  position: relative;
  float: right;
  top: 340px;
  right: 50px;
  width: 130%;
  height: 50px;
  clip-path: polygon(6% 1%, 100% 0%, 94% 100%, 0% 100%);
  background-color: white;
  text-align: center;
  font-size: 1.5rem;
}
.mainbox_content {
  position: absolute;
  top: 96px;
  float: right;
  right: 95px;
  width: 130%;
  background-color: white;
  height: 310px;
  clip-path: polygon(6% 1%, 100% 0%, 94% 100%, 0% 100%);
}
.mainbox_content_1 {
  position: absolute;
  top: 452px;
  float: right;
  right:95px;
  width: 130%;
  background-color: white;
  height: 310px;
  clip-path: polygon(6% 1%, 100% 0%, 94% 100%, 0% 100%);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  transition: opacity 1s;
}
@media (max-width: 576px) {
 .backimg_name img {
    width: 0%;
    height: 0%;
  }

  .line_name {
    right: 10px;
    width: 0;
  }
  .marker_name {
    top: 0px;
    left: 9px;
  }
  .marker1_name {
    top: 385px;
    left: 9px;
  }
  .inmainbox {
    position: absolute;
    right: -20px;

    width: 150px;
    height: 100px;
  }
  .inmainbox_1 {
    position: absolute;
    right: -20px;

    width: 150px;
    height: 100px;
  }
  .linefont_name {
    display: initial;
    vertical-align: initial;
    font-size: 1.8rem;
  }
  .linetop_name {
    padding-left: 30px;
  }

  .Project_name {
    padding-top: 70px;
  }
  .linestright_name {
    right: 10px;
    top: 50px;
  }
  .graphics_name {
    padding-left: 0;
    float: none;
    width: 100%;
    height: 700px;
  }
  .mainbox_border {
    top: 0px;
  }
  .mainbox_border_1 {
    top: 370px;
  }
  .mainbox_content {
    width: 130%;
    right: 60px;
    top: 47px;
  }
  .mainbox_content_1 {
    width: 130%;
    top: 416px;
    right: 60px;
  }
}
@media (min-width: 576px)and (max-width: 765px) {
  .backimg_name img {
    width: 0%;
    height: 0%;
  }
  .Pagination {
    padding-bottom: 0px;
  }
  .line_name {
    right: 10px;
    width: 0;
  }
  .marker_name {
    top: 0px;
    left: 9px;
  }
  .marker1_name {
    top: 385px;
    left: 9px;
  }
  .inmainbox {
    position: absolute;
    right: 20px;

    width: 250px;
    height: 100px;
  }
  .inmainbox_1 {
    position: absolute;
    right: 20px;

    width: 250px;
    height: 100px;
  }
  .linefont_name {
    display: initial;
    vertical-align: initial;
    font-size: 1.8rem;
  }
  .linetop_name {
    padding-left: 30px;
  }

  .Project_name {
    padding-top: 70px;
  }
  .linestright_name {
    right: 10px;
    top: 50px;
  }
  .graphics_name {
    padding-left: 0;
    float: none;
    width: 100%;
    height: 700px;
  }
  .mainbox_border {
    top: 0px;
  }
  .mainbox_border_1 {
    top: 370px;
  }
  .mainbox_content {
    width: 130%;
    right: 70px;
    top: 47px;
  }
  .mainbox_content_1 {
    width: 130%;
    top: 416px;
    right: 70px;
  }
}
@media (min-width: 765px) and (max-width: 992px) {
  .backimg_name img {
    width: 0%;
    height: 0%;
  }
  .line_name {
    width: 20%;
  }
  .graphics_name {
    padding-left: 0;
    width: 100%;
    height: 650px;
  }
  .mainbox_border {
    width: 250%;
  }
  .mainbox_border_1 {
    width: 250%;
  }
  .mainbox_content {
    width: 250%;
    right: 75px;
  }
  .mainbox_content_1 {
    width: 250%;
    right: 75px;
  }
}
@media (min-width: 992px) and (max-width: 1400px) {
  .backimg_name {
    padding-left: 0%;
  }
  .backimg_name img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
  }
  .line_name {
    width: 30%;
  }
  .mainbox_content {
    width: 130%;
    right: 75px;
  }
  .mainbox_content_1 {
    width: 130%;
    right: 75px;
  }
}
</style>
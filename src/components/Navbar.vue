<template>
  <b-container fluid>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
      fixed="top"
      class="navsize"
    >
      <b-navbar-brand href="/">
        <img src="../assets/WM-1.png" alt="" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right href="/">首頁</b-nav-item>

          <div @mouseover="onOver" @mouseout="onLeave">
            <b-nav-item-dropdown no-caret text="介紹" right ref="dropdown">
              <b-dropdown-item to="Systemintegration">系統整合</b-dropdown-item>
              <b-dropdown-item to="Imagerecognition">圖像辨識</b-dropdown-item>
              <b-dropdown-item to="Facerecognition">人臉辨識</b-dropdown-item>
              <b-dropdown-item to="Customizedrobot"
                >客製化機器人</b-dropdown-item
              >
              <b-dropdown-item to="/Appdevelopment">APP開發</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <b-nav-item right to="#connect">聯絡我們</b-nav-item>
          <b-nav-item right> English/中 </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
  },
};
</script>
<style>
.navbar-expand-lg {
  background-color: #cee6f1 !important;
}

.navbar-nav {
  font-size: 1.563rem;
}
.navbar-brand img {
  width: 150px;
}
.nav-item {
  padding: 20px;
}

.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}

.dropdown-item {
  text-align: center !important ;
}
.dropdown-menu-right {
  right: -20px !important;
  left: auto !important;
}
@media (max-width: 765px) {
  .navbar-brand img {
    width: 60px;
  }
}
</style>
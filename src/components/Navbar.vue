<template>
   <b-container fluid>
    <b-navbar  toggleable="lg" type="dark" variant="info"  fixed="top">
      <b-navbar-brand href="#">Icon</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item right href="#mainpage">首頁</b-nav-item>

          <div @mouseover="onOver" @mouseout="onLeave">
            <b-nav-item-dropdown no-caret text="介紹" right ref="dropdown">
              
                <b-dropdown-item href="#" >系統整合</b-dropdown-item>
                <b-dropdown-item href="#">圖像辨識</b-dropdown-item>
                <b-dropdown-item href="#">人臉辨識</b-dropdown-item>
                <b-dropdown-item href="#">客製化機器人</b-dropdown-item>
                <b-dropdown-item href="#">APP開發</b-dropdown-item>
              
            </b-nav-item-dropdown>
          </div>
          <b-nav-item right href="#contectus" >聯絡我們</b-nav-item>
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
  background-color: #4887BF ;
}
.navbar-nav {
  font-size: 1.563rem;
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

</style>
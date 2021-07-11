<template>
  <b-container fluid>
    <div class="connect_back " id="connect">

    <h1>聯絡我們</h1>
    <b-row class="fontbox">
        <b-col md="12" sm="12" lg="12">
            <p>+886-3-4912580 </p>
        </b-col>
        <b-col md="8"  sm="8" lg="8">
            <p>Email：mywaytech@getmywaytech.com </p>
        </b-col>
        <b-col md="4"  sm="4" lg="4">
            <a href="https://www.facebook.com/MyWayTechCorp/"> <font-awesome-icon class="fbicon"  :icon="[  'fab',  'facebook-f' ]" style="color:black"   /></a>
        </b-col>


        <b-col md="12"  sm="12" lg="12">
            <p>地址：320 桃園市中壢區明德路60號5樓</p>
        </b-col>   
        
        <b-col align="center" style="color:black">Copyright ©2021 All rights reserved | by 麥威科技股份有限公司</b-col>
        
    </b-row>
    </div>
     
    
  </b-container>
</template>

<script>
export default {
  name: "Connect",
};
</script>
<style>
.connect_back{
    background-color: #3B69B2;
    color: white;
    
    font-size:2rem ;
}
.fbicon{
   width:80px !important;
  height:80px;
  border: solid 2px ;
  padding:10px;
  border-radius: 50%;
  border-color: white;
}
.fbicon:hover{
  background-color:#5496FF ;
}
.fa-facebook-f:hover{
  color: white !important;
}
.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    padding-right:0px !important ;
    padding-left:0px !important ;
}
.fontbox{
    padding-left: 100px;
}
@media (max-width: 765px) {
  .fontbox{
    padding-left: 15px;
    }
    .connect_back{
    font-size:0.3rem ;
  } 
  .fbicon{
  width: 40px !important;
  height: 40px ;
  }
}
@media (min-width: 765px)and (max-width: 992px) {
 
    .connect_back{
    font-size:1rem ;
  } 
  .fbicon{
  width: 60px !important;
  height: 60px ;
  }
}
</style>
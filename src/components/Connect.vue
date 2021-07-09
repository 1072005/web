<template>
  <b-container fluid>
    <div class="connect_back">

    <h1>聯絡我們</h1>
    <b-row class="fontbox">
        <b-col md="12" sm="12" lg="12">
            <p>+886-3-4912580 </p>
        </b-col>
        <b-col md="12"  sm="12" lg="12">
            <p>Email：mywaytech@getmywaytech.com </p>
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

.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
    padding-right:0px !important ;
    padding-left:0px !important ;
}
.fontbox{
    padding-left: 100px;
}
@media (max-width: 768px) {
  .fontbox{
    padding-left: 30px;
    }
    .connect_back{
    
    
    font-size:0.5rem ;
}
}

</style>
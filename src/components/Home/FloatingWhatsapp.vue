<template>
  <div>
    <div id="app">
      <a href="https://api.whatsapp.com/" class="float" target="_blank">
        <!-- <a href="https://api.whatsapp.com/send?phone=7982325518&text=Hello, guruji customer care" class="float" target="_blank"></a> -->
        <i class="fab fa-whatsapp my-float"></i>
      </a>
    </div>
    <!-- --------------------------Chat Widget-------------------------------------- -->
    <div>
      <a href="tel:987654321" class="float1" target="_blank">
        <!-- <a href="https://api.whatsapp.com/send?phone=7982325518&text=Hello, guruji customer care" class="float" target="_blank"></a> -->
        <i class="fas fa-comment my-float"></i>
        </a>
    </div>
  </div>
    
  </template>
  
  <script>
  
  
  export default {
    name: "FloatingWhatsapp",
    components: {
    
    }
  };
  </script>
  
  <style>
 #app{
  height: 0;
 }
  .float{
      position:fixed;
      width:60px;
      height:60px;
      bottom:40px;
      right:40px;
      background-color:#256a8f;
      color:#FFF;
      border-radius:50px;
      text-align:center;
      font-size:30px;
      box-shadow: 2px 2px 3px #999;
      z-index:100;
  }
  
  .my-float{
      margin-top:16px;
  }

  /* ----------------chat--------------------------- */
  .float1{
      position:fixed;
      width:60px;
      height:60px;
      bottom:40px;
      left:40px;
      background-color:#256a8f;
      color:#FFF;
      border-radius:50px;
      text-align:center;
      font-size:30px;
      box-shadow: 2px 2px 3px #999;
      z-index:100;
  }

 


  /* --- */
  </style>
  
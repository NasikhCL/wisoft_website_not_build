<template>
  <div>
    
    <!-- Header navigation  -->
     <cursor-anim></cursor-anim>
    <main-header></main-header>
    <div id="smooth-wrapper">
    <div id="smooth-content">
    <!-- hero -->
      <hero-page></hero-page>
      <!-- footer -->
      <footer-page></footer-page>
    </div>
    </div>
    <!-- whatsapp -->
    <floating-whatsapp></floating-whatsapp>
    <!-- <floating-chat></floating-chat> -->
    <pre-loader></pre-loader>
   
    <!-- Go Top Button -->
   
     <!-- Header navigation  -->
    
    
    
  </div>
</template>


<script>
import PreloaderAnim from "@/components/PreloaderAnim.vue"
import Cursor_Anim from "@/components/Cursor_Anim.vue"
import MainHeader from "../components/Home/MainHeader.vue"
import HeroPage from "../components/Home/HeroPage.vue"
import FooterPage from "../components/Home/FooterPage.vue"
import FloatingWhatsapp from "../components/Home/FloatingWhatsapp.vue"
// import FloatingChat from "../components/Home/FloatingChat.vue"




export default {
  components: {
     PreloaderAnim,
    Cursor_Anim,
    MainHeader,
    HeroPage,
    FooterPage,
    FloatingWhatsapp,
    // FloatingChat,
  },
};
</script>


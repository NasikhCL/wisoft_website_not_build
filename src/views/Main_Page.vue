<template>
  <div>
   <pre-loader></pre-loader>

        <!-- Header navigation  -->
     
    <main-header></main-header>
    <!-- hero -->
    <hero-page></hero-page>
    <!-- footer -->
    <footer-page></footer-page>
    <!-- whatsapp -->
    <floating-whatsapp></floating-whatsapp>
    <floating-chat></floating-chat>
   
    <!-- Go Top Button -->
   
     <!-- Header navigation  -->
    
    
    
  </div>
</template>


<script>
import Preloader from "@/components/Home/Preloader.vue"
import MainHeader from "../components/Home/MainHeader.vue"
import HeroPage from "../components/Home/HeroPage.vue"
import FooterPage from "../components/Home/FooterPage.vue"
import FloatingWhatsapp from "../components/Home/FloatingWhatsapp.vue"
import FloatingChat from "../components/Home/FloatingChat.vue"




export default {
  components: {
    Preloader,
    MainHeader,
    HeroPage,
    FooterPage,
    FloatingWhatsapp,
    FloatingChat,
  },
};
</script>


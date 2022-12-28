<template>
  <div>
    <!-- Go Top Button -->
    <button id="scroll_top" class="scroll-top">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
     <!-- Header navigation  -->
     
    <main-header></main-header>
    <!-- hero -->
    <hero-page></hero-page>
    <!-- footer -->
    <footer-page></footer-page>
    <!-- whatsapp -->
    <floating-whatsapp></floating-whatsapp>
    <floating-chat></floating-chat>
    
    
  </div>
</template>


<script>
import MainHeader from "../components/Home/MainHeader.vue"
import HeroPage from "../components/Home/HeroPage.vue"
import FooterPage from "../components/Home/FooterPage.vue"
import FloatingWhatsapp from "../components/Home/FloatingWhatsapp.vue"
import FloatingChat from "../components/Home/FloatingChat.vue"


export default {
  components: {
    MainHeader,
    HeroPage,
    FooterPage,
    FloatingWhatsapp,
    FloatingChat,
  },
};
</script>


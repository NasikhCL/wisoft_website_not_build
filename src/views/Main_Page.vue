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
    
  </div>
</template>


<script>
import MainHeader from "../components/Home/MainHeader.vue"
import HeroPage from "../components/Home/HeroPage.vue"
import FooterPage from "../components/Home/FooterPage.vue"

export default {
  components: {
    MainHeader,
    HeroPage,
    FooterPage,
  },
};
</script>


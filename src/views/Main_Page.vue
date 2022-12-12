<template>
  <div>
    <div class="cursor1"></div>
    <div class="cursor2"></div>

    <!-- Preloader -->
    <!-- <div class="preloader">
    <div class="loading">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
  </div> -->

    <!-- Scroll Smoother -->
    <div class="has-smooth" id="has_smooth"></div>

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
import MainHeader from "../components/MainHeader.vue"
import HeroPage from "../components/HeroPage.vue"
import FooterPage from "../components/FooterPage.vue"

export default {
  components: {
    MainHeader,
    HeroPage,
    FooterPage,
  },
};
</script>


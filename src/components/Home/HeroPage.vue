<template>
    <div>
         <!-- Scroll Smoother -->
  <div class="has-smooth" id="has_smooth"></div>


<!-- Go Top Button -->
<button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>



<div id="smooth-wrapper">
  <div id="smooth-content">
    <main>

      <!-- Hero area start -->
       <hero-page></hero-page>
      <!-- Brand area start -->
      <brand-page></brand-page>

      <!-- About area start -->
      <about-page></about-page>

      <!-- Service area  -->
      <service-page></service-page>

      <!-- Portfolio area start -->
      <portfolio-page></portfolio-page>
      
      <!-- Testimonial area start -->
      <testimonial-page></testimonial-page>

      <!-- Workflow area start -->
      <work-page></work-page>

      <!-- Price area start -->
      <price-page></price-page>
      
      <!-- Blog area start -->
      <blog-page></blog-page>

    </main>

    </div>
    </div>
  </div>
</template>



<script>
import AboutPage from "../Home/MainSection/AboutSection.vue"
import HeroPage from "../Home/MainSection/HeroSection.vue"
import BrandPage from "../Home/MainSection/BrandSection.vue"
import BlogPage from "../Home/MainSection/BlogSection.vue"
import PricePage from "../Home/MainSection/PriceSection.vue"
import WorkPage from "../Home/MainSection/WorkflowSection.vue"
import ServicePage from "../Home/MainSection/ServiceSection.vue"
import PortfolioPage from "../Home/MainSection/PortfolioSection.vue"
import TestimonialPage from "../Home/MainSection/TestimonialSection.vue"


export default {
  components: {
    HeroPage,AboutPage,BrandPage,BlogPage,PricePage,WorkPage,ServicePage,PortfolioPage,TestimonialPage
  },
};
</script>
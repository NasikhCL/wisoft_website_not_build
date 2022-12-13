<template>
    <div>
      <div class="has-smooth" id="has_smooth"></div>


  <!-- Go Top Button -->
  <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>
  <main-header></main-header>

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>

        <!-- Hero area start -->
        <hero-page></hero-page>
     
        <!-- Story area start -->
        <story-page></story-page>

        <!-- Counter area start -->
        <counter-page></counter-page>

        <!-- Team area start -->
        <team-page></team-page>

        <!-- Brand area start -->
        <brand-page></brand-page>

        <!-- Testimonial area start -->
        <testimonial-page></testimonial-page>

        <!-- CTA area start -->
        <cta-page></cta-page>
      </main>

      <!-- Footer area start -->
      <footer-page></footer-page>
    

    </div>
  </div>

    </div>

</template>
<script>
  import MainHeader from '../components/About/Components/HeaderSection.vue'
  import FooterPage from '../components/About/Components/FooterSection.vue'
  import HeroPage from '../components/About/Components/MainSections/HeroSection.vue'
  import StoryPage from '../components/About/Components/MainSections/StorySection.vue'
  import CounterPage from '../components/About/Components/MainSections/CounterSection.vue'
  import TeamPage from '../components/About/Components/MainSections/TeamSection.vue'
  import BrandPage from '../components/About/Components/MainSections/BrandAreaSection.vue'
  import TestimonialPage from '../components/About/Components/MainSections/TestimonialSection.vue'

export default {
  components: { MainHeader, HeroPage, StoryPage, FooterPage,CounterPage,TeamPage,BrandPage,TestimonialPage},
    name : 'AboutPage'
}
</script>


<template>
    <div>
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main>
        <header-section></header-section>
        <!-- Contact area start -->
        <main-page></main-page>
      </main>
      <!-- Footer area start -->
      <footer-page></footer-page>
      </div>
      </div>
    </div>
</template>


<script>
import HeaderSection from '../components/About/HeaderSection.vue'
import MainPage from '../components/Blog/MainSection.vue'
import FooterPage from '../components/Home/FooterPage.vue'

export default {
  components: { HeaderSection, MainPage,FooterPage },
    name : 'BlogPage'
}
</script>
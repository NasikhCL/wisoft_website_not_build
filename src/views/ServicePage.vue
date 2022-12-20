<template>
    <div class="dark">
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main>
        <header-section></header-section>
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
import MainPage from '../components/Service/MainSection.vue'
import FooterPage from '../components/Contact/FooterSection.vue'

export default {
  components: { HeaderSection, MainPage,FooterPage },
    name : 'ServicePage'
}
</script>
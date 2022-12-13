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
import HeaderSection from '../components/About/Components/HeaderSection.vue'
import MainPage from '../components/Contact/Components/MainSection.vue'
import FooterPage from '../components/Contact/Components/FooterSection.vue'

export default {
  components: { HeaderSection, MainPage,FooterPage },
    name : 'ContactPage'
}
</script>
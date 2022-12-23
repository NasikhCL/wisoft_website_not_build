<template>
  <div>
    <pre-loader></pre-loader>
    <router-view></router-view>
  </div>
</template>


<script>
import Preloader from '../src/components/Preloader.vue'
export default {
  name: 'App',
  components : {
    Preloader
  }
}

</script>




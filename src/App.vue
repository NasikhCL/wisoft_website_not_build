<template>
    <pre-loader></pre-loader>
    <cursor_Anim></cursor_Anim>
    <router-view></router-view>
</template>


<script>
 import PreloaderAnim from './components/PreloaderAnim.vue';
import Cursor_Anim from './components/Cursor_Anim.vue';
export default {
  name: 'App',
  components : {
    Cursor_Anim,
    PreloaderAnim,
  }
}

</script>
<style>
  
</style>




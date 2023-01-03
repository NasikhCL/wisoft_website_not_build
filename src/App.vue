<template>
  <cursor_Anim></cursor_Anim>
    <router-view></router-view>
</template>


<script>
import Cursor_Anim from './components/Cursor_Anim.vue';
export default {
  name: 'App',
  components : {
    Cursor_Anim,
  }
}

</script>




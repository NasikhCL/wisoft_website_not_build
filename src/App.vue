<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'App',
  created() {
  let ckeditor = document.createElement('script');   
  ckeditor.setAttribute('src',"//cdn.ckeditor.com/4.6.2/full/ckeditor.js");
  document.head.appendChild(ckeditor);
}
}

</script>



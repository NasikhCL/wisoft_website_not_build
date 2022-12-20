import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



// swiper
import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
// css
import "./assets/css/master.css"
import "./assets/css/all.min.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/locomotive-scroll.min.css"
import "./assets/css/meanmenu.min.css"
// import "./assets/css/progressbar.css"
import "./assets/css/swiper-bundle.min.css"
// scss
import "./assets/scss/master.css"

// webfont
import "./assets/webfonts/fa-brands-400.ttf"
import "./assets/webfonts/fa-brands-400.woff2"
import "./assets/webfonts/fa-regular-400.ttf"
import "./assets/webfonts/fa-regular-400.woff2"
import "./assets/webfonts/fa-solid-900.ttf"
import "./assets/webfonts/fa-solid-900.woff2"
import "./assets/webfonts/fa-v4compatibility.ttf"
import "./assets/webfonts/fa-v4compatibility.woff2"

// js
// import "../src/assets/js/main.js"
// import "../src/assets/js/jquery-3.6.0.min.js"
// import "../src/assets/js/bootstrap.bundle.min.js"
// import "../src/assets/js/swiper-bundle.min.js"
// import "../src/assets/js/counter.js"
// import "../src/assets/js/gsap.min.js"
// import "../src/assets/js/ScrollTrigger.min.js"
// import "../src/assets/js/ScrollToPlugin.min.js"
// import "../src/assets/js/ScrollSmoother.min.js"
// import "../src/assets/js/SplitText.min.js"
// import "../src/assets/js/chroma.min.js"
// import "../src/assets/js/jquery.meanmenu.min.js"
// import "../src/assets/js/main.js"

createApp(App).use(router).mount('#app')

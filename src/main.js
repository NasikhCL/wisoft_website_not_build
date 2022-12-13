import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// css
import "./assets/css/master.css"
import "./assets/css/all.min.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/locomotive-scroll.min.css"
import "./assets/css/meanmenu.min.css"
// import "./assets/css/progressbar.css"
import "./assets/css/swiper-bundle.min.css"


// webfont
import "./assets/webfonts/fa-brands-400.ttf"
import "./assets/webfonts/fa-brands-400.woff2"
import "./assets/webfonts/fa-regular-400.ttf"
import "./assets/webfonts/fa-regular-400.woff2"
import "./assets/webfonts/fa-solid-900.ttf"
import "./assets/webfonts/fa-solid-900.woff2"
import "./assets/webfonts/fa-v4compatibility.ttf"
import "./assets/webfonts/fa-v4compatibility.woff2"





// scss

// import "@/assets/scss/master.scss"

createApp(App).use(router).mount('#app')

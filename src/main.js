import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// css
import "./assets/css/master.css"
import "./assets/css/all.min.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/locomotive-scroll.min.css"
import "./assets/css/meanmenu.min.css"
//import "./assets/css/progressbar.css"
import "./assets/css/swiper-bundle.min.css"




// scss
import "./assets/scss/master.scss"
<style lang="scss">
    @import "./assets/scss/components/_button.scss";
    @import "./assets/scss/components/_cursor.scss";
    @import "./assets/scss/component/_menu.scss";
    @import "./assets/scss/component/_modal.scss";
    @import "./assets/scss/component/_preloader.scss";
    @import "./assets/scss/component/_switcher.scss";
    @import "./assets/scss/component/_title.scss";

    @import "./assets/scss/layout/_about.scss";
    @import "./assets/scss/layout/_award.scss";
    @import "./assets/scss/layout/_blog.scss";
    @import "./assets/scss/layout/_brand.scss";
    @import "./assets/scss/layout/_career.scss";
    @import "./assets/scss/layout/_contact.scss";
    @import "./assets/scss/layout/_counter.scss";
    @import "./assets/scss/layout/_cta.scss";
    @import "./assets/scss/layout/_development.scss";
    @import "./assets/scss/layout/_error.scss";
    @import "./assets/scss/layout/_.scss";

</style>








createApp(App).use(router).mount('#app')

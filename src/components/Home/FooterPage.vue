<template>
  <div>
    <div id="smooth-wrapper">
    <div id="smooth-content">
      <footer class="footer__area" data-scroll-section>
      <div class="footer__top">
        <div class="container footer-line"></div>
        <img src="@/assets/imgs/thumb/footer.jpg" alt="Footer Image" data-speed="0.5">
      </div>

      <div class="footer__btm">
        <div class="container">
          <div class="row footer__row">
            <div class="col-xxl-12">
              <div class="footer__inner">
                <div class="footer__widget">
                  <h2 class="footer__widget-title">Looking For</h2>
                  <div style="display:flex; flex:wrap;  ;">
                    <ul class="footer__link">
                    <li><a><router-link to="/About">About</router-link></a></li>
                    <!-- <li><a href="portfolio.html">Case Study</a></li> -->
                    <li><a href="career.html">Career</a></li>
                    <li><a><router-link to="/Blog">Blog</router-link></a></li>
                    <li><a><router-link to="/Contact">Contact</router-link></a></li>
                  </ul>
                  <ul class="footer__link" >
                    <li><a><router-link to="/About">About</router-link></a></li>
                    <!-- <li><a href="portfolio.html">Case Study</a></li> -->
                    <li><a href="career.html">Career</a></li>
                    <li><a><router-link to="/Blog">Blog</router-link></a></li>
                    <li><a><router-link to="/Contact">Contact</router-link></a></li>
                  </ul>
                  
                  </div>
                </div>
           
                
                <div class="footer__widget-3">
                  <h2 class="footer__widget-title contact-title">Contact Us</h2>
                 
                  <contact-information></contact-information>
                  
                </div>

                <div class="footer__widget-4">
                  <h2 class="project-title">Have a project in your mind?</h2>
                  <div id="btn_wrapper">
                    <a class="wc-btn-primary btn-hover btn-item"><span></span><router-link to="/Contact">Contact us
                     <i class="fa-solid fa-arrow-right"></i></router-link>
                    </a>
                  </div>
                  <ul class="footer__social">
                    <li><a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                    <li><a href="#"><span><i class="fa-brands fa-twitter"></i></span></a></li>
                    <li><a href="#"><span><i class="fa-brands fa-instagram"></i></span></a></li>
                    <li><a href="#"><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                  </ul>
                </div>

              

                <div class="footer__subscribe">
                  <form action="#">
                    <input type="email" name="email" placeholder="Enter your email">
                    <button type="submit" class="subs-btn"><i class="fa-solid fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </div>
  </div>
</template>

<style scoped>
    .footer__inner{
      margin-top: 0;
    }     
    .footer__widget-3 {
  grid-column: span 4;
  /* padding: 140px 0 130px; */
}
</style>
<script> 
import ContactInformation from './MainSection/ContactInformation.vue';
  export default{
    name : 'FooterPage',
    components:{
      ContactInformation
    }
  }
</script>
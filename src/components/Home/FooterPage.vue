<template>
  <div>
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
                <div class="footer__widget" style="width:230px">
                  <h2 class="footer__widget-title">Looking For</h2>
                  <div style="display:flex; flex:wrap;  ;">
                    <ul class="footer__link" style="margin-right:30px">
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
                 
                  
                  <!-- <img class="footer__logo" src="@/assets/imgs/logo/footer-logo-white.png" alt="Footer Logo">
                  <p>When do they work well, and when do they on us and finally, when do we actually need how can we
                    avoid
                    them.</p> -->
                  <!-- <ul class="footer__social">
                    <li><a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                    <li><a href="#"><span><i class="fa-brands fa-twitter"></i></span></a></li>
                    <li><a href="#"><span><i class="fa-brands fa-instagram"></i></span></a></li>
                    <li><a href="#"><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                  </ul> -->
                </div>
           
                <!-- <div class="footer__widget-2">
                  <h2 class="footer__widget-title"></h2>
                  <ul class="footer__link">
                    <li><a href="about.html">About Company</a></li>
                    <li><a href="portfolio.html">Case Study</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="blog.html">blog</a></li>
                    <li><a href="contact.html">contact</a></li>
                  </ul>
                </div>
                <div class="footer__widget-2">
                  <h2 class="footer__widget-title"> </h2>
                  <ul class="footer__link">
                    <li><a href="about.html">About Company</a></li>
                    <li><a href="portfolio.html">Case Study</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="blog.html">blog</a></li>
                    <li><a href="contact.html">contact</a></li>
                  </ul>
                </div> -->

                <div class="footer__widget-3" style="width:420px;">
                  <h2 class="footer__widget-title contact-title">Contact Us</h2>
                  <!-- <ul class="footer__contact">
                    <p>UAE</p>
                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                    <li><a href="tel:02574328301" class="phone">+02) 574 - 328 - 301 </a></li> -->
                    <!-- <p>UAE</p>
                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                    <li><a href="tel:02574328301" class="phone">+02) 574 - 328 - 301 </a></li> -->
                    <!--<p>UAE</p>
                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                    <li><a href="tel:02574328301" class="phone">+02) 574 - 328 - 301 </a></li> -->
                    
                  <!-- </ul> -->
                  <!--  -->
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

                <!-- <div class="footer__copyright">
                  <p>© 2022 - 2025 | Alrights reserved by <a href="https://wealcoder.com/"
                      target="_blank">Wealcoder</a>
                  </p>
                </div> -->

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
</template>

<style scoped>
    .footer__inner{
      margin-top: 0;
    }     
    .contact-title{
      margin-left:186px;
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
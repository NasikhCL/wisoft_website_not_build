<template>
  <div>
           <!-- Portfolio area start -->
           <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
           <section class="portfolio__area pb-140">
          <div class="container">
            <div class="row top_row">

              <h2 class="portfolio__text">work</h2>
              <div class="portfolio__list-1">
                <div class="portfolio__item">
                  <a href="portfolio-details.html"><img class="mover" src="@/assets/imgs/portfolio/1/1.jpg"
                      alt="Portfolio Image"></a>
                  <div class="portfolio__info">
                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                    <p>02 May 2021</p>
                  </div>
                </div>
                <div class="portfolio__item">
                  <a href="portfolio-details.html"><img src="@/assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image"></a>
                  <div class="portfolio__info">
                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                    <p>02 May 2021</p>
                  </div>
                </div>
                <div class="portfolio__item">
                  <a href="portfolio-details.html"><img src="@/assets/imgs/portfolio/1/3.jpg" alt="Portfolio Image"></a>
                  <div class="portfolio__info">
                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                    <p>02 May 2021</p>
                  </div>
                </div>
                <div class="portfolio__item">
                  <a href="portfolio-details.html"><img src="@/assets/imgs/portfolio/1/4.jpg" alt="Portfolio Image"></a>
                  <div class="portfolio__info">
                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                    <p>02 May 2021</p>
                  </div>
                </div>
                <div class="portfolio__item">
                  <a href="portfolio-details.html"><img src="@/assets/imgs/portfolio/1/1.jpg" alt="Portfolio Image"></a>
                  <div class="portfolio__info">
                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                    <p>02 May 2021</p>
                  </div>
                </div>
                <div class="portfolio__item">
                  <!-- <a href="portfolio-details.html"><img src="@/assets/imgs/portfolio/1/2.jpg" alt="Portfolio Image"></a> -->
                  <div class="portfolio__info">
                    <h3 class="portfolio__title">Arteck Lyon Conseil</h3>
                    <p>02 May 2021</p>
                  </div>
                </div>

              </div>
            </div>

            <div class="row row_bottom">
              <div class="col-xxl-12">
                <div class="portfolio__btn" id="btn_wrapper" data-speed="1" data-lag="0.2">
                  <a class="wc-btn-secondary btn-hover btn-item" href="/contact"><span></span> Let's <br> Talk
                    <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
        </div>
        </div>
        <!-- Portfolio area end -->



  </div>
</template>

<script>
  // jquery
  import $ from "jquery";
  import { gsap } from 'gsap';
  import {ScrollTrigger} from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  

   export default {
    name: 'PortfolioSection',
    data () {
      return {
        
      }
    },
    mounted () {
      this.PortfolioScroll()
    },
    methods: {
      PortfolioScroll: function() {
        let device_width = window.innerWidth;
        if (device_width > 767) {
        let portfolioline = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio__area",
        start: "top center-=200",
        pin: ".portfolio__text",
        end: "bottom bottom+=80",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      }
    })

    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1
    })
    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1
    })
    portfolioline.to(".portfolio__text", {
      scale: 1,
      duration: 1
    }, "+=2")
  }


  let portfolio_lists = gsap.utils.toArray(".portfolio__item")
  portfolio_lists.forEach((portfolio, i) => {
    gsap.set(portfolio, { opacity: 0.7 })
    let t1 = gsap.timeline()

    t1.set(portfolio, {
      position: "relative",
    })
    t1.to(portfolio, {
      scrollTrigger: {
        trigger: portfolio,
        scrub: 2,
        duration: 1.5,
        start: "top bottom+=100",
        end: "bottom center",
        markers: false
      },
      scale: 1,
      opacity: 1,
      rotateX: 0,
    })
  });

  gsap.to(".bg_image img", {
    xPercent: -18,
    scrollTrigger: {
      trigger: ".portfolio__area",
      start: "top top",
      end: "bottom center",
      pin: ".bg_image",
      scrub: 3
    }
  });
      }
    }
  }
</script>

<style>
 /* .row_bottom .portfolio__btn{
  margin-top: 50px;
 }
 .portfolio__btn .btn-item{
  text-align: center;
 } */
</style>
<template>
  <div>
           <!-- Portfolio area start -->
        <section class="portfolio__area-3">
          <div class="container pt-100 pb-150">
            <div class="row">
              <div class="col-xxl-12">
                <div class="sec-title-wrapper">
                  <h2 class="sec-sub-title title-anim">Featured <br>Work</h2>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xxl-12">
                <div class="swiper portfolio__slider-3">
                  <div class="swiper-wrapper">
                    <swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="50"
                    navigation
                    :pagination="{ clickable: true }"
                    :scrollbar="{ draggable: true }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    >

                    <!--  -->
                    <swiper-slide>
                    <div class="swiper-slide">
                      <div class="portfolio__slide-3">
                        <a href="service-details.html">
                          <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                          <img src="@/assets/imgs/portfolio/3/2.jpg" alt="Portfolio Image">
                        </a>
                      </div>
                    </div>
                  </swiper-slide>
                    <!--  -->

                    <!--  -->
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="portfolio__slide-3">
                        <a href="service-details.html">
                          <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                          <img src="@/assets/imgs/portfolio/3/1.jpg" alt="Portfolio Image">
                        </a>
                      </div>
                    </div>
                  </swiper-slide>
                    <!--  -->

                    <!--  -->
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="portfolio__slide-3">
                        <a href="service-details.html">
                          <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                          <img src="@/assets/imgs/portfolio/3/3.jpg" alt="Portfolio Image">
                        </a>
                      </div>
                    </div>
                  </swiper-slide>
                    <!--  -->

                    <!--  -->
                  <swiper-slide>
                    <div class="swiper-slide">
                      <div class="portfolio__slide-3">
                        <a href="service-details.html">
                          <h3 class="portfolio__title-3">Benjon <span>Website</span> 2012</h3>
                          <img src="@/assets/imgs/portfolio/3/4.jpg" alt="Portfolio Image">
                        </a>
                      </div>
                    </div>
                  </swiper-slide>
                    <!--  -->
                  </swiper>
                  </div>

                  <div class="swiper-pagination"></div>

                  <!-- <div class="swiper-btn"> -->
                    <!-- <div class="pp-prev"><i class="fa-solid fa-arrow-left"></i></div>
                    <div class="pp-next"><i class="fa-solid fa-arrow-right"></i></div> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Portfolio area end -->



  </div>
</template>

<script>
  import { Swiper,SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper';
export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
      };
    },
}
</script>
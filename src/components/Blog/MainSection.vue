<template>
    <div>
         <!-- Blog area start -->
         <section class="blog__area-3 blog-v3 blog__animation">
          <div class="container line">
            <div class="line-3"></div>
            <div class="row ">
              <div class="col-xxl-12">
                <div class="sec-title-wrapper text-anim pt-130">
                  <h2 class="sec-sub-title">Recent Blog</h2>
                  <h3 class="sec-title title-anim">Read Updated <br>Journal</h3>
                  <p>Read our blog and try to see everything from every perspective. Our passion lies in making
                    everything
                    accessible and aesthetic for everyone. </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <article class="blog__item-3">
                  <div class="blog__img-wrapper-3">
                    <a href="blog-details.html">
                      <div class="img-box">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <div class="blog__info-3">
                    <h4 class="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" class="blog__title-3">How to bring fold to your startup
                        company with
                        Axtra</a></h5>
                    <a href="blog-details.html" class="blog__btn">Read More <span><i
                          class="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </article>
              </div>

              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <article class="blog__item-3">
                  <div class="blog__img-wrapper-3">
                    <a href="blog-details.html">
                      <div class="img-box">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <div class="blog__info-3">
                    <h4 class="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" class="blog__title-3">How to manage a talented and
                        successful design
                        team</a></h5>
                    <a href="blog-details.html" class="blog__btn">Read More <span><i
                          class="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </article>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <article class="blog__item-3">
                  <div class="blog__img-wrapper-3">
                    <a href="blog-details.html">
                      <div class="img-box">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/1.jpg" alt="Blog Thumbnail">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/1.jpg" alt="BLog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <div class="blog__info-3">
                    <h4 class="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" class="blog__title-3">How to bring fold to your startup
                        company with
                        Axtra</a></h5>
                    <a href="blog-details.html" class="blog__btn">Read More <span><i
                          class="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </article>
              </div>

              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <article class="blog__item-3">
                  <div class="blog__img-wrapper-3">
                    <a href="blog-details.html">
                      <div class="img-box">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/2.jpg" alt="Blog Thumbnail">
                        <img class="image-box__item" src="@/assets/imgs/blog/3/2.jpg" alt="BLog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <div class="blog__info-3">
                    <h4 class="blog__meta"><a href="category.html">UI Design</a> . 02 May 2019</h4>
                    <h5><a href="blog-details.html" class="blog__title-3">How to manage a talented and
                        successful design
                        team</a></h5>
                    <a href="blog-details.html" class="blog__btn">Read More <span><i
                          class="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <!-- Blog area end -->


        <!-- CTA area start -->
        <section class="cta__area">
          <div class="container line pb-110">
            <div class="line-3"></div>
            <div class="row">
              <div class="col-xxl-12">
                <div class="cta__content">
                  <p class="cta__sub-title">Work with us</p>
                  <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                  <div id="btn_wrapper">
                    <a href="contact.html" class="wc-btn-primary btn-item btn-hover"><span></span>Let’s talk us <i
                        class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <floating-whatsapp></floating-whatsapp>
        </section>
        <!-- CTA area end -->
        <div class="float-icon">
          
        </div>
        
    </div>
</template>

<script> 
import FloatingWhatsapp from '../Home/FloatingWhatsapp.vue';
  export default{
    name : 'MainSection',
    components :{
      FloatingWhatsapp
    }
  }
</script>

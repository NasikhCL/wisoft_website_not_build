<template>
  <div>
     <!-- Testimonial area start -->
     <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
     <section class="testimonial__area">
          <div class="container g-0 line">
            <span class="line-3"></span>
            <div class="row">
              <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                <div class="testimonial__wrapper">
                  <div class="testimonial__item item-1">
                    <div class="button modal-trigger">
                      <div class="testimonial__img b-right">
                        <img src="@/assets/imgs/testimonial/1/1.png" alt="Testimonial Image" style="translate: none; rotate: none; scale: none; transform: translate(-15px, 15px);">
                      </div>

                      <h2 class="testimonial__title">Jessica Sherlock</h2>
                      <h3 class="testimonial__role">Manager, Oitaka</h3>
                    </div>
                  </div>
                  <div class="sec-title-wrapper text-anim">
                    <h4 class="sec-sub-title">Testimonials</h4>
                    <h5 class="sec-title title-anim">Clients <br>feedback</h5>
                    <p>Our happy customers give us impactfull and positive feedback on our services, customer supports
                      &
                      etc.</p>
                      <div class="hero-item-btn">
                       <button class=" hero-btn1">Explore More</button>
                      </div>
                  </div>
                  
                </div>
                

                <div class="testimonial__item item-2">
                  <div class="button modal-trigger-2">
                    <div class="testimonial__img b-left">
                      <img src="@/assets/imgs/testimonial/1/3.png" alt="Testimonial Image">
                    </div>

                    <h2 class="testimonial__title">Jessica Sherlock</h2>
                    <h3 class="testimonial__role">Manager, Oitaka</h3>
                  </div>
                </div>
              </div>
              
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div class="testimonial__item item-3 img-">
                  <div class="button modal-trigger-3">
                    <div class="testimonial__img b-left">
                      <img src="@/assets/imgs/testimonial/1/2.png" alt="Testimonial Image">
                    </div>

                    <h2 class="testimonial__title">adam Smith</h2>
                    <h3 class="testimonial__role">Manager, Oitaka</h3>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        </main>
        </div>
        </div>
        <!-- Testimonial area end -->
  </div>
</template>

<script> 
  // jquery
  import $ from "jquery";
  import { gsap } from 'gsap';
   export default {
    name: 'TestimonialSection',
    data () {
      return {
        
      }
    },
    mounted () {
      this.testimonialAnimation()
    },
    methods: {
      testimonialAnimation: function() {
        

        // -----------
        imageMoving(".testimonial__area", ".testimonial__img img")
         // Image Moving with Cursor Function
  function imageMoving(wrapper, image_list) {
    let container = document.querySelector(wrapper)
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {

          var x = e.clientX
          var y = e.clientY
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let center = viewportWidth / 2
          let centerHeight = viewportHeight / 2

          if (x > center) {
            gsap.to(image_list, {
              x: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              x: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
          if (y > centerHeight) {
            gsap.to(image_list, {
              y: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              y: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  /////////////////////////////////////////////////////

  }
      }
    }
  
</script>
<style scoped> 
.hero-item-btn .hero-btn1{
  border: 1px solid black;
  border-radius: 20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  cursor: pointer;
  
}
.hero-item-btn .hero-btn1:hover{
  color: white;
  background: black;
}
.testimonial__area img {
    overflow-clip-margin: content-box;
    overflow: clip;
}
  @media only screen and (max-width: 1200px){
    .sec-sub-title {
    font-size: 50px;
    font-weight: 500;
}
  }

</style>
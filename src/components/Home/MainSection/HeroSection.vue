<template>
    <div>
      <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <section class="hero__area-3">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="hero__inner-3">
                <!-- Main Title -->
                  <div class="sec-title-wrapper">
                    <h2 class="sec-sub-title">UAE #1</h2>
                    <!-- <h3 class="sec-title title-left">Digital Marketing Agecy</h3> -->
                    <!-- <h6 class="sec-title">&nbsp;&nbsp;&nbsp; Create Business Everyday</h6> -->
                    <!-- <h3 class="sec-title title-right">eting</h3> -->
                    <h3 class="sec-title main-titlee title-anim">Digital Marketing Agency<br> Create Business Everyday</h3>
                     
                  </div>
                 
                  
                <!-- ends Title -->
                  <div class="hero__text-3">
                    <p class="animation__word_come">Static and dynamic secure code review can prevent a day before your
                      product is even released. We
                      can integrate with your dev environment</p>
                  </div>
                  <div class="scroll-down">
                    <button><img src="@/assets/imgs/icon/arrow-down-sm.png" alt="arrow icon"></button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div>
            <div class="video-info">
            <div class="video-intro">
              <input id="video_check" type="checkbox">
              <div class="intro-title">
                <h4 class="video-title">Watch <span>video intro</span></h4>
                <h4 class="video-title close-video-title">Close <span>video intro</span></h4>
              </div>
              <div class="video">
                <video src="@/assets/video/hero-3.mp4" loop muted autoplay playsinline></video>
              </div>
            </div>
          </div>
      
          </div>
          <div class="hero-item-btn">
             <button class=" hero-btn">let's try</button>
          </div>
        </div>
        

        <div class="hero3-img-ani">
          <img src="@/assets/imgs/hero/3/1.jpg" alt="Hero Image" class="hero3-img">
        </div>
      </section>
      </main>
      </div>
      </div>
    </div>
</template>
<script>
   // jquery
  //  import $ from "jquery";
  //  import { gsap } from 'gsap';
  //  import { SplitText } from 'gsap/SplitText'
  //  gsap.registerPlugin(SplitText);
   export default {
    name: 'HeroSection',
    data () {
      return {
        
      }
    },
    mounted () {
      this.HeroSectionAnimation()
    },
    methods: {
      HeroSectionAnimation: function(){
         // toggle   
     

  /////////////////////////////////////////////////////

 

    }
  }
}
</script>

<style>


.sec-title-wrapper .main-titlee{
  font-size: 64px !important;
  color: rgb(0, 0, 0);
}


/* css */
.wrapper{
  position: relative;
}
 .hero-item-btn .hero-btn {
  border: 1px solid black;
  border-radius:20px;
  width: 150px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  cursor: pointer;
  position: absolute;
  left: 126px;
  bottom: 230px;
 
}
/* .hero-item-btn .hero-btn:hover{
  color: white;
} */
.hero-item-btn  .hero-btn:hover{
  background-color:rgb(0, 0, 0);
  color: antiquewhite;
}

</style>
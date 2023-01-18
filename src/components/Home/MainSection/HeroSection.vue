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
   import $ from "jquery";
    import { gsap } from 'gsap';
   import { SplitText } from 'gsap'
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
        
          // Service Page hero Animation 
        // let word_up = document.querySelector(".animation__word_up")
        // let split_word_up = new SplitText(word_up, { type: "words", position: "absolute" })
        // gsap.from(split_word_up.words, { duration: 1, y: 50, autoAlpha: 0, stagger: 0.05 });

        // Service Page hero Animation   
        // let word_come = document.querySelectorAll(".animation__word_come")
        // word_come.forEach((word_come) => {
        //   let split_word_come = new SplitText(word_come, { type: "chars words", position: "absolute" })
        //   gsap.from(split_word_come.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
        // })

        // Service Page hero Animation   
        // let word_come_long = document.querySelectorAll(".animation__word_come_long")
        // word_come_long.forEach((word_come_long) => {
        //   let split_word_come_long = new SplitText(word_come_long, { type: "chars words", position: "absolute" })
        //   gsap.from(split_word_come_long.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.5 });
        // })
    //     let splitTitleLines = gsap.utils.toArray(".title-anim");

    //   splitTitleLines.forEach(splitTextLine => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: splitTextLine,
    //       start: 'top 90%',
    //       end: 'bottom 60%',
    //       scrub: false,
    //       markers: false,
    //       toggleActions: 'play none none none'
    //     }
    //   });

    //   const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    //   gsap.set(splitTextLine, { perspective: 400 });
    //   itemSplitted.split({ type: "lines" })
    //   tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    // });
 

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
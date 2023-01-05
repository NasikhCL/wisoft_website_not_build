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
                <div class="sec-title-wrapper">
                  <h2 class="sec-sub-title">UAE #1</h2>
                  <h2 class="title-main"><span>Digi</span><span>tal</span> <span> Marke</span><span>ting</span> <span>Agency</span> </h2>
                  <h2 class="title-main1"><span>Cr</span>eate  <span>   Buss</span><span>iness</span><span>.</span></h2>
                  <h2 class="title-main2"><span>better</span> <span>everyday.</span></h2>
                  <!-- <h3 class="sec-title title-right">eting</h3> -->
                </div>
                <div class="hero__text-3">
                  <span><p class="animation__word_come">Static and dynamic secure code review can prevent a day before your
                    product is even released. We
                    can integrate with your dev environment</p></span>
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
<!-- <script>
   // jquery
   import $ from "jquery";
   import { gsap } from 'gsap';
   import { SplitText } from 'gsap/SplitText'
   gsap.registerPlugin(SplitText);


 

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
      let word_come = document.querySelectorAll(".animation__word_come")
      word_come.forEach((word_come) => {
      let split_word_come = new SplitText(word_come, { type: "chars words", position: "absolute" })
      gsap.from(split_word_come.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
  })

  // Service Page hero Animation   
    let word_come_long = document.querySelectorAll(".animation__word_come_long")
    word_come_long.forEach((word_come_long) => {
    let split_word_come_long = new SplitText(word_come_long, { type: "chars words", position: "absolute" })
    gsap.from(split_word_come_long.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.5 });
  })

  // Home page Hero Animation 
  let homeDigi = gsap.timeline()

  // Charchater Come long Animation 
  let title_left = document.querySelector(".hero__area-3 .title-left")
  let title_right = document.querySelector(".hero__area-3 .title-right")

  let split_title_left = new SplitText(title_left, { type: "chars" })
  let split_title_right = new SplitText(title_right, { type: "chars" })

  homeDigi.from(split_title_left.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.15 });
  homeDigi.from(split_title_right.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.15 }, "-=.65");


      }
    }
  }
</script> -->

<style>
/* css */
/* 
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
  background-color:black;
  color: antiquewhite;
}


.hero__area-3 .sec-sub-title{
  font-size: xx-large;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
}
.title-main{
  font-weight: 100;
  font-size: 50px;
  margin-right: 130px;
}
.title-main1{
  font-weight: 800;
  font-size:80px;
  margin-left: 100px;
}
.title-main2{
  font-weight: 200;
  font-size: 65px;
  font-family: serif;
  margin-left: 550px;
}
.sec-title-wrapper {
  position: relative;
  z-index: 9;
}


.hero__text-3 {
  max-width: 320px;
  padding-top: 0;

}
/* split text animation */
.sec-title-wrapper h2{
  font-family: "Montserrat Medium";
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}
span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}
span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}


@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
/* split text  */
.hero__area-3 .hero3-img {
    width: 1000px;
}

/* .wrapper{
  display: none;
} */
/* media query */
@media only screen and (max-width: 1200px) {
  .hero__area-3 .video-info{
    display: none;
  }
  .sec-sub-title{
    font-size: 160px;
    font-weight: 900;
  }
  .title-main2{
    margin-left: 200px;
  }
  .hero__text-3{
    font-size: larger;
  }
  .hero-item-btn {
   display: none;
  }
 
}

</style>
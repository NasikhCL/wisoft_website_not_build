<template>
    <div>
        <section class="hero__area-3">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12">
              <div class="hero__inner-3">
                <div class="sec-title-wrapper">
                  <h2 class="sec-sub-title">UAE #1</h2>
                  <h2 class="title-main">Digital Marketing Agency</h2>
                  <h2 class="title-main1">Create Bussiness.</h2>
                  <h1 class="title-main2 ">better EveryDay.</h1>
                  <!-- <h3 class="sec-title title-right">eting</h3> -->
                </div>
                <div class="hero__text-3">
                  <p class="animation__word_come">Static and dynamic secure code review can prevent a day before your
                    product is even released. We
                    can integrate with your dev environment</p>
                </div>
                <div class="hero-btn">
                  <button type="button" class="btn btn-outline-dark">Let's Talk</button>
                </div>

                
                <div class="scroll-down">
                  <button><img src="@/assets/imgs/icon/arrow-down-sm.png" alt="arrow icon"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper">
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

        <div class="hero3-img-ani">
          <img src="@/assets/imgs/hero/3/1.jpg" alt="Hero Image" class="hero3-img">
        </div>
      </section>
    </div>
</template>
<script>
  
</script>

<style scoped>
.title-main{
  font-weight: 100;
  font-size: 50px;
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
  margin-left: 450px;
}
@media only screen and (max-width: 768px) {
 
}

.hero-btn button{
 margin-top: 20px;
 cursor: pointer !important;
 border-radius: 18px;
 width: 120px;
}
.hero-btn button:hover{
  background-color: black;
  color: white;
}
.hero__text-3 {
  max-width: 320px;
  padding-top: 0;

}
.wrapper{
  display: none;
}
</style>
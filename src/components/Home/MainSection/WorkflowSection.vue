<template>
    <div>
      <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <section class="workflow__area-3">
        <div class="workflow__wrapper-3">
          <div class="choose-wrapper wf_panel">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div class="choose-title-wrapper">
                    <h2 class="choose-title title-anim">why <br> choose us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="research__area wf_panel pt-150">
            <div class="container inner_content">
              <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="sec-title-wrapper">
                    <h2 class="sec-sub-title">why <br>choose us</h2>
                    <h3 class="sec-title">Keword,Research Strategy, Survey, & Analytics</h3>
                    <p>Attention, we take out our round glasses and our sweater with elbow patches to go back to the
                      origins of the user experience: the first mention of the user and its importance was born in the
                    </p>
                  </div>
                  <ul class="research__tools">
                    <li><a href="#">Google</a></li>
                    <li><a href="#">pinterest</a></li>
                    <li><a href="#">Instagram</a></li>
                  </ul>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="research__list">
                    <div class="research__item">
                      <div class="research__number">
                        <span>60%</span>
                      </div>
                      <div class="research__info">
                        <h4 class="research__title">Strategy</h4>
                        <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                      </div>
                    </div>

                    <div class="research__item">
                      <div class="research__number">
                        <span>95%</span>
                      </div>
                      <div class="research__info">
                        <h4 class="research__title">Audience</h4>
                        <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                      </div>
                    </div>

                    <div class="research__item">
                      <div class="research__number">
                        <span>70%</span>
                      </div>
                      <div class="research__info">
                        <h4 class="research__title">Keyword</h4>
                        <p>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="counter__area-3 wf_panel">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div class="sec-title-wrapper">
                    <h2 class="sec-sub-title">Why <br>Choose Us</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div class="counter__wrapper-3">
                    <div class="counter__item-3">
                      <h2 class="counter__number">25k</h2>
                      <p>Project <br>completed</p>
                    </div>
                    <div class="counter__item-3">
                      <h2 class="counter__number">8k</h2>
                      <p>Happy <br>customers</p>
                    </div>
                    <div class="counter__item-3">
                      <h2 class="counter__number">15</h2>
                      <p>Years <br>experiences</p>
                    </div>
                    <div class="counter__item-3">
                      <h2 class="counter__number">98</h2>
                      <p>Awards <br>achievement</p>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div class="counter__img-3">
                    <img src="@/assets/imgs/thumb/counter-3.png" alt="Counter Image">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA area start -->
          <div class="cta__area-3 wf_panel">
            <div class="container pt-150 pb-150">
              <div class="row">
                <div class="col-xxl-12">
                  <div class="cta__content-3">
                    <p class="cta__sub-title-2">Have you project in mind?</p>
                    <h2 class="cta__title-2">Let’s make something great together!</h2>
                    <div id="btn_wrapper">
                      <a href="contact.html" class="wc-btn-black btn-hover btn-item"><span></span>Contact <br>with
                        us <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- CTA area end -->

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
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { gsap } from 'gsap';

 export default {
  name: 'WorkflowSection',
  data () {
    return {
      
    }
  },
  mounted () {
    this.scrollWorkflowSection()
  },
  methods: {
    scrollWorkflowSection: function() { 
      // comon -> sidebar -> navigation timeline
      let device_width = window.innerWidth;
      if (device_width > 1200) {

    var workflow_section_3 = document.querySelector('.workflow__wrapper-3');
    if (workflow_section_3) {

  let duration = 1,
    sections = gsap.utils.toArray(".wf_panel"),
    sectionIncrement = duration / (sections.length - 1),
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".workflow__wrapper-3",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=5000"
      }
    });

  tl.to(sections, {
    xPercent: -100 * (sections.length - 1),
    duration: duration,
    ease: "none"
  });

  sections.forEach((section, index) => {
    let tween = gsap.from(section, {
      opacity: 0,
      scale: 0.6,
      duration: 0.5,
      force3D: true,
      paused: true
    });
    addSectionCallbacks(tl, {
      start: sectionIncrement * (index - 0.99),
      end: sectionIncrement * (index + 0.99),
      onEnter: () => tween.play(),
      onLeave: () => tween.reverse(),
      onEnterBack: () => tween.play(),
      onLeaveBack: () => tween.reverse()
    });
    index || tween.progress(1);
  });

  function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
    let trackDirection = animation => {
      let onUpdate = animation.eventCallback("onUpdate"),
        prevTime = animation.time();
      animation.direction = animation.reversed() ? -1 : 1;
      animation.eventCallback("onUpdate", () => {
        let time = animation.time();
        if (prevTime !== time) {
          animation.direction = time < prevTime ? -1 : 1;
          prevTime = time;
        }
        onUpdate && onUpdate.call(animation);
      });
    },
      empty = v => v;
    timeline.direction || trackDirection(timeline);
    start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
    end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
  }
}
}
    }
}
 }
</script>

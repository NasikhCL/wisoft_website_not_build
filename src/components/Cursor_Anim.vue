
<template>
    <div>
        <!-- <div class="cursor" id="cursor"></div>
        <div class="cursor2" id="cursor2"></div>
        <div class="cursor3" id="cursor3"></div> -->
          <!-- Cursor Animation -->
  <div class="cursor1"></div>
  <div class="cursor2"></div>
    </div>
</template>

<script>
    import $ from "jquery";
  import { gsap } from 'gsap';
  export default {
    name:'Cursor_Anim',
    mounted () {
        var client_cursor = document.getElementById("client_cursor");

// Team Page Team Cursor
var team_cursor = document.getElementById("team_cursor");

// Portfolio  Cursor
var portf_cursor_6 = document.getElementById("portf_cursor_6");

// Featured  Cursor
var featured_cursor = document.getElementById("featured_cursor");

var portfolio4_cursor = document.getElementById("portfolio4_cursor");

function mousemoveHandler(e) {
  try {
    const target = e.target;

    let tl = gsap.timeline({
      defaults: {
        x: e.clientX,
        y: e.clientY,
      }
    })
    let t2 = gsap.timeline({
      defaults: {
        x: e.clientX,
        y: e.clientY,
      }
    })

    // Home Page Client Cursor
    if (target.closest(".testimonial__img")) {
      tl.to(client_cursor, {
        opacity: 1,
        ease: "power4.out"
      }, "-=0.3");
    }
    else {
      t2.to(client_cursor, {
        opacity: 0,
        ease: "power4.out"
      }, "-=0.3");
    }

    // Team Page Team Cursor
    if (target.closest(".team__slider")) {
      tl.to(team_cursor, {
        opacity: 1,
        ease: "power4.out"
      }, "-=0.3");
    }
    else {
      t2.to(team_cursor, {
        opacity: 0,
        ease: "power4.out"
      }, "-=0.3");
    }

    // Portfolio Cursor
    if (target.closest(".portfolio__item-6")) {
      tl.to(portf_cursor_6, {
        opacity: 1,
        ease: "power4.out"
      }, "-=0.3");
    }
    else {
      t2.to(portf_cursor_6, {
        opacity: 0,
        ease: "power4.out"
      }, "-=0.3");
    }
    // Portfolio Cursor
    if (target.closest(".portfolio__item-6")) {
      tl.to(portf_cursor_6, {
        opacity: 1,
        ease: "power4.out"
      }, "-=0.3");
    }
    else {
      t2.to(portf_cursor_6, {
        opacity: 0,
        ease: "power4.out"
      }, "-=0.3");
    }

    // featured  Cursor
    if (target.closest(".portfolio__slider-3")) {
      tl.to(featured_cursor, {
        opacity: 1,
        ease: "power4.out"
      }, "-=0.3");
    }
    else {
      t2.to(featured_cursor, {
        opacity: 0,
        ease: "power4.out"
      }, "-=0.3");
    }

    // featured  Cursor
    if (target.closest(".portfolio__area-5")) {
      tl.to(portfolio4_cursor, {
        opacity: 1,
        ease: "power4.out"
      }, "-=0.3");
    }
    else {
      t2.to(portfolio4_cursor, {
        opacity: 0,
        ease: "power4.out"
      }, "-=0.3");
    }

    // Main Cursor Moving 
    tl.to(".cursor1", {
      ease: "power2.out"
    })
      .to(".cursor2", {
        ease: "power2.out"
      }, "-=0.4")

  } catch (error) {
    console.log(error)
  }

}
document.addEventListener("mousemove", mousemoveHandler);
    }
  }
</script>


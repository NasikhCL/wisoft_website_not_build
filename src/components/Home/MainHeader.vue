<template>
  <div>
    <cursor_anim></cursor_anim>

    <!-- Header area start -->
    <header class="header__area-3">
      <div class="header__inner-3">
        <div class="header__logo-2">
          <a href="" class="logo-dark"
            ><img
              src="@/assets/imgs/logo/wisoft-logo1.png"
              alt="Site Logo"
              style="width: 100%; height: 60px"
          /></a>
          <a href="" class="logo-light"
            ><img
              src="@/assets/imgs/logo/wisoft-logo1.png"
              alt="Site Logo"
              style="width: 100%; height: 60px"
          /></a>
        </div>
        <div class="header__nav-2">
          <ul class="main-menu-3 menu-anim list-menu">
            <!-- <li>
            <a><router-link to="/">HOME</router-link></a>
          </li>
          <li>
            <a> <router-link to="/About">ABOUT</router-link></a>
          </li>
          <li>
            <a><router-link to="/Pages">PAGES</router-link></a>
          </li>
          <li>
            <a><router-link to="/Services">SERVICES</router-link></a>
          </li>
          <li>
            <a><router-link to="/Team">TEAM</router-link></a>
          </li>
          <li>
            <a><router-link to="/Blog">BLOG</router-link></a>
          </li>
          <li>
            <a><router-link to="/Contact">CONTACT</router-link></a>
          </li> -->
            <li><button>Let's Talk</button></li>
            <li><i class="fa-solid fa-phone"> </i> (00000000)</li>
          </ul>
        </div>
        <div class="header__nav-icon-3">
          <button class="search-icon" id="search_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <h6 class="menu-top">Menu</h6>
          <button class="search-icon" id="search_close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <button id="open_offcanvas">
            <img src="@/assets/imgs/icon/menu-black.png" alt="Menubar Icon" />
          </button>
        </div>
      </div>
    </header>

    <div class="header__search">
      <form action="#">
        <input type="text" name="s" id="s" placeholder="Search.." />
      </form>
    </div>
    <!-- Header area end -->

    <div class="offcanvas__area">
      <div class="mob">
          <ul role="menu" class="men">
            <li class="men-li" role="none">
              <a href="https://www.digitalnexa.com/about-us" role="menuitem"
                >Home</a
              >
            </li>
            <li class="men-li" role="none">
              <a href="https://www.digitalnexa.com/about-us" role="menuitem"
                >About</a
              >
            </li>
            <li class="men-li" role="none">
              <a href="https://www.digitalnexa.com/about-us" role="menuitem"
                >Contact</a
              >
            </li>
            <li class="men-li" role="none">
              <a href="https://www.digitalnexa.com/about-us" role="menuitem"
                >Blog</a
              >
            </li>
          </ul>

          <div class="toggler-menu">
            <ul>
              <li>
                <div class="to-wrapper">
                  <a href="">Digital Marketing Services</a>
                  <button class="to-bu" @click="handleClick(1)">{{activesub==1?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 1">
                  <li><a href="">Service 1</a></li>
                  <li><a href="">Service 2</a></li>
                  <li><a href="">Service 2</a></li>
                </ul>
                </li>
              <li>
                <div class="to-wrapper">
                  <a href="">Web Development Services</a>
                  <button class="to-bu" @click="handleClick(2)">{{activesub==2?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 2">
                  <li><a href="">Service 1</a></li>
                  <li><a href="">Service 2</a></li>
                  <li><a href="">Service 2</a></li>
                </ul>
                </li>
                <li>
                <div class="to-wrapper">
                  <a href="">Web Development Services</a>
                  <button class="to-bu" @click="handleClick(2)">{{activesub==2?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 2">
                  <li><a href="">Service 1</a></li>
                  <li><a href="">Service 2</a></li>
                  <li><a href="">Service 2</a></li>
                </ul>
                </li>
                <li>
                <div class="to-wrapper">
                  <a href="">Web Development Services</a>
                  <button class="to-bu" @click="handleClick(2)">{{activesub==2?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 2">
                  <li><a href="">Service 1</a></li>
                  <li><a href="">Service 2</a></li>
                  <li><a href="">Service 2</a></li>
                </ul>
                </li>
                <li>
                <div class="to-wrapper">
                  <a href="">Web Development Services</a>
                  <button class="to-bu" @click="handleClick(2)">{{activesub==2?"-":"+"}}</button>
                </div>
                <ul class="cj" v-if="activesub == 2">
                  <li><a href="">Service 1</a></li>
                  <li><a href="">Service 2</a></li>
                  <li><a href="">Service 2</a></li>
                </ul>
                </li>
            </ul>
          </div>
        </div>
      <div class="offcanvas__body body-canvas">
       

        <div class="offcanvas__left v">
          <div class="offcanvas__logo">
            <a href="index.html"
              ><img
                src="@/assets/imgs/logo/wisoft-logo1.png"
                alt="Offcanvas Logo"
                style="width: 90%; height: 50px"
            /></a>
          </div>

          <div class="offcanvas__links side-links">
            <ul>
              <li>
                <a><router-link to="/About">About</router-link></a>
              </li>
              <li>
                <a><router-link to="/Contact">Contact</router-link></a>
              </li>
              <li><a href="career.html">Career</a></li>
              <li>
                <a><router-link to="/Blog">Blog</router-link></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="offcanvas__mid v">
          <div class="offcanvas__menu-wrapper">
            <nav class="offcanvas__menu">
              <ul class="menu-anim list-class">
                <div>
                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>

                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>
                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>
                </div>
                <div>
                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>

                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>
                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>
                </div>
                <div>
                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>

                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                      <li><a>Digital Agency dark</a></li>
                    </ul>
                  </li>
                  <li class="head-list">
                    Digital Marketing Service
                    <ul>
                      <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                      <li><a>Digital Maketing dark</a></li>
                      <li><a>Design Studio</a></li>
                      <li><a>Design Studio dark</a></li>
                      <li><a>Digital Agency</a></li>
                    </ul>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>

        <div class="offcanvas__close">
          <button type="button" id="close_offcanvas">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <!-- <floating-whatsapp></floating-whatsapp> -->
    </div>
  </div>
</template>

<script>
import Cursor_Anim from "../Cursor_Anim.vue";
import FloatingWhatsapp from "../Home/FloatingWhatsapp.vue";
import $ from "jquery";
export default {
  name: "MainHeader",
  components: {
    FloatingWhatsapp,
    // FloatingChat,
    Cursor_Anim,
  },
  data() {
    return {
      activesub:""
    };
  },
  mounted() {
    this.offcanvas();
  },
  methods: {
    offcanvas: function () {
      $("#open_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "1");
        $(".offcanvas__area").css("visibility", "visible");
      });
      $("#close_offcanvas").click(function () {
        $(".offcanvas__area").css("opacity", "0");
        $(".offcanvas__area").css("visibility", "hidden");
      });
      // search icon js
      let header_search = document.querySelector(".header__search");
      let search_icon = document.querySelector("#search_icon");
      let search_close = document.querySelector("#search_close");
      if (header_search) {
        search_icon.addEventListener("click", function () {
          header_search.classList.add("open-search");
          search_icon.style.display = "none";
          search_close.style.display = "block";
        });
        search_close.addEventListener("click", function () {
          header_search.classList.remove("open-search");
          search_icon.style.display = "block";
          search_close.style.display = "none";
        });
      }
    },

    handleClick:function(ac){
      if(this.activesub == ac){
        this.activesub="";
      }else{
        this.activesub = ac;
      }
      
    }
  },
};
</script>
<style scoped>
/* navbar main page */
.list-menu {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
}
.menu-top {
  margin: 10px;
}
.list-class {
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  /* row-gap: 20px; */
}
.list-class ul li {
  /* padding: 2rem; */
  color: rgb(140, 129, 129);
  margin: 12px;
}
.list-class div {
  padding: 2rem;
  border-right: 1px solid rgb(53, 51, 51);
}
.list-menu button {
  border: 1px solid black;
  width: 120px;
  border-radius: 30px;
  padding: 3px;
}
.list-menu button:hover {
  background-color: black;
  color: antiquewhite;
}
.list-menu li {
  margin: 0px;
  padding: 0 15px !important;
}
/* hambourger */
.head-list {
  color: yellow;
}
.side-links {
  margin-top: 120px !important;
}
.side-links li {
  font-weight: 500;
}
.offcanvas__mid {
  overflow: scroll;
}
.body-canvas {
  grid-template-columns: 0.8fr 3fr;
}
.v {
  display: none;
}

/*  */
@media screen and (min-width: 960px) {
  .v {
    display: block;
  }
  .mob {
    display: none;
  }
}
.men {
  padding: 20px;
  color: yellow;
  font-size: 23px;
  margin-top: 40px;
}
.men-li a {
  color: yellow;
}
.toggler-menu {
  margin-top: 20px;
  padding: 10px;
 
}
.to-wrapper{
  display: flex;
  justify-content: space-between;
  padding:5px 23px;
  
}
.to-wrapper a{
  color: white;
  font-size: 28px;
}
.to-wrapper button{
  color: white;
  font-size: 34px;
}
.cj{
  padding: 0px 25px;

}
.cj li{
  margin: 5px 0px;
  
}
.cj li a{
  color: #fff;
  font-size: 22px;
  transition: all .3s ease;
}
.cj li a:hover{
  margin-left: 4px;
}
</style>

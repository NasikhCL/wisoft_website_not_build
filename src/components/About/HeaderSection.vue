<template>
    <div>
        <header class="header__area">
            <div class="header__inner">
            <div class="header__logo">
                <router-link to="/">
                <img class="logo-primary" src="@/assets/imgs/logo/site-logo-white.png" alt="Site Logo">
                <img class="logo-secondary" src="@/assets/imgs/logo/site-logo-white-2.png" alt="Moibile Logo">
                </router-link>
            </div>
            <div class="header__nav-icon">
                <button  id="open_offcanvas"><img src="@/assets/imgs/icon/menu-white.png" alt="Menubar Icon"></button>
            </div>
            <div class="header__support">
                <p>Support center <a href="tel:+9587325902">+9 587 325 902</a></p>
            </div>
            </div>
        </header>
        <!-- Header section Ends -->

   <!-- Offcanvas area start -->
   <div class="offcanvas__area">
    <div class="offcanvas__body">
      <div class="offcanvas__left">
        <div class="offcanvas__logo">
          <a href="index.html"><img src="@/assets/imgs/logo/wisoft-logo1.png" alt="Offcanvas Logo" style="width:90% ; height:50px"></a>
        </div>
        <!-- <div class="offcanvas__social">
          <h3 class="social-title">Follow Us</h3>
          <ul> -->
            <!-- <li><a href="#">Dribbble</a></li> -->
            <!-- <li><a href="#">Behance</a></li> -->
            <!-- <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div> -->
        <div class="offcanvas__links" style="margin-top:150px;">
          <ul>
            <li><a><router-link to="/About">About</router-link></a></li>
            <li><a><router-link to="/Contact">Contact</router-link></a></li>
            <li><a href="career.html">Career</a></li>
            <li><a><router-link to="/Blog">Blog</router-link></a></li>
          </ul>
        </div>
      </div>
      <div class="offcanvas__mid">
        <div class="offcanvas__menu-wrapper">
          <nav class="offcanvas__menu" >
           
            <ul class="menu-anim" style="padding-left:10px; margin-top: 100px; display:flex; justify-content:space-around; flex-wrap: wrap;padding:0; list-style-type: none; ">
              <!-- <ul class="menu-anim" style="display:flex; justify-content: space-between; flex-wrap: wrap;"> -->
              <div  style="border-right: 0.5px solid grey; padding-right:20px ;">
                <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
              
              <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
              <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
             
              </div>
              <div style="border-right: 0.2px solid grey; padding-right:20px ;">
                <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
              
              <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
              <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
             
              </div>
              <div>
                <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
              
              <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
              <li>Digital Marketing Service
                <ul style="padding:0; list-style-type: none; ">
                  <!-- <li><a href="index.html">Digital Maketing</a></li> -->
                  <li><a>Digital Maketing dark</a></li>
                  <li><a>Design Studio</a> </li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                  <li><a>Design Studio dark</a></li>
                  <li><a>Digital Agency</a></li>
                  <li><a>Digital Agency dark</a></li>
                </ul>
              </li>
             
              </div>
            </ul>
          </nav>
        </div>
      </div>

            <!-- close button -->
            <div class="offcanvas__close">
                <button type="button" id="close_offcanvas"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <floating-whatsapp></floating-whatsapp>
            </div>
        </div>
  <!-- offcancas area ends -->
    </div>
</template>


<script>
import FloatingWhatsapp from '../Home/FloatingWhatsapp.vue'
import $ from "jquery";
export default {
    name : 'HeaderSection',
    components: {
  FloatingWhatsapp,
  // FloatingChat,
 },
    mounted (){
  this.offcanvas()
 },
 methods: {
  offcanvas: function(){
    $("#open_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '1');
    $('.offcanvas__area').css('visibility', 'visible');
  });
  $("#close_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '0');
    $('.offcanvas__area').css('visibility', 'hidden');
  });
  // search icon js

  let header_search = document.querySelector(".header__search");
  let search_icon = document.querySelector("#search_icon");
  let search_close = document.querySelector("#search_close");
  if (header_search) {
    search_icon.addEventListener("click", function () {
      header_search.classList.add('open-search');
      search_icon.style.display = 'none';
      search_close.style.display = 'block';
    });

    search_close.addEventListener("click", function () {
      header_search.classList.remove('open-search');
      search_icon.style.display = 'block';
      search_close.style.display = 'none';
    });
  }
  },
}
}
</script>

<style scoped>
 .list-menu {
   display: flex;
   flex-direction: row-reverse;
   margin-top: 10px;
   
}
.menu-top{
  margin: 10px;
}
.list-menu button{
  border: 1px solid black;
  width:120px;
  border-radius: 30px;
  padding: 3px;
}
.list-menu button:hover{
  background-color: black;
  color: antiquewhite;
}
.list-menu li{
  margin: 0px;
  padding: 0 15px !important;
}
 /* hambourger */

 .offcanvas__menu{
  margin: 30px;
  margin-left: 0;
 }
 .offcanvas__menu ul li {
  color: yellow;
 }
 .offcanvas__menu ul li a {
  color: grey;
 }
 .offcanvas__menu ul li a:hover {
  color: white;
 }

 .menu-anim li{
  /* margin: 20px; */
  margin: 10px 0 10px 0;
 }
 .offcanvas__mid{
  /* overflow-y: hidden; */
 }
 .offcanvas__links li a{
  font-size: 40px;
 }
</style>

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

        <!-- offcanvas section starts -->
        <div class="offcanvas__area">
            <div class="offcanvas__body">
            <div class="offcanvas__left">
                <div class="offcanvas__logo">
                <router-link to="/Home">Home<img src="@/assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo"></router-link>
                </div>
                <div class="offcanvas__social">
                <h3 class="social-title">Follow Us</h3>
                <ul>
                    <li><a href="#">Dribbble</a></li>
                    <li><a href="#">Behance</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
                </div>
                <div class="offcanvas__links">
                <ul>
<<<<<<< HEAD
                    <!-- <router-link to="/Home">Home</router-link> -->
=======
                    <router-link to="/Home">Home</router-link>
>>>>>>> 55b764452ffa1c547ad57eae93ce3535f79218bc
                    <li><a href="contact.html">contact</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="blog.html">blog</a></li>
                </ul>
                </div>
            </div>
            <div class="offcanvas__mid">
                <div class="offcanvas__menu-wrapper">
                <nav class="offcanvas__menu">
                    <ul class="menu-anim">
                    <li><a><router-link to="/">Home</router-link></a></li>
                    <li><router-link to="/About">About</router-link></li>
                    <li> <router-link to="/Pages">Pages</router-link></li>
                    <li><router-link to="/Services">Services</router-link></li>
                    <li><router-link to="/Team">Team</router-link></li>
                    <li><router-link to="/Blog">Blog</router-link></li>
                    <li><router-link to="/Contact">Contact</router-link></li>
                    <li><router-link to="/Contact">Other</router-link></li>
                    <li><router-link to="/Contact">Contact</router-link></li>
                    </ul>
                </nav>
                </div>
            </div>
            <div class="offcanvas__right">
                <div class="offcanvas__search">
                <form action="#">
                    <input type="text" name="search" placeholder="Search keyword">
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                </div>
                <div class="offcanvas__contact">
                <h3>Get in touch</h3>
                <ul>
                    <li><a href="tel:02094980547">+(02) - 094 980 547</a></li>
                    <li><a href="mailto:info@extradesign.com">info@extradesign.com</a></li>
                    <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
                </ul>
                </div>
                <img src="@/assets/imgs/shape/11.png" alt="shape" class="shape-1">
                <img src="@/assets/imgs/shape/12.png" alt="shape" class="shape-2">
            </div>
            <div class="offcanvas__close">
                <button type="button" id="close_offcanvas"><i class="fa-solid fa-xmark"></i></button>
            </div>
            </div>
        </div>
  <!-- offcancas area ends -->
    </div>
</template>


<script>
export default {
    name : 'HeaderSection',
   
}
</script>
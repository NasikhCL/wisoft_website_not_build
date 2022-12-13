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
                    <router-link to="/Home">Home</router-link>
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
                    <li><a>home</a>
                        <ul>
                        <li><a href="index.html">Digital Maketing</a></li>
                        <li><a href="index-dark.html">Digital Maketing dark</a></li>
                        <li><a href="index-2.html">Design Studio </a></li>
                        <li><a href="index-2-dark.html">Design Studio dark</a></li>
                        <li><a href="index-3.html">Digital Agency</a></li>
                        <li><a href="index-3-dark.html">Digital Agency dark</a></li>
                        <li><a href="index-4.html">personal Portfolio</a></li>
                        <li><a href="index-4-dark.html">personal Portfolio dark</a></li>
                        <li><a href="index-5.html">portfolio showcase</a></li>
                        <li><a href="index-5-dark.html">portfolio showcase dark</a></li>
                        <li><a href="index-6.html">Startup Agency</a></li>
                        <li><a href="index-6-dark.html">Startup Agency dark</a></li>
                        <li><a href="index-7.html">creative Agency</a></li>
                        <li><a href="index-7-dark.html">creative Agency dark</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">about</a></li>
                    <li>
                        <a>Service</a>
                        <ul>
                        <li><a href="service.html">service</a></li>
                        <li><a href="service-dark.html">service dark</a></li>
                        <li><a href="service-2.html">service V.2</a></li>
                        <li><a href="service-2-dark.html">service V.2 dark</a></li>
                        <li><a href="service-3.html">service V.3</a></li>
                        <li><a href="service-3-dark.html">service V.3 dark</a></li>
                        <li><a href="service-4.html">service V.4</a></li>
                        <li><a href="service-4-dark.html">service V.4 dark</a></li>
                        <li><a href="service-5.html">service V.5</a></li>
                        <li><a href="service-5-dark.html">service V.5 dark</a></li>
                        <li><a href="service-6.html">service V.6</a></li>
                        <li><a href="service-6-dark.html">service V.6 dark</a></li>
                        <li><a href="service-details.html">service details</a></li>
                        <li><a href="service-details-dark.html">service details dark</a></li>
                        </ul>
                    </li>
                    <li><a>pages</a>
                        <ul>
                        <li>
                            <a>Home</a>
                            <ul>
                            <li><a href="index.html">Digital Maketing</a></li>
                            <li><a href="index-dark.html">Digital Maketing dark</a></li>
                            <li><a href="index-2.html">Design Studio </a></li>
                            <li><a href="index-2-dark.html">Design Studio dark</a></li>
                            <li><a href="index-3.html">Digital Agency</a></li>
                            <li><a href="index-3-dark.html">Digital Agency dark</a></li>
                            <li><a href="index-4.html">personal Portfolio</a></li>
                            <li><a href="index-4-dark.html">personal Portfolio dark</a></li>
                            <li><a href="index-5.html">portfolio showcase</a></li>
                            <li><a href="index-5-dark.html">portfolio showcase dark</a></li>
                            <li><a href="index-6.html">Startup Agency</a></li>
                            <li><a href="index-6-dark.html">Startup Agency dark</a></li>
                            <li><a href="index-7.html">creative Agency</a></li>
                            <li><a href="index-7-dark.html">creative Agency dark</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Service</a>
                            <ul>
                            <li><a href="service.html">service</a></li>
                            <li><a href="service-dark.html">service dark</a></li>
                            <li><a href="service-2.html">service V.2</a></li>
                            <li><a href="service-2-dark.html">service V.2 dark</a></li>
                            <li><a href="service-3.html">service V.3</a></li>
                            <li><a href="service-3-dark.html">service V.3 dark</a></li>
                            <li><a href="service-4.html">service V.4</a></li>
                            <li><a href="service-4-dark.html">service V.4 dark</a></li>
                            <li><a href="service-5.html">service V.5</a></li>
                            <li><a href="service-5-dark.html">service V.5 dark</a></li>
                            <li><a href="service-6.html">service V.6</a></li>
                            <li><a href="service-6-dark.html">service V.6 dark</a></li>
                            <li><a href="service-details.html">service details</a></li>
                            <li><a href="service-details-dark.html">service details dark</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>portfolio</a>
                            <ul>
                            <li><a href="portfolio.html">portfolio</a></li>
                            <li><a href="portfolio-dark.html">portfolio dark</a></li>
                            <li><a href="portfolio-2.html">portfolio v.2</a></li>
                            <li><a href="portfolio-2-dark.html">portfolio v.2 dark</a></li>
                            <li><a href="portfolio-3.html">portfolio v.3</a></li>
                            <li><a href="portfolio-3-dark.html">portfolio v.3 dark</a></li>
                            <li><a href="portfolio-4.html">portfolio v.4</a></li>
                            <li><a href="portfolio-4-dark.html">portfolio v.4 dark</a></li>
                            <li><a href="portfolio-5.html">portfolio v.5</a></li>
                            <li><a href="portfolio-5-dark.html">portfolio v.5 dark</a></li>
                            <li><a href="portfolio-details.html">portfolio details</a></li>
                            <li><a href="portfolio-details-dark.html">portfolio details dark</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>team</a>
                            <ul>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-dark.html">Team dark</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="team-details-dark.html">Team Details dark</a></li>
                            <li><a href="career.html">career</a></li>
                            <li><a href="career-dark.html">career dark</a></li>
                            <li><a href="job-details.html">job details</a></li>
                            <li><a href="job-details-dark.html">job details dark</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>blog</a>
                            <ul>
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="blog-dark.html">blog dark</a></li>
                            <li><a href="blog-2.html">blog v.2</a></li>
                            <li><a href="blog-2-dark.html">blog v.2 dark</a></li>
                            <li><a href="category.html">category</a></li>
                            <li><a href="category-dark.html">category dark</a></li>
                            <li><a href="blog-details.html">blog details</a></li>
                            <li><a href="blog-details-dark.html">blog details dark</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Others</a>
                            <ul>
                            <li><a href="faq.html">FAQs</a></li>
                            <li><a href="faq-dark.html">FAQs dark</a></li>
                            <li><a href="contact.html">contact</a></li>
                            <li><a href="contact-dark.html">contact dark</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="404-dark.html">404 dark</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li><a>blog</a>
                        <ul>
                        <li><a href="blog.html">blog</a></li>
                        <li><a href="blog-dark.html">blog dark</a></li>
                        <li><a href="blog-2.html">blog v.2</a></li>
                        <li><a href="blog-2-dark.html">blog v.2 dark</a></li>
                        <li><a href="category.html">category</a></li>
                        <li><a href="category-dark.html">category dark</a></li>
                        <li><a href="blog-details.html">blog details</a></li>
                        <li><a href="blog-details-dark.html">blog details dark</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">contact</a></li>
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
    methods : {
        toggle(){
            <router-link to="/"></router-link>
        }
    }
}
</script>
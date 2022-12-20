<template>
    <div>
    <!-- Header area start -->
  <header class="header__area-3">
    <div class="header__inner-3">
      <div class="header__logo-2">
        <a href="" class="logo-dark"><img src="@/assets/imgs/logo/logo-black.png" alt="Site Logo"></a>
        <a href="" class="logo-light"><img src="@/assets/imgs/logo/site-logo-white-2.png" alt="Site Logo"></a>
      </div>
      <div class="header__nav-2">
        <ul class="main-menu-3 menu-anim">
          <li>
            <a><router-link to="/">HOME</router-link></a>
          </li>
          <li>
            <router-link to="/About">ABOUT</router-link>
          </li>
          <li>
            <router-link to="/Pages">PAGES</router-link>
          </li>
          <li>
            <router-link to="/Services">SERVICES</router-link>
          </li>
          <li>
            <router-link to="/Team">TEAM</router-link>
          </li>
          <li>
            <router-link to="/Blog">BLOG</router-link>
          </li>
          <li><router-link to="/Contact">CONTACT</router-link></li>
        </ul>
      </div>
      <div class="header__nav-icon-3">
        <button class="search-icon" id="search_icon"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button class="search-icon" id="search_close"><i class="fa-solid fa-xmark"></i></button>
        <button id="open_offcanvas"><img src="@/assets/imgs/icon/menu-black.png" alt="Menubar Icon"></button>
      </div>
    </div>
  </header>
</div>
</template>


<script>

export default {
 
}
</script>
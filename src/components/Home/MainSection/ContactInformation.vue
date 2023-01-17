<template>
    <div>
        <div class="tabset">
  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked>
  <label for="tab1" class="head">UAE</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier">
  <label for="tab2" class="head">INDIA</label>
  <!-- Tab 3 -->
  <input type="radio" name="tabset" id="tab3" aria-controls="dunkles">
  <label for="tab3" class="head">USA</label>
  
  
  <div class="tab-panels">
    <section id="marzen" class="tab-panel">
      <!-- <h2>6A. Märzen</h2> -->
      <p><strong><i class="fa-brands fas fa-phone"></i> +971 43210710</strong></p>
      <p><strong><i class="fa-brands fas fa-envelope"></i>Contact@wisoftsolutions.com</strong></p>
      <p><strong><i class="fa-brands  fas fa-address-card"></i>P.O Box:237159, office M-38,<br>Curve Building, Sheikh Zayed Road, Dubai</strong></p>
  </section>
    <section id="rauchbier" class="tab-panel">
      <!-- <h2>6B. Rauchbier</h2> -->
      <p><strong><i class="fa-brands fas fa-phone"></i> +91 44 45092400</strong></p>
      <p><strong><i class="fa-brands fas fa-envelope"></i>Contact@wisoftsolutions.com</strong></p>
      <p><strong><i class="fa-brands  fas fa-address-card"></i>WISOFTDIGI SERVICES Pvt Ltd,<br>Cenotaph Road, Alwarpet, Chennai</strong></p>
    </section>
    <section id="dunkles" class="tab-panel">
        <p><strong><i class="fa-brands fas fa-phone"></i> +1.407.550.0301 x701</strong></p>
      <p><strong><i class="fa-brands fas fa-envelope"></i>Contact@wisoftsolutions.com</strong></p>
      <p><strong><i class="fa-brands  fas fa-address-card"></i>Wisoft Solution USA LLC<br>101 S Garland Avenue Ste108 Orlando</strong></p>
    </section>
  </div>
  
</div>

    </div>
</template>


<style scoped>
    /*
 CSS for the main interaction
*/
.tabset > input[type="radio"] {
  position: absolute;
  left: -200vw;
}


.tabset .tab-panel {
  display: none;
}

.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
  display: block;
}

/*
 Styling
*/
body {
  font: 16px/1.5em "Overpass", "Open Sans", "cursive";
  color: grey;
  font-weight: 300;
}

.tabset > label {
  position: relative;
  display: inline-block;
  padding: 15px 15px 25px;
  border: 1px solid transparent;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 600;
}

.tabset > label::after {
  content: "";
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 22px;
  height: 4px;
  background: #8d8d8d;
}

.tabset > label:hover,
.tabset > input:focus + label {
  color: #fff;
}

.tabset > label:hover::after,
.tabset > input:focus + label::after,
.tabset > input:checked + label::after {
  background: #fff;
}

.tabset > input:checked + label {
  border-color: #ccc;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
}

.tab-panel {
  padding: 30px 0;
  border-top: 1px solid #ccc;
}

/*
 Demo purposes only
*/
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  padding: 30px;
}

/* .tabset {
  max-width: 65em;
  margin-left:107px ;
} */
.tab-panels i{
    margin-right:10px;
}

.head{
    color:grey;
}

</style>
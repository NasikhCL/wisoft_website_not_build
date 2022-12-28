<template>
  <div>
      <!-- body section -->
      <section class="contact__area-6">
        <div class="container g-0 line pt-120 pb-110">
          <span class="line-3"></span>
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="sec-title-wrapper">
                <h2 class="sec-title-2 animation__char_come">Let’s get in touch</h2>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="contact__text">
                <p>Great! We're excited to hear from you and let's start
                  something special togerter. call us for any inquery.</p>
              </div>
            </div>
          </div>
          <div class="row contact__btm">
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div class="contact__info">
                <h3 class="sub-title-anim-top animation__word_come">Don't be afraid man ! <br>say hello</h3>
                <ul>
                  <li><a href="tel:+(2)578365379">+(2) 578 - 365 - 379</a></li>
                  <li><a href="mailto:hello@example.com">hello@example.com</a></li>
                  <li><span>230 Norman Street New York, <br> QC (USA) H8R 1A1</span></li>
                </ul>
              </div>
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div class="contact__form">
                <form @submit.prevent="getPost" method="post">
                  <div class="row g-3">
                    <div class="col-xxl-6 col-xl-6 col-12">
                      <input type="text" id="name" placeholder="Name *" v-model="formData.name">
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-12">
                      <input type="email" id="email" placeholder="Email *" v-model="formData.email">
                    </div>
                  </div>
                  <div class="row g-3">
                    <div class="col-xxl-6 col-xl-6 col-12">
                      <input type="tel" id="phone" placeholder="Phone" v-model="formData.phone">
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-12">
                      <input type="text" id="subject" placeholder="Subject *" v-model="formData.subject">
                    </div>
                  </div>
                  <div class="row g-3">
                    <div class="col-12">
                      <textarea id="message" placeholder="Messages *" v-model="formData.message"></textarea>
                    </div>
                  </div>
                  <div class="row g-3">
                    <div class="col-12">
                      <div id="btn_wrapper">
                        <button class="wc-btn-primary btn-hover btn-item" @click="getData"><span></span> Send <br>Messages <i
                            class="fa-solid fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
name : 'MainSection',
data(){
  return{
    formData :{
              name : '',
              email : '',
              phone : '',
              subject : '',
              message : '',
              errorMSg :'',
          }
  }
},
methods : {
    getData(){
      axios.post('http://localhost:3000/users',
      {
        name : this.formData.name,
        email : this.formData.email,
        phone:this.formData.phone,
        subject : this.formData.subject,
        message : this.formData.message
      }
      )
      .then((response)=>{
          console.log(response.data)
      }).catch((error)=>{
          console.log(error)
          this.errorMSg = 'Error retriving data...'
      })
  }
    }
    }
//  }
</script>
<template>
<section class="section">
      <div class="container">
            <div class="columns is-centered">
                  <div class="column is-half">
                               <div class="nes-field">
    <label class="is-family-2P has-text-white is-size-3" for="name_field">Your name here:</label>
    <input v-model="username" type="text" id="name_field" class="nes-input is-family-2P mt-5" />
    <a class="nes-btn mt-6 is-family-2P" @click="submitUsername">Enter!</a>
  </div>
                  </div>
            </div>
      </div>
</section>
 
</template>

<script>
export default {
      name:'InputName',
      data: () => {
            return{
                  username:''
            }
      },
      methods:{
            submitUsername(){
                  const payload = this.username
            this.$emit('submit-username',payload)
            }
      }
}
</script>
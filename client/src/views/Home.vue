<template>
  <div class="bg-img">
    <form @submit.prevent="login" class="d-flex justify-content-center mt-3">
      <!-- <div class="input-group" style="width: 500px">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-describedby="addon-wrapping"
          v-model="username"
        />
      </div> -->
      <InputName @submit-username="login"/>
    </form>
  </div>
</template>

<script>
// import socket from '../config/socket'
import InputName from '@/components/InputName.vue'
export default {
  data() {
    return {
      // username: "",
    };
  },
  components:{
    InputName
  },
  methods: {
    login(payload) {
      console.log(payload)
      this.$store.commit("login", payload);
      // localStorage.setItem('username', this.username)
      this.$router.push({ name: "Room" });
      // socket.emit('login', this.username)
    },
  },
};
</script>

<style scoped>
/* 
.has-background-pub{
  background-image: url(../../src/assets/background.jpg);
  background-size: cover;
} */
.bg-img { 
      height:100vh;
  background-image: url(../../src/assets/background.jpg);
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  /* background-color: #999; */
}

.bg-img:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(0,0,0,.4);
}
</style>

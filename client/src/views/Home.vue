<template>
  <div class="login">
    <form @submit.prevent="login" class="d-flex justify-content-center mt-3">
      <div class="input-group " style="width: 500px">
        <input type="text" class="form-control" placeholder="Username" aria-describedby="addon-wrapping" v-model="username">
      </div>
    </form>
  </div>
</template>

<script>
// import socket from '../config/socket'
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      this.$store.commit('login', this.username)
      // localStorage.setItem('username', this.username)
      this.$router.push({ name: 'Room' })
      // socket.emit('login', this.username)
      this.username = ''
    }
  }
}
</script>

<style>

</style>

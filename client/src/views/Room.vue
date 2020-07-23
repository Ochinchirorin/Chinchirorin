<template>
  <div>
      <button class="btn btn-warning" @click="logout">Logout</button>
      <div>
          <h1>Rooms</h1>
          <form @submit.prevent="createRoom">
              <input type="text" v-model="roomName" placeholder="create room">
          </form>
      </div>
      <div v-if="rooms.length != 0">
        <div class="room-card" v-for="(room,index) in rooms" :key="index">
            <p>{{room.name}}</p>
            <button class="btn btn-primary" @click="joinRoom(room.name)"> Join</button>
        </div>
      </div>
      <div v-else>
        <p>No room available, create a room</p>
      </div>
  </div>
</template>

<script>
import socket from '../config/socket'
export default {
  name: 'Room',
  data () {
    return {
      rooms: [],
      roomName: ''
    }
  },
  methods: {
    joinRoom (name) {
      // const payload = {
      //   'room-name': name,
      //   username: localStorage.username
      // }
      // socket.emit('join-room', payload)
      this.$store.commit('joinRoom', {
        'room-name': name,
        username: localStorage.username
      })
      this.$router.push(`/lobby/${name}`)
    },
    createRoom () {
      // const payload = {
      //   'room-name': this.roomName,
      //   admin: localStorage.username
      // }
      // socket.emit('create-room', payload)
      this.$store.commit('createRoom', {
        'room-name': this.roomName,
        admin: localStorage.username
      })
      this.roomName = ''
      // console.log(this.rooms)
    },
    logout () {
      this.$store.commit('logout')
      // localStorage.clear()
      this.$router.push({ name: 'Home' })
    }
  },
  created () {
    socket.on('list-rooms', data => {
      this.rooms = data
    })
    socket.on('updated-room', data => {
      this.rooms = data
    })
  }
}
</script>

<style>

</style>

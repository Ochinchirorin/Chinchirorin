<template>
  <div>
    <button class="button nes-btn is-warning is-family-2P" @click="logout">Logout</button>
    <div>
      <h1 class="is-size-3 mt-5 is-family-2P">Lobby</h1>
      <p v-if="room.users.length < 2" class="is-size-4 is-family-2P">Waiting players...</p>
      <div v-if="room.admin == adminName">
        <button v-if="room.users.length === 2" class="button nes-btn is-primary mb-5 is-family-2P" @click="start">Start</button>
      </div>
      <div>
        <div v-for="(user, index) in room.users" :key="index">
          <h3 class="nes-container mb-4 is-rounded is-size-4 is-family-2P">{{ user }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socket from "../config/socket";
export default {
  name: "Lobby",
  data() {
    return {
      room: {}, //{ name: 'room 2', users: [ 'Arnold', 'Iam' ], admin: 'Arnold' }
      adminName: "",
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      // localStorage.clear();
      this.$router.push({ name: "Home" });
    },
    start() {
      this.$store.dispatch('roomData',this.room)
      this.$store.commit("start", this.room);
      // socket.emit('start-game', this.room.name)
      this.$router.push(`/rolls/${this.room.name}`); // push ke router game kita beserta name roomnya
    },
  },
  created() {
    socket.on("room-detail", (data) => {
      this.room = data;
    });
    this.adminName = localStorage.username;
    socket.on("start-game", (data) => {
      this.$store.dispatch('roomData',data)
      this.$router.push(`/rolls/${data.name}`); // push ke router game kita beserta name room
    });

    socket.on("errorFull", (data) => {
      this.$router.push("/room");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Room full",
      });
    });
  },
};
</script>

<style>
</style>

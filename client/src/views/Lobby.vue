<template>
  <div>
    <button class="btn btn-warning" @click="logout">Logout</button>
    <div>
      <h1>Lobby</h1>
      <p>Waiting players</p>
      <div v-if="room.admin == adminName">
        <button class="btn btn-danger" @click="start">Start</button>
      </div>
      <div>
        <div v-for="(user, index) in room.users" :key="index">
          <h3>{{ user }}</h3>
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
      room: {},
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
      this.$store.commit("start", this.room.name);
      // socket.emit('start-game', this.room.name)
      this.$router.push(`/rolls/${this.room.name}`); // push ke router game kita beserta name roomnya
    },
  },
  created() {
    socket.on("room-detail", (data) => {
      this.room = data;
    });
    this.adminName = localStorage.username;
    socket.on("start-game", () => {
      this.$router.push(`/rolls/${this.room.name}`); // push ke router game kita beserta name room
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

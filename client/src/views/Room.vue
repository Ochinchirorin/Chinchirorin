<template>
  <div>
    <!-- <DiceRoll /> -->
    <button class="button nes-btn is-warning is-family-2P" @click="logout">Logout</button>
    <div>
      <!-- <form @submit.prevent="createRoom">
        <input type="text" v-model="roomName" placeholder="create room" />
      </form> -->
      <InputRoom @submit-roomName="createRoom" />
    </div>
    <div v-if="rooms.length != 0">
      <RoomCard @join-room='joinRoom' v-for="(room,index) in rooms" :room="room" :key="index">
        <!-- <p>{{room.name}}</p> -->
        <!-- <button class="btn btn-primary" @click="joinRoom(room.name)">Join</button> -->
      </RoomCard>
    </div>
    <div v-else>
      <p class="is-size-3 is-family-2P">No room available, create a room</p>
    </div>
  </div>
</template>

<script>
// import DiceRoll from "@/components/DiceRoll.vue";
import RoomCard from "@/components/RoomCard.vue";
import InputRoom from "@/components/InputRoom.vue";
import socket from "../config/socket";
export default {
  name: "Room",
  components: {
    RoomCard,
    InputRoom
  },
  data() {
    return {
      rooms: [],
      // roomName: "",
    };
  },
  methods: {
    joinRoom(payload) {
      // const payload = {
      //   'room-name': name,
      //   username: localStorage.username
      // }
      // socket.emit('join-room', payload)
      this.$store.commit("joinRoom", {
        "room-name": payload,
        username: localStorage.username,
      });
      this.$router.push(`/lobby/${payload}`);
    },
    createRoom(payload) {
      // const payload = {
      //   'room-name': this.roomName,
      //   admin: localStorage.username
      // }
      // socket.emit('create-room', payload)
      this.$store.commit("createRoom", {
        "room-name": payload,
        admin: localStorage.username,
      });
      // console.log(this.rooms)
    },
    logout() {
      this.$store.commit("logout");
      // localStorage.clear()
      this.$router.push({ name: "Home" });
    },
  },
  created() {
    socket.on("list-rooms", (data) => {
      this.rooms = data;
    });
    socket.on("updated-room", (data) => {
      this.rooms = data;
    });
    socket.on("errorFull", (data) => {
      this.rooms = data;
    });
  },
};
</script>

<style>
</style>


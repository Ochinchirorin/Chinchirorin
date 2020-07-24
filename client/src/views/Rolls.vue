<template>
  <div class="container is-fluid">
    <div class="notification">
      <button
        class="button is-danger is-large is-fullwidth is-outlined"
        @click="roll()"
        v-if="winner.length === 0"
      >ROLL</button>

      <br />
      <span class="title garmin" v-for="(x, index) in result.roll" :key="index">{{ x }}</span>
      <h1 class="garmin">Result:</h1>
      <h1 class="garmin" v-if="result.winStatus === false">{{ result.point }}</h1>

      <h1 class="garmin" v-else-if="result.winStatus === true">You win!</h1>

      <h1 class="garmin" v-else-if="result.loseStatus === true">You lose!</h1>
      <h1 class="garmin">{{winner}}</h1>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { mapState } from "vuex";
import socket from "../config/socket";
export default {
  data() {
    return {
      result: [],
      players: {
        name: localStorage.username,
      },
      rollPoint: [],
      winner: "",
    };
  },
  methods: {
    roll() {
      let name = this.players.name;
      socket.emit("roll", name);
    },

    rollStorm() {
      let name = this.players.name;
      socket.emit("rollStorm", name);
    },
  },
  created() {
    socket.on("result", (payload) => {
      this.result = payload;
      socket.emit("dataRoll", payload);
    }),
      socket.on("ongoing", (payload) => {
        this.rollPoint = payload;
      });

    socket.on("hasil", (payload) => {
      if (payload.name === "") {
        this.winner = payload.msg;
      } else this.winner = `${payload.name} ${payload.msg}`;
      console.log(this.winner);
    });
  },
  computed: mapState(["rollResult"]),
};
</script>

<style>
.garmin {
  margin-right: 15px;
  font-size: 72px;
}
</style>

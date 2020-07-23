<template>
  <div class="container is-fluid">
    <div class="notification">
      <button
        class="button is-danger is-large is-fullwidth is-outlined"
        @click="roll()"
      >
        Rolls
      </button>
      <br />
      <span
        class="title garmin"
        v-for="(x, index) in result.roll"
        :key="index"
        >{{ x }}</span
      >
      <h1 class="garmin">Result:</h1>
      <h1 class="garmin" v-if="result.winStatus === false">
        {{ result }}
      </h1>

      <h1 class="garmin" v-else-if="result.winStatus === true">
        You win!
      </h1>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { mapState } from "vuex";
export default {
  data() {
    return {
      result: [],
      players: [
        {
          name: "Sakra",
          point: 4,
          winStatus: false,
        },
      ],
    };
  },
  mounted() {
    this.roll();
  },
  methods: {
    roll() {
      this.socket = io.connect("http://localhost:3000");
      this.socket.on("roll", (payload) => {
        console.log(payload);
        this.result = payload.content;
        // if (payload.content.winStatus === true) {
        //   this.socket.emit('win', )
        // }
      });
    },
  },
  // computed: mapState(["currentPlayer"]),
};
</script>

<style>
.garmin {
  margin-right: 15px;
  font-size: 72px;
}
</style>

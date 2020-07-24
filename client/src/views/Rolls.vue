<template>
  <div class="container is-fluid">
    <DiceRoll @dice-roll="roll" :result="result" />
       

    <div class="notification">
      <!-- <button
        class="button is-danger is-large is-fullwidth is-outlined"
        @click="roll()"
      >ROLL</button>  -->

      <br />
      <span class="title garmin" v-for="(x, index) in result.roll" :key="index">{{ x }}</span>
      <h1 class="garmin">Result:</h1>
      <h1 class="garmin" v-if="result.winStatus === false && isRoll">{{ result.point }}</h1>

      <h1 class="garmin" v-else-if="result.winStatus === true">You win!</h1>

      <h1 class="garmin" v-else-if="result.loseStatus === true">You lose!</h1>
      <h1>{{roomData}}</h1>
      <h1 class="garmin">{{winner}}</h1>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { mapState } from "vuex";
import socket from "../config/socket";
import DiceRoll from "@/components/DiceRoll.vue"
export default {
  components:{
    DiceRoll
  },
  data() {
    return {
      turnCount:0,
      isRoll:false,
      result: {roll:[1,1,1]},
      players: {
        name: localStorage.username,
      },
      rollPoint: [],
      winner: "",
      isTurn: 0
    };
  },
  methods: {
    roll() {
      this.turnCount++
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
      this.isRoll = true;
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
  // computed: mapState(["rollResult","roomData"]),
    computed:{
      roomData(){
        const param = this.$route.params.room
        // console.log(param)
        // console.log(this.$route)
        let a = this.$store.state.roomData.filter(x =>{
         return x.name === param
        })
        console.log(a)
        return a[0]
      },
      roomName(){
        return this.$route.params.room
      },
      currentTurn(){
        if(this.turnCount < 3){
          this.isTurn = 0
        }else{
          this.isTurn = 1
        }
        // if(Math.floor(7/this.turnCount)=== this.roomData.users.indexOf(this.players.name)){
        //   this.isTurn = true;
        // }
        return this.isTurn
      }
    }
};
</script>

<style>
.garmin {
  margin-right: 15px;
  font-size: 72px;
}
</style>

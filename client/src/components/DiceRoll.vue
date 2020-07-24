<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div class="dice dice-2" :class="[{animate:isAnimated}, skin1]"></div>
      </div>

      <div class="column is-narrow">
        <div class="dice" :class="[{animate:isAnimated}, skin2]"></div>
      </div>

      <div class="column is-narrow">
        <div class="dice" :class="[{animate:isAnimated}, skin3]"></div>
      </div>
  
    </div>
        <button @click="diceRoll" class="nes-button p-2 is-large is-family-2P">
        <span class="is-size-3">Roll</span>
      </button>

    <!-- <div class="dice dice-1">

        </div>
                <div class="dice dice-2">

        </div>
                <div class="dice dice-3">

    </div>-->
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      isAnimated: false
    };
  },
  props: ["result"], //[1,2,3]
  methods: {
    diceRoll() {
      this.isAnimated = !this.isAnimated;
      this.$emit("dice-roll");
      // setTimeout(() => {
      //     this.isAnimated = false;
      // }, 3000);
    }
  },
  computed: {
    skin1() {
      return `dice-${this.result.roll[0]}`;
    },
    skin2() {
      return `dice-${this.result.roll[1]}`;
    },
    skin3() {
      return `dice-${this.result.roll[2]}`;
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  height: 100vh;
}
.dice {
  /* background-color: dodgerblue; */
  width: 200px;
  height: 200px;
  margin: 1.5rem;
  transition: all 1.4s ease-in;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
}
.dice-1 {
  background-image: url(../assets/dices/1.png);
}
.dice-2 {
  background-image: url(../assets/dices/2.png);
}
.dice-3 {
  background-image: url(../assets/dices/3.png);
}
.dice-4 {
  background-image: url(../assets/dices/4.png);
}
.dice-5 {
  background-image: url(../assets/dices/5.png);
}
.dice-6 {
  background-image: url(../assets/dices/6.png);
}
.animate {
  transform: rotate(1980deg);
  /* transform: rotateZ(1080deg); */
}
</style>
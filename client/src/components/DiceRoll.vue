<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-narrow">
        <div class="dice dice-1" :class="{animate:isAnimated}" ></div>
      </div>
      <div class="column is-narrow">
        <div class="dice dice-2" :class="{animate:isAnimated}" ></div>
      </div>
      <div class="column is-narrow">
        <div class="dice dice-3" :class="{animate:isAnimated}" ></div>
      </div>
    </div>
    <button @click='diceRoll' class="nes-button p-2 is-large is-family-2P"> <span class="is-size-3">Roll</span></button>
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
  methods: {
    diceRoll() {
      this.isAnimated = !this.isAnimated;
      // setTimeout(() => {
      //     this.isAnimated = false;  
      // }, 3000);
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
  background-image: url(../assets/dices/4.png);
}
.dice-6 {
  background-image: url(../assets/dices/4.png);
}
.animate {
  transform: rotate(1980deg);
  /* transform: rotateZ(1080deg); */
}
</style>
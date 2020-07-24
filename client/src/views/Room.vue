<template>
  <div>
    <DiceRoll />
  </div>
</template>

<script>
import DiceRoll from "@/components/DiceRoll.vue";
export default {
  name: "Room",
  components: {
    DiceRoll
  },
  data: function() {
    return {
      // isAnimated: false
    };
  }
};
</script>

<style>
</style>
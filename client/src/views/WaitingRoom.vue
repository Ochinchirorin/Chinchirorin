<template>
  <section class="section overflow">
    <TitleHero />
    <button class="nes-button is-family-2P is-large mb-6">LOGOUT</button>
    <RoomCard v-for="(room,idx) in rooms" :key="idx" :room="room" />
    <!-- <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard />
    <RoomCard /> -->
  </section>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
import TitleHero from "@/components/TitleHero.vue";
export default {
  name: "WaitingRoom",
  data: function() {
    return {
      rooms:['Room 1','Room 2','Room AmsterdamFox','Room Remote']
    };
  },
  components: {
    RoomCard,
    TitleHero
  }
};
</script>

<style>
.overflow {
  overflow: auto;
}
</style>
<template>
    <div class="container mb-6 is-family-2P">
        <div class="nes-container with-title is-centered">
  <p class="title">{{room.name}}</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, accusamus.</p>
  <button class="nes-button " @click="joinRoom">JOIN</button>
</div>
  </div>
</template>

<script>
export default {
      name:'RoomCard',
      props:['room'],
      methods:{
            joinRoom(){
                  const payload = this.room.name
                  this.$emit('join-room',payload)
            }
      }

}
</script>

<style>

</style>
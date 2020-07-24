<template>
<div class="bg-img">
<InputName />
</div>

</template>

<script>
import InputName from '@/components/InputName.vue'
export default {
      name:'MainMenu',
      components:{
            InputName
      }
}
</script>

<style scoped>
/* 
.has-background-pub{
  background-image: url(../../src/assets/background.jpg);
  background-size: cover;
} */
.bg-img { 
      height:100vh;
  background-image: url(../../src/assets/background.jpg);
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  /* background-color: #999; */
}

.bg-img:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(0,0,0,.4);
}
</style>
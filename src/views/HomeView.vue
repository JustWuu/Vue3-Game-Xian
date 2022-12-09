<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue' 聊天視窗
// import Chat from './Home/Chat.vue'
// import PlayerProfile from './Home/PlayerProfile.vue'
// import Advertise from './Home/Advertise.vue'
import { ref ,onMounted ,watch} from 'vue'
import { useCounterStore } from "../stores/counter.js"
import Chat from '../components/Chat.vue'
import Nav from '../components/Nav.vue'

</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <div class="info">


    </div>
    <div class="home_top">
      <Chat/>
      
    </div>

    <Nav/>
  </div>
</div>
</template>


<style lang="scss" scoped>
.home_top{
  height: 95%;
}
</style>
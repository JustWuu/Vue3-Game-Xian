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
import Info from '../components/Info.vue'
</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <img class="background-img" src="../../public/images/Character/fc30b93.png" alt="">
    <div class="home_top">

      <div id="Info"><Info/></div>
      <div id="Chat"><Chat/></div>

    </div>

    <Nav/>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>
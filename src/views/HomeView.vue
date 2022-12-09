<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue' 聊天視窗
// import Chat from './Home/Chat.vue'
// import PlayerProfile from './Home/PlayerProfile.vue'
// import Advertise from './Home/Advertise.vue'
import { ref ,onMounted ,watch} from 'vue'
import { useCounterStore } from "../stores/counter.js"


</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <div class="info">


    </div>
    <div class="home_top">

      



    </div>

    <nav>
      <RouterLink to="/">鍛造</RouterLink>
      <RouterLink to="/">煉丹</RouterLink>
      <RouterLink to="/">修煉</RouterLink>
      <RouterLink to="/">背包</RouterLink>
      <RouterLink to="/">旅途</RouterLink>
    </nav>
  </div>
</div>
</template>


<style lang="scss" scoped>
.home_top{
  height: 95%;
}


nav {
  width: 100%;
  height: 5%;
  font-size: 20px;
  background: #2940b1;
  border-radius: 0px 0 0 0;
  text-align: center;
  a{
  display: inline-block;
  padding: 0.1rem 1.2rem;
  color: rgb(250, 250, 250);
  text-decoration: none;
  }
  a:hover{
    background: #838fcd;
    color: #000;
    transition: .5s;
    border-radius: 5px;
  }
}

</style>
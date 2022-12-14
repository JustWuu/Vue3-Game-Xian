<script setup>
import Nav from '../components/Nav.vue'
import { useCounterStore } from "../stores/counter.js"
import { useRouter } from 'vue-router'
const User = useCounterStore()
const router = useRouter()

function meditate(){
  if(User.Player.meditate){
    alert('打坐中，不可隨意動作')
    router.replace({ path: '/sublimation' })
  }
}
meditate()

/**
 * 鍛造頁顯示所有鍛造物品
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <div class="home_top">
      



    </div>
    <Nav/>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>
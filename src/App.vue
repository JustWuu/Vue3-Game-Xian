<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { ref ,onMounted ,watch} from 'vue'




document.onmousemove = function(event){
    const box1 = document.getElementById("box999")
    event = event || window.event;
    const st = document.body.scrollTop || document.documentElement.scrollTop;
    const sl = document.body.scrollLeft || document.documentElement.scrollLeft;
    const left = event.clientX;
    const top = event.clientY;
    //設定div的偏移量
    box1.style.left = -1 +left+ sl + "px";
    box1.style.top =  4 +top+ st +"px";
}


</script>

<template>
  <h3>無盡仙途</h3>

  
  <RouterView />


  <Footer/>


  <div id="box999">
    <p>使用者001</p>
  </div>

</template>

<style lang="scss" scoped>







#box999{
  width:10px;
  height:10px;
  background-color:red;
  border-radius:50% 50%;
  position:absolute;
  z-index: 9999999;
  p{
    font-size: 10px;
    writing-mode:horizontal-tb;
    width: 90px;
    left: 4px;
    top: 6px;
  }
}


/*
頁面會記錄使用者滑鼠位置到，房間>號碼>各使用者>滑鼠資料資料庫
各自頁面會同步滑鼠位置並渲染出來，渲染出來會包括該使用者名子及圓塊
使用者可以在每場次結束時抽取數個該場次出現過的特殊事件，
特殊事件是在特定事件組合時會出現的事件，若使用者有特殊事件
可在部份條件滿足時發動該特殊事件(無法被略過)
在部分場景會出現材料，材料出現時會依使用者使角色上升的靈力來排行
由高至低排序選擇權，每場使用者只有數次選擇機會
使用者可將材料製成各種道具，道具可給予角色也可自用
*/
</style>



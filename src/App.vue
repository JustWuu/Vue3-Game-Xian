<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { ref ,onMounted ,watch} from 'vue'
import { GetIP } from "./components/api.js"; 
import { useCounterStore } from "./stores/counter.js"
import { initializeApp } from "firebase/app";
import { getDatabase, ref as fbref, set, child, get, update,push } from "firebase/database";
import { useRouter } from 'vue-router'
const firebaseConfig = {
  apiKey: "AIzaSyBZbHSiAQrJktVbyRoJ8i6EwCLns-TMmfk",
  authDomain: "mygame-xian.firebaseapp.com",
  projectId: "mygame-xian",
  storageBucket: "mygame-xian.appspot.com",
  messagingSenderId: "496921879585",
  appId: "1:496921879585:web:34ead29c0601e5c592af60"
};
const firedata = initializeApp(firebaseConfig);
// const database = getDatabase(firedata);
// const dbRef = fbre f(getDatabase());
const db = getDatabase();
const User = useCounterStore()
const router = useRouter()


//每次進頁面判斷有無登入
onMounted(( )=>{
  if(User.Player.name ===''){
    alert("你沒有登入")
    router.replace({ path: '/' })
  }
})


function editCommodity(acc){
  if(User.Player.name !== ""){
      let Today = new Date();
      update(fbref(db,"Users/"+acc),{
        name:User.Player.name,
        lv:User.Player.lv,//當前境界
        props:User.Player.props,//靈力加成道具，只能一個
        fragments:User.Player.fragments,//位面碎片
        interfere:User.Player.interfere,//影響度(干涉力)
        power:User.Player.power,//靈力
        probability:User.Player.probability,//劫運
        money:User.Player.money,//靈石
        img:User.Player.img,//玩家代表人物
        meditate:User.Player.meditate,//是否打坐
        meditateStatrt:User.Player.meditateStatrt,//打坐開始當下時間
        meditateStatrtTime:User.Player.meditateStatrtTime,//打坐當下完整時間
        item:User.Player.item,//持有道具
        letter:User.Player.letter,
        letterArray:User.Player.letterArray,

        time:Today.getFullYear() +"/"+ (Today.getMonth()+1) +"/"+ Today.getDate() +"/"+ Today.getHours()+":"+ Today.getMinutes() +":"+ Today.getSeconds(),
      })
  .then(()=>{
      console.log('更新成功')
  })
  .catch((error)=>{
      alert('出錯啦')
  })
  }else{
      alert("你沒有登入")
      router.replace({ path: '/' })
  }
}
//監聽用戶資料
watch(User, () => {
    editCommodity(User.Player.name)
});


// 下方為IP紀錄
const IP = ref('')
GetIP()
  .then(response => {
    response = response.data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
    IP.value = response.ip
    UpIP()
  })
  .catch( error => {
    console.log(error);
  })

function UpIP(){
let Today = new Date();
const chatRef = fbref(db, 'IP/');
const key = push(chatRef).key;
set(fbref(db, `IP/${key}`), {
    IP:IP.value,
    time:Today.getFullYear() +"/"+ (Today.getMonth()+1) +"/"+ Today.getDate() +"/"+ Today.getHours()+"-"+ Today.getMinutes()+"-"+ Today.getSeconds(),
});
}

//偵測用戶離開
window.onbeforeunload = function(){
	if (!confirm("")) {
		return '';
	}
};


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
  <h1 style="margin: 0px;">無盡仙途：製作中</h1>

  
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

new
故事大概：初入仙門的玩家，意外得到可以以器靈姿態進入任何世界位面的道具
穿梭期間原本世界的時間將會停止，玩家藉此培養其他修仙者
並在期間想方設法將任何物資帶回納為己用

玩家每場結束可以獲得抽取事件的“位面碎片”
境界：練體、煉氣、築基、結丹、金丹、元嬰、化神、真仙


註冊資料限制
玩家限制ＩＤ 6碼中文 / 12碼英數，中英只能擇一命名法


修煉頁中可以進行渡劫，渡劫是以消耗積累的靈力來進行嘗試的
靈力可藉由器靈期間從其他修仙者分得的靈力獲得
修煉頁內也可以進行點擊(鍛鍊)來增加靈力、還有打坐這個掛機獲取方法
按下打坐結束時會計算打坐當下時間及結束時間之差距秒數，
再計算玩家道具等物加成後給予靈力，也有極低機率觸發頓悟獲得大量靈力並提高劫運
劫運是渡劫成功的機率，可透過各種方法提升
劫運在每個境界的初始機率都不同
影響度是藉由影響其他位面來累積，影響度可用來購買其他位面的道具
打坐狀態會禁止鍛造、煉丹、渡劫、鍛練、旅途
渡劫成功時，天道會在聊天室發訊息通知全體

*/
</style>



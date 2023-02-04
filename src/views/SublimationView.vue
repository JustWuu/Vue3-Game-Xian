<script setup>
import Nav from '../components/Nav.vue'
import { useCounterStore } from "../stores/counter.js"
import { ref ,onMounted ,watch} from 'vue'
const User = useCounterStore()

//每次進頁面判斷是否在打坐，是就重啟計時器
onMounted(( )=>{
  if(User.Player.meditate){
    window.setTime = setInterval(() => {
      meditatetime()
    }, 500)
  }
})


//打坐
function meditate(){
  if(User.Player.meditate){
    //打坐結束
    clearInterval(setTime);
    User.Player.meditate = !User.Player.meditate
    //境界：練體、煉氣、築基、結丹、金丹、元嬰、化神、真仙
    //不同境界不同倍率
    switch (User.Player.lv) {
      case "練體":
      meditateFun(1)
      break;
      case "煉氣":
      meditateFun(2)
      break;
      case "築基":
      meditateFun(4)
      break;
      case "結丹":
      meditateFun(6)
      break;
      case "金丹":
      meditateFun(8)
      break;
      case "元嬰":
      meditateFun(10)
      break;
      case "化神":
      meditateFun(15)
      break;
      case "真仙":
      meditateFun(25)
      break;
      case "真神":
      meditateFun(50)
      break;
      case "悟道":
      meditateFun(100)
      break;
      default:
      console.log('偵測失敗')
      break;
    }
  }else{
    //打坐開始
    lgtime.value = 0
    let Today = new Date();
    User.Player.meditateStatrt = Today.getTime()
    User.Player.meditateStatrtTime = Today.getFullYear() +"/"+ (Today.getMonth()+1) +"/"+ Today.getDate() +" "+ Today.getHours()+":"+ Today.getMinutes() +":"+ Today.getSeconds(),
    User.Player.meditate = !User.Player.meditate
    window.setTime = setInterval(() => {
      meditatetime()
    }, 1000)
  }
}

function meditateFun(magn){//倍率
  let readyPower = 0
  readyPower += lgtime.value * magn
  power01.value = lgtime.value * magn
  //模擬加成道具
  switch (User.Player.props) {
    case "神元丸":
    readyPower += lgtime.value * 10
    power02.value = lgtime.value * 10
    break;
    case "靈兆天鐘":
    readyPower += lgtime.value * 10000
    power02.value = lgtime.value * 10000
    break;
    case "世界碎片":
    readyPower += lgtime.value * 1000000
    power02.value = lgtime.value * 1000000
    break;

    default:
    console.log('偵測失敗')
    break;
  }
  powerall.value = power01.value + power02.value
  close.value = true
  User.Player.power += readyPower
  lgtime.value = 0
}

//結算
const close = ref(false)
const power01 = ref(0)
const power02 = ref(0)
const powerall = ref(0)

//鍛鍊練練
function powerGOGO(){
  switch (User.Player.lv) {
      case "練體":
      User.Player.power += 2
      break;
      case "煉氣":
      User.Player.power += 4
      break;
      case "築基":
      User.Player.power += 6
      break;
      case "結丹":
      User.Player.power += 10
      break;
      case "金丹":
      User.Player.power += 16
      break;
      case "元嬰":
      User.Player.power += 24
      break;
      case "化神":
      User.Player.power += 34
      break;
      case "真仙":
      User.Player.power += 50
      break;
      case "真神":
      User.Player.power += 500
      break;
      case "悟道":
      User.Player.power += 5000
      break;
      default:
      console.log('偵測失敗')
      break;
    }
    //模擬加成道具
    switch (User.Player.props) {
      case "汲靈石":
      User.Player.power += 20
      break;
      case "世界碎片":
      User.Player.power += 1000
      break;

      default:
      console.log('沒有加成法具')
      break;
    }
}


const lgtime = ref(0)

//累積計時器
function meditatetime(){
  let Nowetime = new Date()
  let time = Nowetime.getTime() - User.Player.meditateStatrt
  lgtime.value = Math.floor(time/1000) 
}

//渡劫
const checkcata = ref(false)

function checkcatastrophe(){
  if(User.Player.meditate){
    alert('正在打坐，無法進行渡劫')
    return
  }else{
    close.value = false
    checkcata.value = true
  }
}
//開始渡劫
function catastrophe(){
  if(User.Player.meditate){
    alert('正在打坐，無法進行渡劫')
    return
  }else{
    //計算
    switch (User.Player.lv) {
      case "練體":
      catastropheFun('煉氣',999,20)
      break;
      case "煉氣":
      catastropheFun('築基',2999,16)
      break;
      case "築基":
      catastropheFun('結丹',5999,8)
      break;
      case "結丹":
      catastropheFun('金丹',10000,4)
      break;
      case "金丹":
      catastropheFun('元嬰',20000,3)
      break;
      case "元嬰":
      catastropheFun('化神',40000,2)
      break;
      case "化神":
      catastropheFun('真仙',80000,1)
      break;
      case "真仙":
      catastropheFun('真神',999999,1)
      break;
      case "真神":
      catastropheFun('悟道',9999999,1)
      break;
      default:
      console.log('偵測失敗')
      break;
    }

  }
  close.value = false
  checkcata.value = false
}

function catastropheFun(lv,power,prob){//下個境界、所需的靈力、晉升後的劫運
  //生成隨機數
  let random = Math.floor(Math.random()*100+1)
  //
  if(User.Player.lv =='真仙' && User.Player.power < power){
    alert('你已達頂尖境界')
  }else if(User.Player.lv =='真神' && User.Player.power < power){
    alert('你已達頂尖境界')
  }else if(User.Player.power < power){
    alert(`靈力不足，需要${power}靈力`)
  }else if(random < User.Player.probability){
    alert(`渡劫成功，晉升${lv}境！`)
    User.Player.lv = `${lv}` //下個境界
    User.Player.power = 0
    User.Player.probability = prob //下個劫運
  }else{
    //失敗會加1%機率
    User.Player.probability += 1
    User.Player.power -= power
    alert('渡劫失敗')
  }
}



</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <div class="home_top">
      <div class="info">
        <span>{{User.Player.name}} - {{User.Player.lv}}境</span>
        -<p>靈力：{{User.Player.power}}</p>-
        <p>劫運：{{User.Player.probability}}%</p>-
        <span>隨身法具：{{User.Player.props}}</span>
      </div>
      <div class="sub-absolute">
        <div class="sub-meditate" :class="{display_none:!User.Player.meditate}">
          <p> </p>
          <span>正在打坐</span>
          <p>開始日：{{User.Player.meditateStatrtTime}}</p>
          <p>累積時間：{{lgtime}} 秒</p>
        </div>
        <div class="sub-button">
          <button :class="{display_none:User.Player.meditate}" @click="meditate()">打坐</button>
          <button :class="{display_none:!User.Player.meditate}" @click="meditate()">打坐結束</button>
          <button @click="powerGOGO()" class="sub-power">鍛練</button>
          <button @click="checkcatastrophe()">渡劫</button>
        </div>
        
      </div>
      <div class="character-img"><img src="../../public/images/img_5657.jpeg" alt=""></div>
      <div :class="{display_none:!close}" class="check" @click="close = false"><p>結算：</p><p>境界靈力：{{power01}}</p><p>法具靈力：{{power02}}</p><p>總計：{{powerall}}</p><p>點擊關閉</p></div>
      
      <div class="check" :class="{display_none:!checkcata}">
        <p>您確定要開始渡劫嗎？</p>
        <p>當前劫運為：{{User.Player.probability}}%</p>
        <div><button @click="catastrophe()">確定</button>
        <button @click="checkcata = false">取消</button></div>
      </div>


    </div>
    <Nav/>
  </div>
</div>
</template>


<style lang="scss" scoped>

.character-img{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -3;
  img{
    height: 100%;
    width: auto;
  }
}

.sub-absolute{
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  z-index: 9999;
  .sub-meditate{
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 0 40px 0 40px;
    span{
      font-size: 1.8rem;
      text-align: center;
      display: block;
      font-family: 'zhH';
      background: rgba(255, 255, 255, 0.705);
      border-radius: 10px 10px 0px 0px;
    }
    p{
      font-size: 1.2rem;
      text-align: center;
      font-family: 'zhQ';
      background: rgb(255, 255, 255, 0.705);
    }
    p:last-child{
      font-size: 1.2rem;
      text-align: center;
      font-family: 'zhQ';
      background: rgb(255, 255, 255, 0.705);
      border-radius: 0px 0px 10px 10px;
    }
  }
  .sub-button{
  width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  button{
    margin: 0 10px 0 10px;
    border: none;
    background: rgb(0, 0, 0);
    color: white;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor:pointer;
  }
  button:hover{
    background: rgb(181, 181, 181);
    color: black;
  }
  .sub-power:active{
    transform:scale(1.4,1.4)
  }
  }
}



.info{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.475);
  span{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
  }
  p{
    display: inline;
    margin:0 10px 0 10px;
  }
}








</style>
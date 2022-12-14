<script setup>
import Nav from '../components/Nav.vue'
import { ref ,onMounted ,watch} from 'vue'
import { useCounterStore } from "../stores/counter.js"
const User = useCounterStore()

const nowtrait = ref('all')

//生成道具
const haveItem = ref([])
const AllItem = ref([])

onMounted(( )=>{
  import('./Item/Item.js').then((all) => {
    AllItem.value = all.default
    SetItem()
  })
})

//設定玩家持有道具
function SetItem(){
  let temItem = []
  for(let z=0;z<User.Player.item.length;z++){//判斷玩家持有幾種道具
    for(let x=0;x<AllItem.value.length;x++){//遍歷道具資料庫
      if(User.Player.item[z].number == AllItem.value[x].number){
        temItem.push(AllItem.value[x])
        temItem[z].num = User.Player.item[z].num
        haveItem.value = temItem
      }
    }
  }
}


//玩家點選的道具
const NowItem = ref({
  number:'',//編號
  name:'',//名字
  num:0,//數量
  illustrate:'',//主要說明
  note:'',//額外說明
  use:undefined,//函式
  img:'./images/Item/pack.png',//圖片
})

//展示玩家點選道具
function openitem(number='',name='',type='',num=0,illustrate='',note='',fun=undefined,img='./images/Item/pack.png'){
  NowItem.value.number = number
  NowItem.value.name = name
  NowItem.value.type = type
  NowItem.value.num = num
  NowItem.value.illustrate = illustrate
  NowItem.value.note = note
  NowItem.value.use = fun
  NowItem.value.img = img
}

//使用道具
function use(){
  if(NowItem.value.use !== undefined){
    NowItem.value.use() //執行他的函式

    for(let z=0;z<User.Player.item.length;z++){//
      if(User.Player.item[z].number === NowItem.value.number){
        if(NowItem.value.type === '消耗'){
          User.Player.item[z].num -= 1
        }
        if(User.Player.item[z].num === 0){
          User.Player.item.splice(z,1)
        }
      }
    }
    openitem()
    SetItem()
  }
  check.value = false
}

const check = ref(false)

//給GM送信，送信會記錄在該玩家的資料下
//供GM查看
const letterText = ref('')
function letter(){
  User.Player.letterArray.push(letterText.value)
  letterText.value = ''
  User.Player.letter = false
}



</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <div class="home_top">
      <div class="check" :class="{display_none:!check}">
        <p>您確定要使用<span>{{NowItem.name}}</span>？</p>
        <p>持有<span>{{NowItem.num}}</span>個</p>
        <div><button @click="use()">確定</button>
        <button @click="check = false">取消</button></div>
      </div>

      <div class="check" :class="{display_none:!User.Player.letter}">
        <input type="text" v-model.lazy="letterText">
        <div><button @click="letter()">送出</button>
        <button @click="User.Player.letter = false">取消</button></div>
      </div>


      <div class="type">
        <button @click="nowtrait='all'" :class="{now_botton:nowtrait == 'all'}">全部</button>
        <button @click="nowtrait='消耗'" :class="{now_botton:nowtrait == '消耗'}">消耗</button>
        <button @click="nowtrait='法具'" :class="{now_botton:nowtrait == '法具'}">法具</button>
        <button @click="nowtrait='材料'" :class="{now_botton:nowtrait == '材料'}">材料</button>
        <button @click="nowtrait='位面'" :class="{now_botton:nowtrait == '位面'}">位面</button>  
      </div>
      
      <div class="pack-boxhome">
      <div class="pack-boxtop">
        <!-- for START -->
        <div class="pack-box" v-for="(item, key) in haveItem" @click="openitem(item.number,item.name,item.type,item.num,item.illustrate,item.note,item.use,item.img)" :class="{ display_none:nowtrait !== item.type && nowtrait !== 'all'}">
        <div class="pack-img">
          <img :src="item.img" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>{{item.num}}</p>
          </div>
        </div>
        </div>
        <!-- for END -->
      </div>
      </div>


      <div class="pack-infohme">
      <div class="pack-info">
        <div class="pack-info-img">
          <div class="info-img">
            <img :src="NowItem.img" alt="">
            <div class="info-num"><p>{{NowItem.num}}</p></div>
          </div>
          
        </div>
        <div class="pack-info-text">
          <div class="pack-info-name">
            {{NowItem.name}}
          </div>
          <div class="pack-info-illustrate">
            {{NowItem.illustrate}}
          </div>
          <div class="pack-info-note">
            {{NowItem.note}}
          </div>
        </div>
        <div class="pack-info-use">
          <button @click="check = true">使用</button>
        </div>
      </div>
      </div>

    </div>


    <Nav/>
  </div>
</div>
</template>


<style lang="scss" scoped>


.pack-infohme{
  height: 21.5%;
}
.pack-info{
  height: 100%;
  margin: 4px;
  display: flex;
  .pack-info-img{
    width: 20%;
    display: flex;
    align-items: center;
    .info-img{
      width: 100%;
      height: 100px;
      img{
        width: 100%;
        height: 100%;
      }
      .info-num{
      position: absolute;
      bottom: 0;
      right: 0;
      background: rgb(255, 255, 255);
      width: 20px;
      height: 20px;
      border-radius: 20px;
      p{
      text-align: center;
      height: 20px;
      }
    }
    }
    
  }
  .pack-info-text{
    width: 80%;
    display: flex;
    align-items: center;
    padding: 10px 0 10px 40px;
    flex-wrap: wrap;
    .pack-info-name{
      width: 100%;
      font-size: 1.2rem;
      color: #383838;
      font-family: 'zhH';
    }
    .pack-info-illustrate{
      width: 100%;
      font-family: 'zhH2';
    }
    .pack-info-note{
      width: 100%;
      color: red;
      font-size: .5rem;
      font-family: 'zhQ';
    }



  }
  .pack-info-use{
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%,0%);
    button{
      border: none;
      background: #c0c0c0;
      cursor:pointer;
      font-size: 1.2em;
      border-radius: 10px;
      width: 80px;
    }
    button:hover{
      background: #8b8a8a;
      transition: .2s;
      color: rgb(255, 254, 254);
    }
  }

}

.pack-boxhome{
  width: 100%;
  height: 70%;
  overflow: auto;
  border-bottom: solid 2px;
  .pack-boxtop{
    display: flex;
    flex-wrap: wrap;
    height:auto ;
  }
.pack-box:hover{
padding: 0px;
border: solid 2px;
cursor:pointer;
transition: .2s;
}

.pack-box{
  width: 20%;
  height: auto;
  padding: 4px;
  border: solid 1px;
  cursor:pointer;
    .pack-img{
      line-height: 0;
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .pack-hidden{
    position: absolute;
    bottom: 5px;
    right: 5px;

    .pack-data{
      background: rgb(255, 255, 255);
      width: 20px;
      height: 20px;
      border-radius: 20px;
      p{
      text-align: center;
      height: 20px;
      }
    }
    
  }
}




.type{
  border-top: 2px solid;
  border-bottom: 3px solid;
  padding: 4px;
  height: 8%;
  width: 100%;
  display: flex;
  justify-content:space-around;

  button{
    margin-left:5px;
    border: none;
    background: #c0c0c0;
    cursor:pointer;
    font-size: 1.2em;
    border-radius: 10px 0 0 10px;
    width: 80px;
  }
  button:hover{
    transition: .4s;
    background: #969595;
  }
  .now_botton{
    background: #383838;
    color: white;
  }
  .now_botton:hover{
    background: #383838;
  }
}
</style>
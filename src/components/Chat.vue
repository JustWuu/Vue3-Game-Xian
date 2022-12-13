<script setup>
import { ref ,onMounted ,watch} from 'vue'
import { initializeApp } from "firebase/app";
import { getDatabase, ref as fbref, set, child, get, update, push, onValue, } from "firebase/database";
import { useCounterStore } from "../stores/counter.js"
const User = useCounterStore()
const firebaseConfig = {
  apiKey: "AIzaSyBZbHSiAQrJktVbyRoJ8i6EwCLns-TMmfk",
  authDomain: "mygame-xian.firebaseapp.com",
  projectId: "mygame-xian",
  storageBucket: "mygame-xian.appspot.com",
  messagingSenderId: "496921879585",
  appId: "1:496921879585:web:34ead29c0601e5c592af60"
};

const firedata = initializeApp(firebaseConfig);
const db = getDatabase(firedata);

const chatRef = fbref(db, 'Chat/');

const message = ref('')

//送出文字
function addmessage(){
  const key = push(chatRef).key;
  // if(!message.value.trim()||User.user.account ==''){
  //   return 
  // }
  //這段是偵測空字元及無登入，因還沒做登入系統，先幹掉
  if(!message.value.trim()){
    return 
  }
  let Today = new Date();
  set(fbref(db, `Chat/${key}`), {
    name:User.Player.name,
    lv:User.Player.lv,
    message:message.value,
    icon:User.Player.img,
    time:Today.getFullYear() +"/"+ (Today.getMonth()+1) +"/"+ Today.getDate() +" -"+ Today.getHours()+":"+ Today.getMinutes() +":"+ Today.getSeconds()+"-",
  })
  message.value = ""
}

//聊天窗自動下拉
function time(){
  let element = document.getElementById("chat-home");
  let timeOut
  clearTimeout(timeOut)
  timeOut = setTimeout(()=>{element.scrollTop = element.scrollHeight}, 100)
}

//監聽資料庫，有新文字就更新
const chatarray = ref([])
onValue(chatRef, (snapshot) => {
  chatarray.value = snapshot.val()
  time()
});

watch(User, () => {
  time()
});


function setImg(number){
  return `./imgage/character/c${number}_C.png`
}

const open = ref(false)

</script>



<template>
  <button class="chat-open" @click="open = !open">跨界傳訊</button>
    <div id="chat-home" :class="{chat_open_anm:open,chat_close_anm:!open}">
        

    <!-- for區塊 -->  
    <div class="chat-box" v-for="(item, key) in chatarray">
  
      <div class="chat-img"><img :src="item.icon" alt=""></div>
      <div class="chat-font">
        <span>{{item.lv}}境 - </span><span>{{item.name}}：</span><p class="chat-time">{{item.time}}</p>
        <p class="chat-text">{{item.message}}</p>   
      </div> 
    </div>
    <!-- for區塊結束 -->


  </div>
  <div class="chat-input" :class="{display_none:!open}"><input type="text" v-model="message" @keyup.enter="addmessage"><button @click="addmessage">送出</button></div>
</template>
  
<style lang="scss" scoped>
.chat_close_anm{
  animation:close .5s 1 forwards;
}
.chat_open_anm{
  animation:open .5s 1 forwards;
}
@keyframes close{
  from{
    height:200px;
  }
  to{
    height:0px;
  }
}
@keyframes open{
  from{
    height:0px;
  }
  to{
    height:200px;
  }
}


.chat-open{
  background:#8990b2;
  padding: 2px;
  border: none;
  cursor: pointer;
  width: 100%;
}
.chat-open:hover{
  background:rgba(191, 199, 223, 0.693);
}


#chat-home{
overflow-y:scroll;
height: 0px;
margin:0px 0px 0 0px;
display: flex;
flex-direction: column;
.chat-box:not(:first-child){
    margin-top: 2px;
}
.chat-box{
    display: flex;
    border-bottom: solid 1px;
    padding: 2px;
    background: rgba(255, 255, 255, 0.774);
    .chat-img{
        width: 60px;
        height: 60px;
        border-radius: 40px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border:solid 2px;
        img{
            height: 100%;
            width: auto;
        }
    }
    .chat-font{
        width:90%;
        margin-left: 5px;
        span{
        display: inline;
        font-weight:bold;
        }
        .chat-text{
        font-size: 1em;
        font-family: 'zhQ';
        }
        .chat-time{
        font-size: .5em;
        display: inline;
        }    
    }
}
}

.chat-input{
    margin-top: 0px;
    width: 100%;
    display: flex;
    input{
        flex-grow:1;
        padding: 2px 5px 2px 5px;
        font-size: 1.2rem;
        color: #49525c;
        border: 1px solid #ced4da;
    }
    button{
        color: #ffffff;
        background-color: #2b71a7b7;
        border: none;
        cursor: pointer;
    }
    button:hover{
        color: #ffffff;
        background-color: #0b62a1e1;
        border: none;
    }
}


</style>
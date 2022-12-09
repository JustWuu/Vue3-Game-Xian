<script setup>
// import { useCounterStore } from "../../stores/counter.js"
import { ref ,onMounted ,watch} from 'vue'
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref as fbref, set, child, get, update, push, onValue, } from "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",
//   authDomain: "mygame01-6fe41.firebaseapp.com",
//   databaseURL: "https://mygame01-6fe41-default-rtdb.firebaseio.com",
//   projectId: "mygame01-6fe41",
//   storageBucket: "mygame01-6fe41.appspot.com",
//   messagingSenderId: "444640701465",
//   appId: "1:444640701465:web:8aaba0d8ef73abaaf7ce88"
// };
// const firedata = initializeApp(firebaseConfig);
// const db = getDatabase(firedata);

// const chatRef = fbref(db, 'Chat/');

// const User = useCounterStore()

const message = ref('')

function addmessage(){
  alert(message.value)
  


  const key = push(chatRef).key;
  if(!message.value.trim()||User.user.account ==''){
    return 
  }
  let Today = new Date();
  set(fbref(db, `Chat/${key}`), {
    name:User.user.account,
    message:message.value,
    icon:User.Profile,
    time:Today.getFullYear() +"/"+ (Today.getMonth()+1) +"/"+ Today.getDate() +" -"+ Today.getHours()+":"+ Today.getMinutes() +":"+ Today.getSeconds()+"-",
  })
  message.value = ""
}

// function time(){
//   let element = document.getElementById("chat-home");
//   let timeOut
//   clearTimeout(timeOut)
//   timeOut = setTimeout(()=>{element.scrollTop = element.scrollHeight}, 100)
// }

// const chatarray = ref([])
// onValue(chatRef, (snapshot) => {
//   chatarray.value = snapshot.val()
//   time()
// });

// watch(User, () => {
//   time()
// });


// function setImg(number){
//   return `./imgage/character/c${number}_C.png`
// }

</script>



<template>
    <div id="chat-home" >
        
    <div class="chat-box" >
      <!-- v-for="(item, key) in chatarray" -->
      <div class="chat-img"><img  alt=""></div>
                            <!-- :src="setImg(item.icon.img)" -->
      <div class="chat-font">
        <span>使用者：</span><p class="chat-time">2022-11-00-00:00</p>
        <p class="chat-text">文字文尊文鱒文噂文蓻文梓文恣文字文尊文鱒文噂文蓻文梓文恣文字文尊文鱒文噂文蓻文梓文恣文字文尊文鱒文噂文蓻文梓文恣</p>   
      </div> 
    </div>

  </div>
  <div class="chat-input"><input type="text" v-model="message" @keyup.enter="addmessage"><button @click="addmessage">送出</button></div>
</template>
  
<style lang="scss" scoped>
.chat-box{
  background: red;
}

</style>
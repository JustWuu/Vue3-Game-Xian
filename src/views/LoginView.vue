<script setup>
import { useRouter } from 'vue-router'
import { useCounterStore } from "../stores/counter.js"
import { ref ,onMounted ,watch} from 'vue'
import { initializeApp } from "firebase/app";
import { getDatabase, ref as fbref, set, child, get, update, push, onValue, } from "firebase/database";
const router = useRouter()

const firebaseConfig = {
  apiKey: "AIzaSyBZbHSiAQrJktVbyRoJ8i6EwCLns-TMmfk",
  authDomain: "mygame-xian.firebaseapp.com",
  projectId: "mygame-xian",
  storageBucket: "mygame-xian.appspot.com",
  messagingSenderId: "496921879585",
  appId: "1:496921879585:web:34ead29c0601e5c592af60"
};
const firedata = initializeApp(firebaseConfig);
const database = getDatabase(firedata);
const dbRef = fbref(getDatabase());
const db = getDatabase();
const User = useCounterStore()

// 登入成功撈取後端資料
function getfb(account){
  get(child(dbRef, `Users/${account}`)).then((snapshot) => {
  if (snapshot.exists()) {
    
    User.Player.name = account
    User.Player.lv = snapshot.val().lv
    User.Player.props = snapshot.val().props
    User.Player.fragments = snapshot.val().fragments
    User.Player.interfere = snapshot.val().interfere
    User.Player.power = snapshot.val().power
    User.Player.probability = snapshot.val().probability
    User.Player.money = snapshot.val().money
    User.Player.img = snapshot.val().img
    User.Player.meditate = snapshot.val().meditate
    User.Player.meditateStatrt = snapshot.val().meditateStatrt
    User.Player.meditateStatrtTime = snapshot.val().meditateStatrtTime
    User.Player.item = snapshot.val().item
    User.Player.letter = snapshot.val().letter
    User.Player.letterArray = snapshot.val().letterArray
  } else {
    console.log("沒有資料");
  }
  }).catch((error) => {
    console.error(error);
  });
}

const UserName = ref('')
const UserPassword = ref('')
function Login(){
    if(UserName.value === "" || UserPassword.value === ""){
        alert("請輸入完整帳號密碼")
    }else{
        get(child(dbRef,"Users/"+UserName.value)).then((snapsoht)=>{
        if(snapsoht.val() === null){
            alert("查無此帳戶")
        }else{
            if(snapsoht.val().password === UserPassword.value){
                getfb(UserName.value)
                alert("登入成功")
                router.replace({ path: '/home' })
            }else{
                alert("密碼錯誤")
            }
        }
        })
        .catch((error)=>{
            alert("資料存取錯誤")
        })
    }
}

// 註冊
function Register(){
    const rules = /^[\u4e00-\u9fff]{2,6}$/;
    const rules2 = /^[_a-zA-Z0-9]{6,12}$/;
    if(UserName.value === "" || UserPassword.value === ""){
        alert("請輸入完整帳號密碼")
        return
    }else if(rules.test(UserName.value)||rules2.test(UserName.value)){
        get(child(dbRef,`Users/`+UserName.value)).then((snapsoht)=>{
        if(snapsoht.val() === null){
            // 註冊成功建立帳戶
            let Today = new Date();
            set(fbref(db, `Users/${UserName.value}`), {
                //帳戶資料
                name:UserName.value,
                lv:'練體',//當前境界
                props:'無',//靈力加成道具，只能一個
                fragments:0,//位面碎片
                interfere:0,//影響度(干涉力)
                power:0,//靈力
                probability:24,//劫運
                money:100,//靈石
                img:'./gg0022.png',//玩家代表人物
                meditate:false,//是否打坐
                meditateStatrt:0,//打坐開始當下時間
                meditateStatrtTime:'',//打坐當下完整時間
                item:[{number:'0',num:10},{number:'005',num:2},{number:'008',num:1},{number:'000',num:1},{number:'007',num:1},],//持有道具
                letter:false,
                letterArray:['',],
                password:UserPassword.value,
                time:Today.getFullYear() +"/"+ (Today.getMonth()+1) +"/"+ Today.getDate() +"/"+ Today.getHours()+":"+ Today.getMinutes() +":"+ Today.getSeconds(),
            });
            alert("註冊完成")
            Login()
        }else{
            alert("已有此帳號")
        }
        })
        .catch((error)=>{
            alert("資料存取錯誤")
        })
    }else{
        alert("註冊名稱不符合命名規範，請重新輸入")
        return
    }
}





const nameeee = ref('') //玩家姓名，判斷有無登入，此值是暫用值

</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <img class="background-img" src="../../public/images/chinese_style_910737.jpg" alt="">

    <div class="login" :class="{display_none:nameeee ==''}">
        <div class="login-home">
            <h3>你已登入，玩家名稱：{{nameeee}}</h3>
            <button @click="router.replace({ path: '/Home' })">返回洞府</button>
        </div>
    </div>


    <div class="login" :class="{display_none:nameeee !==''}">
      <div class="login-home">
          <h3>*帳號請勿參雜符號*</h3>
          <div class="login-box">
          <p>帳號：</p>
          <input type="text" placeholder="帳號" v-model.lazy="UserName">
          </div>
          <div class="login-box">
          <p>密碼：</p>
          <input type="password" placeholder="密碼" v-model.lazy="UserPassword" @keyup.enter="Login()">
          </div>
          <div class="login-button">
          <button @click="Register()">註冊</button>
          <button @click="Login()">登入</button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>

.login{
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
    .login-home{
        width: auto;
        background: rgba(207, 207, 207, 0.856);
        border-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .login-box{
            margin: 5px;
        }
        p{
        margin: 5px;
        width: 50px;
        }
        span{
        display: block;
        color: red;
        }
        input {
        height: auto;
        padding: 5px;
        font-size: 1.3rem;
        border: 1px solid #ced4da;
        }
    }
    h3{
    margin: 0;
    text-align: center;
    width: 100%;
    }
    .login-button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        button {
            padding: 5px 5px 5px 5px;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.2rem;
            margin: 5px 10px 5px 10px;
            cursor: pointer;
            color: #ffffff;
            background-color: #1387e6;
            border: none;
            width: 80px;
        }
    }
}
</style>
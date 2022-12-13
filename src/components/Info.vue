<script setup>
import { useCounterStore } from "../stores/counter.js"
const User = useCounterStore()


</script>
<template>
 <div class="player-home">
    <div class="player-img"><img :src="User.Player.img" alt=""></div>
    <div class="profile-box">
    <div class="profile-lv">
        <span>{{User.Player.name}}</span>
        <p>位面碎片：{{User.Player.fragments}}</p>
        <p>影響度：{{User.Player.interfere}}</p>
    </div>
    <div class="profile-data">靈力：{{User.Player.power}}</div>
    <div class="profile-data">劫運：{{User.Player.probability}}%</div>
    <div class="profile-data">靈石：{{User.Player.money}}</div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.player-home{
    display: flex;
    width: 100%;
    background: rgba(255, 255, 255, 0.589);
    .profile-box{
        margin-left: 0px;
        .profile-lv{
            background: rgba(119, 128, 206, 0);
            margin-top: 8px;
            span{
                display: inline;
                font-size: 1.6rem;
                font-weight:bold;
                border-radius: 2px;
                padding: 2px 5px 2px 5px;
                margin: 6px;
            }
            p{
                font-size: 1rem;
                display: inline;
                color: rgb(214, 36, 36);
                border-radius: 2px;
                padding: 3px;
                margin-left: 2px;
            }
        }

        .profile-data{
            display: inline;
            margin-left: 20px;
            padding: 4px;
            border-radius: 5px;
            color:rgb(0, 0, 0);
        }
    }
    .player-img{
        border:double 4px;
        width: 85px;
        height: 100%;
        border-radius: 0px 0 0px 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.829);
    img{
        height: auto;
        width: 100%;
    }
}
}

</style>
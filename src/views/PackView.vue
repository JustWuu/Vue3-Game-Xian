<script setup>
import Nav from '../components/Nav.vue'
import Info from '../components/Info.vue'
import { ref ,onMounted ,watch} from 'vue'

const nowtrait = ref('all')

</script>

<template>
<div id="center_wrapper" class="flex_center">
  <div id="wrapper">
    <div class="home_top">
      <div id="Info"><Info/></div>
      <div class="type">
        <button @click="nowtrait='all'" :class="{now_botton:nowtrait == 'all'}">全部</button>
        <button @click="nowtrait='消耗'" :class="{now_botton:nowtrait == '消耗'}">消耗</button>
        <button @click="nowtrait='法具'" :class="{now_botton:nowtrait == '法具'}">法具</button>
        <button @click="nowtrait='材料'" :class="{now_botton:nowtrait == '材料'}">材料</button>
        <button @click="nowtrait='位面'" :class="{now_botton:nowtrait == '位面'}">位面</button>  
      </div>
      
      <div class="pack-boxhome">
      <div class="pack-boxtop">

        <!-- v-for="(item, key) in havercardData" -->
        <!-- :class="{ display_none:nowtrait !== item.trait && nowtrait !== 'all'},{display_none:nowawake !== item.awake && nowawake !== null}" -->
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>1</p>
          </div>
        </div>
        </div>

        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>7</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>99</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>99</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>99</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>99</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>99</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>75</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>55</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>15</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>9</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>22</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>3</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>65</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>9</p>
          </div>
        </div>
        </div>
        <div class="pack-box"   >
        <div class="pack-img">
          <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
        </div>
        <div class="pack-hidden">
          <div class="pack-data">
            <p>1</p>
          </div>
        </div>
        </div>
        
        
        
        




      </div>
      </div>

      <div class="pack-info">
        <div class="pack-info-img">
          <div class="info-img">
            <img src="../../public/nzwu2vpc3gc.jpeg" alt="">
            <div class="info-num"><p>2</p></div>
          </div>
          
        </div>
        <div class="pack-info-text">
          <div class="pack-info-name">
            破境仙丹
          </div>
          <div class="pack-info-illustrate">
            上古仙界秘丹，吃一顆就升仙
          </div>
          <div class="pack-info-note">
            生死由天，生還率0.001%  
          </div>
        </div>
        <div class="pack-info-use">
          <button>使用</button>
        </div>
      </div>


    </div>


    <Nav/>
  </div>
</div>
</template>


<style lang="scss" scoped>
.pack-info{
  height: 21.5%;
  margin: 4px;
  display: flex;
  .pack-info-img{
    width: 20%;
    display: flex;
    align-items: center;
    .info-img{
      width: 100%;
      height: auto;
      img{
        width: 100%;
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
      font-size: 1.1rem;
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
  height: 60%;
  overflow: auto;
  border-bottom: solid 2px;
  .pack-boxtop{
    display: flex;
    flex-wrap: wrap;
    height:auto ;
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
      height: auto;
      img{
        width: 100%;
        height: auto;
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
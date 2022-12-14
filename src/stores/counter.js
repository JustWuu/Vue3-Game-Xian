import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//鳳梨全域資料


export const useCounterStore = defineStore('counter', () => {
  const Player = ref({
    name:'',
    lv:'練體',//當前境界
    props:'無',//靈力加成道具，只能一個
    fragments:0,//位面碎片
    interfere:0,//影響度(干涉力)
    power:0,//靈力
    probability:0,//劫運
    money:0,//靈石
    img:'./gg0022.png',//玩家代表人物
    meditate:false,//是否打坐
    meditateStatrt:0,//打坐開始當下時間
    meditateStatrtTime:'',//打坐當下完整時間
    item:[],//持有道具
    letter:false,//給gm送信
    letterArray:[]//給gm送信
  })

  return { Player }
})

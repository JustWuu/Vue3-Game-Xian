import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//鳳梨全域資料


export const useCounterStore = defineStore('counter', () => {
  const Player = ref({
    name:'鎮天刑長',
    lv:'練體',//當前境界
    props:'神元丸',//靈力加成道具，只能一個
    fragments:4214,//位面碎片
    interfere:122,//影響度(干涉力)
    power:950,//靈力
    probability:24,//劫運
    money:1929,//靈石
    img:'./gg0022.png',//玩家代表人物
    meditate:false,//是否打坐
    meditateStatrt:0,//打坐開始當下時間
    meditateStatrtTime:'',//打坐當下完整時間
  })

  return { Player }
})

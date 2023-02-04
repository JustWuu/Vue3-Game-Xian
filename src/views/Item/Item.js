import { useCounterStore } from "../../stores/counter.js"
const User = useCounterStore()

// 道具編號與圖片編號相關
// 編號000~099，特殊道具(不限制類別)
// 編號100~399，消耗類別
// 編號400~699，法具類別
// 編號700~999，材料類別
// 編號1000~2000，位面類別
// 編號1300~1599，外觀設定相關道具(位面類)
//
const Item =[
    {number:"0",
    name:"天信",
    type:'消耗',
    consume:true,//是否為消耗品
    illustrate:'可用以溝通天道的信封，撕碎信封後，文字立即傳送至天道身旁。',
    note:'使用後無點擊送出訊息，天信依然會消耗',
    use:()=>{User.Player.letter = true},
    img:'./images/Item/royal _937387.png',
    },
    {number:"000",
    name:"丹丹漢堡",
    type:'消耗',
    consume:true,//是否為消耗品
    illustrate:'呱',
    note:'好吃，靈力增加999999',
    use:()=>{User.Player.power +=999999},
    img:'./images/Item/hamburger.jpeg',
    },
    {number:"100",
    name:"十草丹",
    type:'消耗',
    consume:true,//是否為消耗品
    illustrate:'由數十種人間稀有藥草熬煉而成，有效提升人體力量。',
    note:'增加50靈力',
    use:()=>{User.Player.power +=50},
    img:'./images/Item/001.jpeg',
    },
    {number:"400",
    name:"清靈玉鐲",
    type:'法具',
    consume:false,//是否為消耗品
    illustrate:'由稀有的清靈玉製作而成的玉鐲，具有溫神養氣功效。',
    note:'打坐靈力加成，1/s靈力',
    use:()=>{User.Player.props = '清靈玉鐲'},
    img:'./images/Item/001.jpeg',
    },
    {number:"700",
    name:"火燐草",
    type:'材料',
    consume:true,//是否為消耗品
    illustrate:'於火焰燃盡的灰燼中生長而出，離地接觸空氣後會開始燃燒。',
    note:'直接服用可能對人體造成傷害！',
    use:()=>{alert('啊！體內好像燃燒起來一樣')},
    img:'./images/Item/bone_6651679.png',
    },
    {number:"1000",
    name:"破舊的獻靈仙鐘",
    type:'位面',
    consume:true,//是否為消耗品
    illustrate:'獻祭靈力可敲響仙鐘，用以換取天道的庇護，此鐘已破舊不堪。',
    note:'消耗1000靈力，增加1%劫運。使用後不論有無成功，此道具皆會消耗掉。',
    use:()=>{
        if(User.Player.power>=1000){
            User.Player.probability +=1;
            User.Player.power -=1000
        }
    },
    img:'./images/Item/001.jpeg',
    },



    {number:"001",
    name:"破境神丹",
    type:'消耗',
    consume:true,//是否為消耗品
    illustrate:'任何境界，只要一粒即可突破境界',
    note:'死亡率99.9999%，請自行衡量',
    use:undefined,
    img:'./images/Item/001.jpeg',
    },
    {number:"002",
    name:"天靈丹",
    type:'消耗',
    consume:true,//是否為消耗品
    illustrate:'集蒼天靈氣而成，僅蒼天絕地才可產出',
    note:'境界越高效益越大',
    use:()=>{console.log('use')},
    img:'./images/Item/001.jpeg',
    },
    {number:"003",
    name:"地靈丹",
    type:'消耗',
    consume:true,//是否為消耗品
    illustrate:'集幽冥地靈氣而成，僅幽冥絕地才可產出',
    note:'境界越高效益越大',
    use:()=>{console.log('use')},
    img:'./images/Item/001.jpeg',
    },
    {number:"004",
    name:"天雷棒",
    type:'法具',
    consume:false,//是否為消耗品
    illustrate:'震天降雷',
    note:'一棒震天，二棒滅世',
    use:()=>{alert('無法使用')},
    img:'./images/Item/001.jpeg',
    },
    {number:"005",
    name:"不知明人骨",
    type:'材料',
    consume:false,//是否為消耗品
    illustrate:'疑似化神境修士之骨骸',
    note:'盆骨處寫著『凱文到此一遊』',
    use:()=>{alert('這骨骸...有被啃過的痕跡')},
    img:'./images/Item/bone_6651679.png',
    },
    {number:"006",
    name:"位面破空符",
    type:'位面',
    consume:true,//是否為消耗品
    illustrate:'可穿越位面進行破空移動',
    note:'使用時低機率消耗全部靈力',
    use:()=>{console.log('use')},
    img:'./images/Item/001.jpeg',
    },
    {number:"007",
    name:"天道賜玉",
    type:'消耗',
    consume:true,//是否為消耗品
    illustrate:'遠古天道賜予護道者的青玉，庇護持有者不受天道攻擊。',
    note:'劫運提高999%',
    use:()=>{User.Player.probability +=999},
    img:'./images/Item/001.jpeg',
    },
    {number:"008",
    name:"神元丸",
    type:'法具',
    consume:false,//是否為消耗品
    illustrate:'散發奇特香味的丹丸，氣味具有養神滋元之功效。',
    note:'打坐靈力加成，10/s 靈力',
    use:()=>{User.Player.props = '神元丸'},
    img:'./images/Item/bk169-011.jpeg',
    },
    {number:"009",
    name:"靈兆天鐘",
    type:'法具',
    consume:false,//是否為消耗品
    illustrate:'？？？？？？',
    note:'打坐靈力加成，10000/s 靈力',
    use:()=>{User.Player.props = '靈兆天鐘'},
    img:'./images/Item/001.jpeg',
    },
    {number:"010",
    name:"汲靈石",
    type:'法具',
    consume:false,//是否為消耗品
    illustrate:'汲取大氣靈力的神秘石頭，隨著擁有者的動作而發動。',
    note:'鍛練靈力加成，20/次 靈力',
    use:()=>{User.Player.props = '汲靈石'},
    img:'./images/Item/001.jpeg',
    },
    {number:"011",
    name:"世界碎片",
    type:'位面',
    consume:false,//是否為消耗品
    illustrate:'不知名殘破碎片',
    note:'大量靈力加成，1000000/s、1000/次 靈力',
    use:()=>{User.Player.props = '世界碎片'},
    img:'./images/Item/001.jpeg',
    },
    
    {number:"000",
    name:"xxxx",
    type:'xx',
    illustrate:'',
    note:'xxxxxxx',
    consume:true,//是否為消耗品
    use:()=>{User.Player.props = '世界碎片'},
    img:'./images/Item/001.jpeg',
    },
    
        
]
export default Item;
// 创建一个游戏列表数据
// 角色扮演的数据
let roleGameList = [
    {
        name: "梦幻西游电脑版",
        title: "icon-1st",
        link: "#"
    },
    {
        name: "大话2经典版",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "天下3",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "新倩女幽魂",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "逆水寒",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "泰亚史诗",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "大话2免费版",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "天谕",
        title: "",
        link: "#"
    },
    {
        name: "超激斗梦境",
        title: "",
        link: "#"
    },
    {
        name: "龙魂时刻",
        title: "",
        link: "#"
    },
    {
        name: "新大话3经典版",
        title: "",
        link: "#"
    },
    {
        name: "新大话3免费版",
        title: "",
        link: "#"
    },
    {
        name: "镇魔曲",
        title: "",
        link: "#"
    },
    {
        name: "镇魔曲页游",
        title: "",
        link: "#"
    },
    {
        name: "大唐无双",
        title: "",
        link: "#"
    },
    {
        name: "武魂2",
        title: "",
        link: "#"
    },
    {
        name: "魔兽世界",
        title: "",
        link: "#"
    },
    {
        name: "暗黑破坏神3",
        title: "",
        link: "#"
    },
    {
        name: "新飞飞",
        title: "",
        link: "#"
    },
    {
        name: "精灵传说",
        title: "",
        link: "#"
    }
]

// 创建一组休闲竞技游戏的数据
let relaxGameList = [
    {
        name: "我的世界",
        title: "icon-new",
        link: "#"
    },
    {
        name: "守望先锋",
        title: "icon-new",
        link: "#"
    },
    {
        name: "荒野行动Plus",
        title: "icon-new",
        link: "#"
    },
    {
        name: "EVE Online",
        title: "icon-new",
        link: "#"
    },
    {
        name: "突击英雄",
        title: "icon-new",
        link: "#"
    },
    {
        name: "战意",
        title: "icon-new",
        link: "#"
    },
    {
        name: "秘境对决",
        title: "icon-new",
        link: "#"
    },
    {
        name: "故土Nostos",
        title: "icon-new",
        link: "#"
    },
    {
        name: "风暴英雄",
        title: "",
        link: "#"
    },
    {
        name: "星际争霸II",
        title: "",
        link: "#"
    },
    {
        name: "炉石传说",
        title: "",
        link: "#"
    },
]

// 创建一组热门游戏的数据
let hotGameList = [
    {
        name: "梦幻西游手游",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "大话西游手游",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "倩女幽魂手游",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "阴阳师",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "率土之滨",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "天下手游",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "镇魔曲手游",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "一梦江湖",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "决战！平安京",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "明日之后",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "荒野行动",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "第五人格",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "神都夜行录",
        title: "icon-hot",
        link: "#"
    },
    {
        name: "终结战场",
        title: "",
        link: "#"
    },
    {
        name: "我的世界Minecraft",
        title: "",
        link: "#"
    },
    {
        name: "大唐无双唯美篇",
        title: "",
        link: "#"
    },
    {
        name: "光明大陆",
        title: "",
        link: "#"
    }
]

// 新品游戏数据
let newGameList = [
    {
        name: "梦幻西游三维版",
        title: "icon-new",
        link: "#"
    },
    {
        name: "海岛纪元",
        title: "icon-new",
        link: "#"
    },
    {
        name: "风云岛行动",
        title: "icon-new",
        link: "#"
    },
    {
        name: "一起优诺",
        title: "icon-new",
        link: "#"
    },
    {
        name: "重新上阵",
        title: "icon-new",
        link: "#"
    },
    {
        name: "猎手之王",
        title: "icon-new",
        link: "#"
    },
    {
        name: "花与剑",
        title: "icon-new",
        link: "#"
    },
    {
        name: "实况足球",
        title: "icon-new",
        link: "#"
    },
    {
        name: "阴阳师：百闻牌",
        title: "icon-new",
        link: "#"
    },
    {
        name: "忘川风华录",
        title: "icon-new",
        link: "#"
    },
    {
        name: "轩辕剑龙舞云山",
        title: "icon-new",
        link: "#"
    },
    {
        name: "量子特攻",
        title: "icon-new",
        link: "#"
    },
    {
        name: "遇见逆水寒",
        title: "icon-new",
        link: "#"
    },
    {
        name: "陈情令",
        title: "icon-new",
        link: "#"
    },
    {
        name: "绿茵之巅",
        title: "icon-new",
        link: "#"
    },
    {
        name: "最后的秘密",
        title: "icon-new",
        link: "#"
    },
    {
        name: "堡垒前线",
        title: "icon-new",
        link: "#"
    },
    {
        name: "第九所",
        title: "icon-new",
        link: "#"
    },
    {
        name: "梦幻西游网页版",
        title: "icon-new",
        link: "#"
    },
    {
        name: "河狸计划",
        title: "icon-new",
        link: "#"
    },
    {
        name: "时空中的绘旅人",
        title: "icon-new",
        link: "#"
    },
    {
        name: "暗黑破坏神：不朽",
        title: "icon-new",
        link: "#"
    },
    {
        name: "阴阳师：妖怪屋",
        title: "icon-new",
        link: "#"
    },
    {
        name: "宝可梦大探险",
        title: "icon-new",
        link: "#"
    },
    {
        name: "黑潮之上",
        title: "icon-new",
        link: "#"
    },
    {
        name: "绘真·妙笔千山",
        title: "icon-new",
        link: "#"
    },
    {
        name: "光·遇",
        title: "icon-new",
        link: "#"
    },
    {
        name: "流星群侠传",
        title: "icon-new",
        link: "#"
    },
    {
        name: "有杀气童话2",
        title: "icon-new",
        link: "#"
    },
    {
        name: "完售物语",
        title: "icon-new",
        link: "#"
    },
    {
        name: "天谕手游",
        title: "icon-new",
        link: "#"
    },
    {
        name: "Disorder",
        title: "icon-new",
        link: "#"
    },
    {
        name: "机动都市阿尔法",
        title: "icon-new",
        link: "#"
    },
    {
        name: "幻书启世录",
        title: "icon-new",
        link: "#"
    },
    {
        name: "青璃",
        title: "",
        link: "#"
    },
    {
        name: "孤岛先锋",
        title: "",
        link: "#"
    },
    {
        name: "逗斗火柴人",
        title: "",
        link: "#"
    },
    {
        name: "游戏王：决斗链接",
        title: "",
        link: "#"
    },
    {
        name: "节奏空间",
        title: "",
        link: "#"
    },
    {
        name: "隐世录",
        title: "",
        link: "#"
    },
    {
        name: "荒野潜伏者",
        title: "",
        link: "#"
    },
    {
        name: "迷室The Room",
        title: "",
        link: "#"
    },
    {
        name: "永远的7日之都",
        title: "",
        link: "#"
    },
    {
        name: "舰无虚发：暗星",
        title: "",
        link: "#"
    },
    {
        name: "实况：王者集结",
        title: "",
        link: "#"
    },
    {
        name: "战舰世界闪击战",
        title: "",
        link: "#"
    },
    {
        name: "坦克世界闪击战",
        title: "",
        link: "#"
    },
    {
        name: "战争怒吼",
        title: "",
        link: "#"
    },
    {
        name: "极客战记(教育类)",
        title: "",
        link: "#"
    },
    {
        name: "权利与纷争",
        title: "",
        link: "#"
    },
    {
        name: "非人学园",
        title: "",
        link: "#"
    },
    {
        name: "战国志",
        title: "",
        link: "#"
    },
    {
        name: "边境之旅",
        title: "",
        link: "#"
    },
    {
        name: "星战前夜：无尽星河",
        title: "",
        link: "#"
    },
    {
        name: "三国如龙传",
        title: "",
        link: "#"
    },
    {
        name: "网易棋牌",
        title: "",
        link: "#"
    },
    {
        name: "神谕文明",
        title: "",
        link: "#"
    },
    {
        name: "风暴对决",
        title: "",
        link: "#"
    },
    {
        name: "猎魂觉醒",
        title: "",
        link: "#"
    },
    {
        name: "狼人杀",
        title: "",
        link: "#"
    },
    {
        name: "魔法禁书目录",
        title: "",
        link: "#"
    },
    {
        name: "秘境对决",
        title: "",
        link: "#"
    },
    {
        name: "影之诗",
        title: "",
        link: "#"
    },
    {
        name: "潮人篮球",
        title: "",
        link: "#"
    },
    {
        name: "三国诛将录",
        title: "",
        link: "#"
    },
    {
        name: "重装突击",
        title: "",
        link: "#"
    },
    {
        name: "劲舞团",
        title: "",
        link: "#"
    },
    {
        name: "坦克连",
        title: "",
        link: "#"
    },
    {
        name: "大话西游热血版",
        title: "",
        link: "#"
    },
    {
        name: "大航海之路",
        title: "",
        link: "#"
    },
    {
        name: "萌王EX",
        title: "",
        link: "#"
    },
    {
        name: "秘宝猎人",
        title: "",
        link: "#"
    },
    {
        name: "天下x天下",
        title: "",
        link: "#"
    },
    {
        name: "永恒边境",
        title: "",
        link: "#"
    },
    {
        name: "花语月",
        title: "",
        link: "#"
    },
    {
        name: "乱斗西游2",
        title: "",
        link: "#"
    },
    {
        name: "惊梦",
        title: "",
        link: "#"
    },
    {
        name: "迷你西游",
        title: "",
        link: "#"
    },
    {
        name: "实况俱乐部",
        title: "",
        link: "#"
    },
    {
        name: "大唐游仙记",
        title: "",
        link: "#"
    },
    {
        name: "天下HD",
        title: "",
        link: "#"
    },
    {
        name: "西游神魔诀",
        title: "",
        link: "#"
    },
    {
        name: "有杀气童话",
        title: "",
        link: "#"
    },
    {
        name: "猫和老鼠官方手游",
        title: "",
        link: "#"
    }
]

// 轮播图数据
let carouselList = [
    {
        h2: "立夏集盛大开幕",
        h3: "撸串斗蛋领海量福利",
        p: "立夏集活动现已开启，完成节日任务，免费兑换挂件倒流壶；享用立夏美食，参加称重大赛，赢取丰厚奖励；每日领取激萌斗蛋，开启酷炫对决，可获得珍稀宝箱！",
        bg: "background-image: url(./images/index/header_carousel_01.jpg)",
        color: "color-white"
    },
    {
        h2: "跨服擂台系统上线",
        h3: "试剑天下，谁与争锋",
        p: "玩家可以通过这一系统，与其他服务器的玩家进行对战。在这个舞台上，玩家可以以单人或团队的形式加入战斗，寻找最适合自己的战术，并在其中赢得荣耀，让更多人见证自己的实力！",
        bg: "background-image: url(./images/index/header_carousel_02.jpg)",
        color: ""
    },
    {
        h2: "梦幻西游三维版",
        h3: "新门派新主角 今日上线",
        p: "次世代3D即时制手游《梦幻西游三维版》，在延续经典梦幻的同时，更塑造了一个万物有灵的西游大世界：开放剧情百种选择、仙魔精怪自由结交、万里疆域隐藏彩蛋，更有跨服赛事火热打响！",
        bg: "background-image: url(./images/index/header_carousel_03.jpg)",
        color: ""
    },
    {
        h2: "“花与剑”新版来袭！",
        h3: "鲜衣怒马，少年仗剑天涯",
        p: "鲜衣怒马，少年仗剑天涯。这是在唐朝，这里有一段你的故事！欢迎加入这花有情、剑有意的“花与剑”江湖....",
        bg: "background-image: url(./images/index/header_carousel_04.jpg)",
        color: ""
    },
    {
        h2: "荒野行动",
        h3: "全新赛季S11启程",
        p: "黑客入侵，未来战争一触即发！",
        bg: "background-image: url(./images/index/header_carousel_05.jpg)",
        color: "color-white"
    }
]

// tab切换数据
let tabList = [
    {
        title: "一梦江湖立夏集开幕",
        detail: "撸串斗蛋，领永久挂件",
        lilpicture: "./images/index/header_tab_li_01.png",
        bigpicture: "./images/index/header_tab_content_01.jpg"
    },
    {
        title: "跨服擂台系统上线",
        detail: "与其他服务器玩家进行对战",
        lilpicture: "./images/index/header_tab_li_02.png",
        bigpicture: "./images/index/header_tab_content_02.jpg"
    },
    {
        title: "《梦幻西游三维版》",
        detail: "新门派新主角 今日上线",
        lilpicture: "./images/index/header_tab_li_03.png",
        bigpicture: "./images/index/header_tab_content_03.jpg"
    },
    {
        title: "花与剑新版来袭",
        detail: "鲜衣怒马，少年仗剑天涯",
        lilpicture: "./images/index/header_tab_li_04.png",
        bigpicture: "./images/index/header_tab_content_04.jpg"
    },
    {
        title: "荒野行动",
        detail: "全新赛季S11启程",
        lilpicture: "./images/index/header_tab_li_05.png",
        bigpicture: "./images/index/header_tab_content_05.jpg"
    }
]

// 新闻数据   （只能由5个）
let newsList = [
    {
        title: "满心如愿，《梦幻西游》手游第二期许愿树活动暖心开启",
        date: "04-21"
    },
    {
        title: "少年再会长安 大话IP动画《大话之少年游》开启预约",
        date: "04-21"
    },
    {
        title: "《隐世录》重磅曝光：NPC颜值超标警报！",
        date: "04-21"
    },
    {
        title: "Creeper？——《一起优诺》UNO Minecraft魔性升级",
        date: "04-21"
    },
    {
        title: "《实况球会经理》联动传奇球星伊涅斯塔！巅峰“小白”点燃绿茵！",
        date: "04-21"
    },
    {
        title: "衣钵相传，《轩辕剑龙舞云山》师徒系统上线",
        date: "04-21"
    },
]

// banner栏数据  (只能有4个)
let bannerList = [
    {
        imgSrc: "./images/index/banner_01.png",
        spanColor: "#ea4040"
    },
    {
        imgSrc: "./images/index/banner_02.png",
        spanColor: "#ea4040"
    },
    {
        imgSrc: "./images/index/banner_03.jpg",
        spanColor: "#ea4040"
    },
    {
        imgSrc: "./images/index/banner_04.jpg",
        spanColor: "white"
    }
]

// main主体部分  热门游戏的数据
let mainHotGameList = [
    {
        contentImg: "./images/index/main_hot_content_01.jpg",
        uploadImg: "./images/index/main_hot_upload_01.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_02.jpg",
        uploadImg: "./images/index/main_hot_upload_02.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_03.jpg",
        uploadImg: "./images/index/main_hot_upload_03.jpg",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_04.jpg",
        uploadImg: "./images/index/main_hot_upload_04.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_05.jpg",
        uploadImg: "./images/index/main_hot_upload_05.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_06.jpg",
        uploadImg: "./images/index/main_hot_upload_06.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_07.jpg",
        uploadImg: "./images/index/main_hot_upload_07.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_08.jpg",
        uploadImg: "./images/index/main_hot_upload_08.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_09.jpg",
        uploadImg: "./images/index/main_hot_upload_09.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_10.jpg",
        uploadImg: "./images/index/main_hot_upload_10.jpg",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_11.png",
        uploadImg: "./images/index/main_hot_upload_11.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_12.jpg",
        uploadImg: "./images/index/main_hot_upload_12.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    },
    {
        contentImg: "./images/index/main_hot_content_13.jpg",
        uploadImg: "./images/index/main_hot_upload_13.png",
        h3: "《一梦江湖》",
        p: "享立夏美食，参加称重大赛，开启斗蛋对决，领永久挂件、珍稀宝箱等海量福利！",
    }
]
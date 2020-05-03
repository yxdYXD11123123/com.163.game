// 轮播图数据
let carouselList = [
    {
        link: "javascript:;",
        imgSrc: "./images/play/carousel_01.png",
        p: "预约可领千元礼包！《一梦江湖》声音交友主题服预约开启！",
    },
    {
        link: "javascript:;",
        imgSrc: "./images/play/carousel_02.jpg",
        p: "今日全平台公测 《海岛纪元》x熊本熊联动火热开启",
    },
    {
        link: "javascript:;",
        imgSrc: "./images/play/carousel_03.jpg",
        p: "4月30日 《隐世录》代码重构测试今日开启 邀您骇入",
    },
    {
        link: "javascript:;",
        imgSrc: "./images/play/carousel_04.jpg",
        p: "男人的格斗 《武魂2》全新资料片今日首发",
    },
]


// （手风琴）  爱玩评测数据  这里只能有6条
let evaluationsList = [
    {
        link: "#",
        gameName: "战争机器：战略版",
        platForm: "Windows",
        score: "8.0",
        imgSrc: "./images/play/evaluation_content_01.jpg",
        advantages: [
            "对《战争机器》系列前传故事的补全",
            "回合制玩法丰富而有可玩性",
            "战斗激烈，处决等系列经典玩法一应俱全",
            "职业、武器设定继承系列核心设定"
        ],
        disadvantages: [
            "不能即时存档颇为不便",
            "无联网模式，现有玩法模式较单调"
        ]
    },
    {
        link: "#",
        gameName: "九霄缳神记",
        platForm: "Windows",
        score: "7.0",
        imgSrc: "./images/play/evaluation_content_02.jpg",
        advantages: [
            "较为吸引人的故事剧情",
            "高速爽快的战斗系统",
            "多种玩法元素的大胆加入"
        ],
        disadvantages: [
            "整体画面表现稍显简陋",
            "动作打击感略显不足",
            "部分冒险玩法元素还需丰富"
        ]
    },
    {
        link: "#",
        gameName: "战争机器：战略版",
        platForm: "Windows",
        score: "9.5",
        imgSrc: "./images/play/evaluation_content_03.png",
        advantages: [
            "优秀的音画体验重塑经典回忆",
            "兼具情怀与拉新的剧情演出",
            "扩充的原作故事引人遐想",
            "大胆的故事革新紧跟时代"
        ],
        disadvantages: [
            "场景细节偶有粗糙",
            "战斗与养成深度较浅"
        ]
    },
    {
        link: "#",
        gameName: "战争机器：战略版",
        platForm: "Windows",
        score: "7.0",
        imgSrc: "./images/play/evaluation_content_04.jpg",
        advantages: [
            "系列一贯优秀的爆蛋物理引擎掌机模式下优秀的帧数与画面表现"
        ],
        disadvantages: [
            "NS版新功能略显鸡肋关卡流程略显单调糟糕的汉化翻译"
        ]
    },
    {
        link: "#",
        gameName: "战争机器：战略版",
        platForm: "Windows",
        score: "7.0",
        imgSrc: "./images/play/evaluation_content_05.jpg",
        advantages: [
            "RE引擎全面升级了经典角色和场景",
            "紧急回避带来动作游戏般的战斗体验",
            "不同难度具有丰富玩法变化，值得反复挑战",
            "新增的医院场景恐怖氛围出众"
        ],
        disadvantages: [
            "删除了原作里的部分经典场景和敌人",
            "追踪者变成固定BOSS战后完全失去了压迫感",
            "捆绑销售的《抵抗》模式缺乏存在感",
            "收集要素（例如吉尔换装）缺斤少两"
        ]
    }
]

// 游戏新鲜事  数据  这里只有5条
let funContentList = [
    {
        link: "#",
        imgSrc: "./images/play/fun_content_01.jpg",
        title: "《时空猎人》年度大版本发布 首届全国天梯赛开战",
        time: "2天前"
    },
    {
        link: "#",
        imgSrc: "./images/play/fun_content_02.jpg",
        title: "开服即登免费榜第一名 《海岛纪元》火热公测",
        time: "1天前"
    },
    {
        link: "#",
        imgSrc: "./images/play/fun_content_03.png",
        title: "网易电竞NeXT春季赛《魔兽争霸III》大师邀请赛强者如林 5月3日迎来终极对决",
        time: "1天前"
    },
    {
        link: "#",
        imgSrc: "./images/play/fun_content_04.jpg",
        title: "《阴阳师：百闻牌》五一攻防新玩法上线 回归还送十连",
        time: "2天前"
    },
    {
        link: "#",
        imgSrc: "./images/play/fun_content_05.jpg",
        title: "LOL卡牌新作《符文之地》5月1日全平台上线 UU加速器助你抢先体验",
        time: "2天前"
    }
]

// banner 
let funBannerList = [
    {
        imgSrc: "./images/play/fun_banner_01.jpg",
        link: "#"
    },
    {
        imgSrc: "./images/play/fun_banner_02.jpg",
        link: "#"
    }
]


// 爱玩视频 数据  这里只有4条
let videosContentList = [
    {
        imgSrc: "./images/play/videos_content_01.jpg",
        link: "#",
        title: "《时空猎人》全国天梯赛揭幕，见证首批巅峰王者诞生"
    },
    {
        imgSrc: "./images/play/videos_content_02.jpg",
        link: "#",
        title: "《时空猎人》全国天梯赛揭幕，见证首批巅峰王者诞生"
    },
    {
        imgSrc: "./images/play/videos_content_03.jpg",
        link: "#",
        title: "《时空猎人》全国天梯赛揭幕，见证首批巅峰王者诞生"
    },
    {
        imgSrc: "./images/play/videos_content_04.jpg",
        link: "#",
        title: "《时空猎人》全国天梯赛揭幕，见证首批巅峰王者诞生"
    }
]

let videosBannerList = [
    {
        link: "#",
        imgSrc: "./images/play/videos_banner_01.jpeg"
    }
]


// 新媒体矩阵 数据
let newmediaContentList = [
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_01.png",
        h5: "网易爱玩",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 网易爱玩",
                link: "#"
            },
            {
                platformName: "xinlang",
                link: "#"
            },
            {
                platformName: "zhihu",
                link: "#"
            },
            {
                platformName: "weixin",
                span: "微信号 play163",
                link: "#"
            }
        ]
    },
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_02.png",
        h5: "易竞技",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 易竞技",
                link: "#"
            },
            {
                platformName: "xinlang",
                link: "#"
            }
        ]
    },
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_03.png",
        h5: "大神评游戏",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 大神评游戏",
                link: "#"
            }
        ]
    },
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_04.jpeg",
        h5: "暴雪大神",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 暴雪娘",
                link: "#"
            },
            {
                platformName: "xinlang",
                link: "#"
            }
        ]
    },
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_05.png",
        h5: "凯恩之角",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 凯恩之角",
                link: "#"
            },
            {
                platformName: "xinlang",
                link: "#"
            }
        ]
    },
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_06.png",
        h5: "爱剁手的U酱",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 爱剁手的U酱",
                link: "#"
            },
            {
                platformName: "steam",
                link: "#"
            }
        ]
    },
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_07.png",
        h5: "易游神",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 易游神",
                link: "#"
            }
        ]
    },
    {
        link: "#",
        imgSrc: "./images/play/newmedia_content_08.png",
        h5: "手游热爱者",
        platforms: [
            {
                platformName: "dashen",
                span: "大神号 手游热爱者",
                link: "#"
            }
        ]
    }
]


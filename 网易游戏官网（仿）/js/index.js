/**
 * topnav部分（包含gamenav）
 */
// 将数据遍历到对应html位置中
// 角色扮演部分
$.each(roleGameList, function (i, j) {
    $(".gamenav-client-role").find("ul").append(`<li><a href="${j.link}">${j.name}</a><i class="${j.title}"></i></li>`)
})
// 休闲竞技部分
$.each(relaxGameList, function (i, j) {
    $(".gamenav-client-relax").find("ul").append(`<li><a href="${j.link}">${j.name}</a><i class="${j.title}"></i></li>`)
})
// 热门手游部分
$.each(hotGameList, function (i, j) {
    $(".gamenav-mobile-hot").find("ul").append(`<li><a href="${j.link}">${j.name}</a><i class="${j.title}"></i></li>`)
})
// 新品手游部分
$.each(newGameList, function (i, j) {
    $(".gamenav-mobile-new").find("ul").append(`<li><a href="${j.link}">${j.name}</a><i class="${j.title}"></i></li>`)
})


$(".topnav-listbtn").on("click", function () {
    // 变化顶部列表按钮样式
    $(this).toggleClass("open")
    // 切换 显示/隐藏  gamenav    (注意：这里必须是针对.topnav 中的.gamenav    页面底部的游戏菜单也是.gamenav)
    $(".topnav .gamenav").slideToggle("linear")
})
// 点击gamenav的收起按钮，收起gamenav
$(".gamenav-closebtn").on("click", closeGameNav)
function closeGameNav() {
    $(".topnav .gamenav").slideUp("linear")
    // 并且给 顶部列表按钮添加类名
    $(".topnav-listbtn").removeClass("open")
}

/**
 *  头部渲染数据  轮播 and Tab切换 and 新闻 and banner栏
 */

// 将轮播图数据遍历到页面中
$.each(carouselList, function (i, j) {
    $(".header-carousel ul").append(`
   <li style="${j.bg}">
      <a href="#" class="container">
          <div class="header-carousel-content ${j.color}">
              <h2>${j.h2}</h2>
              <h3>${j.h3}</h3>
              <p>${j.p}</p>
              <i>查看详情</i>
          </div>
      </a>
  </li>
    `)
    // 插入小圆点
    $(".header-carousel ol").append(`<li></li>`)
})
// 第一个小圆点添加active
$(".header-carousel ol li").eq(0).addClass("active")

// 渲染tab切换内容
$.each(tabList, function (i, j) {
    $(".header-tab-left ul").append(`
    <li class="header-tab-left-li">
    <img src="${j.lilpicture}" alt="">
    <div>
        <h4>${j.title}</h4>
        <p>${j.detail}</p>
    </div>
    <span></span>
</li>
    `)
    $(".header-tab-left-content").append(`
    <a href="javascript:;"><img src="${j.bigpicture}" title="${j.title}"></a>
    `)
})
// 第一个li添加 current
$(".header-tab-left ul li:nth-child(1)").addClass("current")

$.each(newsList, function (i, j) {
    $(".header-news ul").append(`
    <li><a href="javascript:;">${j.title}</a> <span>${j.date}</span></li>
    `)
})

// 将banner栏数据渲染进页面
$.each(bannerList, function (i, j) {
    $(".banner ul").append(`
    <li><a href="javascript:;"><img src="${j.imgSrc}" alt=""></a> <span style="background-color: ${j.spanColor};"></span></li>
    `)
})


/**
 *  热门游戏动画渲染数据
 */
// 渲染一批 热门游戏
// 记录每次从哪个数据开始渲染  （ 进入页面从 一个数据开始渲染 ） 
let mainHotGameIndex = 0
// 记录上次最后渲染到的数据
let endindex = 0
renderHotGameList()
// 写一个可以循环，遍历热门游戏数据的功能函数  功能主要是实现：如果后面的数据不够的情况下，继续从头补充数据
function renderHotGameList() {
    // 使用 for 循环遍历数据
    // 判断：我们计划要渲染出6个li    如果我们后面的数据还够6个
    if (mainHotGameIndex + 5 <= mainHotGameList.length - 1) {
        // 那么正常的接着渲染6个
        for (let i = mainHotGameIndex; i < mainHotGameIndex + 6; i++) {
            $(".main-hot-content").append(`
             <li index="${i}">
             <a href="#" class="main-hot-upload"><img src="${mainHotGameList[i].contentImg}" alt=""><img src="${mainHotGameList[i].uploadImg}" alt=""></a>
             <h3>${mainHotGameList[i].h3}</h3>
           <p>${mainHotGameList[i].p}</p>
           <a href="#" class="main-hot-enter">进入官网</a>
       </li>       
        `)
            // 并记录下最后一个渲染出的数据 的 索引
            endindex = i
        }
    }
    // 但是如果我们的数据已经不够6个 
    else {
        // 计算出  还差几组数据   6 - 还剩的数据组数( 例如：有6组数据   这次要从索引5开， 先遍历了索引5，还差5组，也就是 6-6-5   )
        let difnum = 6 - (mainHotGameList.length - mainHotGameIndex)
        for (let i = mainHotGameIndex; i < mainHotGameList.length; i++) {
            $(".main-hot-content").append(`
             <li>
             <a href="#" class="main-hot-upload"><img src="${mainHotGameList[i].contentImg}" alt=""><img src="${mainHotGameList[i].uploadImg}" alt=""></a>
             <h3>${mainHotGameList[i].h3}</h3>
           <p>${mainHotGameList[i].p}</p>
           <a href="#" class="main-hot-enter">进入官网</a>
       </li>       
        `)
        }
        // 接着利用 计算出的差值， 从头开始渲染数据，作为补充 ： 补充到数据生成6个li
        for (let j = 0; j < difnum; j++) {
            $(".main-hot-content").append(`
        <li>
        <a href="#" class="main-hot-upload"><img src="${mainHotGameList[j].contentImg}" alt=""><img src="${mainHotGameList[j].uploadImg}" alt=""></a>
        <h3>${mainHotGameList[j].h3}</h3>
      <p>${mainHotGameList[j].p}</p>
      <a href="#" class="main-hot-enter">进入官网</a>
  </li>       
   `)
            endindex = j
        }
    }
    // 将结尾的数据记录下来， 以便于下次从下一个数据开始渲染
    mainHotGameIndex = endindex + 1
}

// 节流阀
let hotGameFlag = true
animateHotGameLi()
// 将已有的数据 热门游戏的 li 用动画的方式 依次放大显示
function animateHotGameLi() {
    // 这里的动画在 改变transform属性 ： 所以 需要一个让jquery的animate兼容transform的插件
    // 利用延时器  结合  for循环实现，让6个li 依次间隔一定时间开始放大，
    for (let i = 0; i < 6; i++) {
        // 也就生成6个延时器，依次是 延时 100ms  200ms  300ms .......  也就是每个li的动画效果间隔了100ms
        setTimeout(function () {
            // 每个延时器到时间后就让 对应的li 开始动画效果
            $(".main-hot-content li").eq(i).animate({
                transform: "scale(1)",
                opacity: 1
            }, 450, function () {
                if ($(this).index() == 5) {
                    // 动画结束，打开阀门
                    hotGameFlag = true
                }
            })
        }, i * 70)
    }
}


/**
 *   新游测试渲染数据
 */
$.each(mainNewGameList, function (i, j) {
    $(".main-new ul").append(`
    <li>
    <a href="#">
        <img src="${j.imgSrc}" alt="">
        <p>
            <b>${j.name}</b>
            <s>${j.betaType}</s>
            <span><i></i>${j.startDate}</span>
        </p>
        <i class="main-new-arrow"></i>
    </a>
</li>
    `)
})



/**
 *  头部轮播图  轮播功能
 */
// 声明一个节流阀
let flag = true
// 声明一个变量记录小圆点的索引
let circle = 0
// 给小圆点绑定点击事件
$(".header-carousel ol").on("click", "li", clickCircles)
function clickCircles() {
    if (flag == true) {
        // 关闭节流阀
        flag = false;
        // 切换小圆点样式
        $(this).addClass("active").siblings().removeClass("active");
        // 记录点击索引
        circle = $(this).index();
        $(".header-carousel ul li").eq(circle).fadeIn(1200, function () {
            // 控制节流阀
            flag = true;
        }).siblings().fadeOut(1200)
        // 清楚定时器，重新计时
        clearInterval(timer)
        timer = setInterval(autoPlay, 5000)
    }
}
// 写一个定时器，让轮播图定时轮播
let timer = setInterval(autoPlay, 5000)
function autoPlay() {
    circle++
    if (circle >= $(".header-carousel ol").children().length) {
        circle = 0
    }
    // 切换小圆点样式
    $(".header-carousel ol li").eq(circle).addClass("active").siblings().removeClass("active");
    $(".header-carousel ul li").eq(circle).fadeIn(1200, function () {
        // 控制节流阀
        flag = true;
    }).siblings().fadeOut(1200)
}

/**
 * 头部 tab切换功能
 */
$('.header-tab-left ul').on("click", "li", clickTabLi)
function clickTabLi() {
    // 给被点击的li添加 .current样式
    $(this).addClass("current").siblings().removeClass("current")
    let $index = $(this).index()
    $(".header-tab-left-content a").eq($index).stop().fadeIn(600).siblings().stop().fadeOut(600)
}

/**
 *  main主体部分的热门游戏  换一批功能
 */
$(".main-hot-title span").on("click", clickChangeHot)
function clickChangeHot() {
    if (hotGameFlag) {
        // 开始动画，关闭阀门
        hotGameFlag = false
        // 这里的动画在 改变transform属性 ： 所以 需要一个让jquery的animate兼容transform的插件
        // 利用延时器  结合  for循环实现，让6个li 依次间隔一定时间开始 缩小/透明，
        for (let i = 0; i < 6; i++) {
            // 也就生成6个延时器，依次是 延时 100ms  200ms  300ms .......  也就是每个li的动画效果间隔了100ms
            setTimeout(function () {
                // 每个延时器到时间后就让 对应的li 开始动画效果
                $(".main-hot-content li").eq(i).animate({
                    transform: "scale(0)",
                    opacity: 0
                }, 450, function () {
                    // 完全缩小，透明后，也就是动画结束后，清除自己
                    if ($(this).index() == 5) {
                        // 如果这里是第六个li 已经完成动画  清空 ul
                        $(".main-hot-content").empty()
                    }
                    // 清除自己后，看看 ul 里面还有没有元素，如果已经什么都没有了，就可以开始渲染新数据了
                    if ($(".main-hot-content").children().length == 0) {
                        console.log($(".main-hot-content").children().length);
                        // 渲染新数据 （后面6个数据）
                        renderHotGameList()
                        // 将新数据用动画展示出来
                        animateHotGameLi()
                    }
                })
            }, i * 70)
        }
    }
}


/**
 *  底部游戏菜单  查看更多/收起功能
 */
let $viewMoreBtn = $(".bottom-gamenav-viewmore")
$viewMoreBtn.on("click", clickViewMore)
function clickViewMore() {
    if ($viewMoreBtn.html() == "查看更多") {
        $(".bottom-gamenav .gamenav").animate({
            height: 709
        }, 300)
        $viewMoreBtn.html("收起")
    }
    else {
        $(".bottom-gamenav .gamenav").animate({
            height: 460
        }, 300)
        $viewMoreBtn.html("查看更多")
    }
}
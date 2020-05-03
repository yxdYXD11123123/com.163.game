// 初始化 波浪动画
var wave1 = $('#wave1').wavify({
    height: 80,
    bones: 3,
    amplitude: 38,
    color: '#fff',
    speed: .11
});

var wave2 = $('#wave2').wavify({
    height: 70,
    bones: 3,
    amplitude: 45,
    color: 'rgba(255, 255, 255, .3)',
    speed: .15
});
var wave3 = $('#wave3').wavify({
    height: 60,
    bones: 3,
    amplitude: 45,
    color: 'rgba(255, 255, 255, .4)',
    speed: .25
});

// 
var wave4 = $('#wave4').wavify({
    height: 80,
    bones: 3,
    amplitude: 38,
    color: 'rgba(255, 255, 255, .2)',
    speed: .11
});

var wave5 = $('#wave5').wavify({
    height: 70,
    bones: 3,
    amplitude: 45,
    color: 'rgba(255, 255, 255, .2)',
    speed: .15
});
var wave6 = $('#wave6').wavify({
    height: 60,
    bones: 3,
    amplitude: 45,
    color: 'rgba(255, 255, 255, .2)',
    speed: .25
});


/**
 *  一进入页面  kv  相关所有的东西  就要渲染出来第一遍
 */
// 页面中需要一个核心的周期定时器，这个定时器需要定时操控很多部分的轮流切换
// 声明一个变量，记录kv图的索引
let kvIndex = 0
// 一进入页面时，让第一组kv组显示
$(".header-kv ul li").eq(kvIndex).addClass("current")
// 时间线  处理部分
$(".header-timeline").css({
    width: 100
})
// 小圆环 部分
$(".tab-circle li").eq(kvIndex).addClass('current')
// kv图 导航  部分
$(".tab-content li").eq(kvIndex).addClass("current")

// 这里的4秒延时定时器，是为了 让第一次展示的时间，和后面的每次展示的时间保持一致 -- 4秒  （当然这样也会造成下面的小圆圈第一次不能转够完整的5s, 为了和kv图节奏一直，第一次的小圆圈也要在4s时提前结束）
// 这也是为了还原 与原官网完全一致的效果 
let mainTimer = null;
// 记录mainTimer内部的延时器
let startNextKvTimer = null
setTimeout(function () {
    mainTimerFn();
    // 开启核心的定时器
    mainTimer = setInterval(mainTimerFn, 5000)
}, 4000)


//  kv相关的功能函数部分

function mainTimerFn() {
    // kv 图  处理部分
    // 索引加到下一组
    kvIndex++;
    // 如果超出4组，让其再回到0
    if (kvIndex == 4) {
        kvIndex = 0
    }
    // 调用核心的处理函数
    changeKvMainFn()
}

// 将每次的切换  所涉及的核心步骤 写到一个函数中
function changeKvMainFn() {
    //  先让上一组kv图完全消失
    $(".header-kv ul li").eq(kvIndex).siblings().removeClass("current");
    //  1秒后，上一组图完全消失后，再让下一组kv图开始展示
    startNextKvTimer = setTimeout(startNextKv, 1000)

    // 时间线  处理部分
    $(".header-timeline").css({
        width: 0
    })

    // 小圆环 部分
    $(".tab-circle li").eq(kvIndex).addClass('current').siblings().removeClass("current")

    // kv图 导航  部分
    $(".tab-content li").eq(kvIndex).addClass("current").siblings().removeClass("current")
}

function startNextKv() {
    $(".header-kv ul li").eq(kvIndex).addClass("current")
    // 时间线  处理部分
    $(".header-timeline").css({
        width: 100
    })
}

/**
*  渲染游戏专属电脑 部分 的数据   （注意：为了 头尾的无缝衔接，我们最好直接遍历两份）
*/

for (let i = 0; i < 2; i++) {
    $.each(computerContentList, function (i, j) {
        $('.computer-content ul').append(`
        <li>
        <a href="${j.link}">
            <img src="${j.imgSrc}" alt="">
            <div class="computer-content-words">
                <h4>${j.name}</h4>
                <span></span>
                <p>
                    ${j.p}
                </p>
                <i></i>
                <div>立即下载</div>
            </div>
        </a>
    </li>
        `)
    })
}
// 重置 ul 的宽度
$('.computer-content ul').css({
    width: $('.computer-content ul').children().length * (18 + 280)
})


/**
*  游戏推荐  栏   响应式渲染数据 （并且实现动画方式显示）
*/
// 实现响应式遍历数据
let middleWidth = window.matchMedia('(min-width: 1400px)')
let largeWidth = window.matchMedia('(min-width: 1700px)')
// 声明一个变量，记录每次ul中的第一个li  在数据中的索引位置
let recommendContentIndex = 0;
// 再声明一个变量，记录每次数据遍历到的最后一个数据的索引
let recommendContentEndIndex = 0;
recommendMainFn()


/**
*  最新咨询  数据渲染
*/
$.each(newsContentList, function (i, j) {
    $(".news-content-list").append(`
    <li>
    <a href="${j.link}">
        <span>
            <i>${j.year}</i>
            <i>${j.date}</i>
        </span>
        <p>
            <em>${j.text}</em>
        </p>
    </a>
</li>
    `)
})

/**
*  最新活动  数据渲染
*/
$.each(newsContentActivityList, function (i, j) {
    $(".news-content-activity div").append(`
<a href="${j.link}">
    <img src="${j.imgSrc}">
    <p>${j.p}</p>
</a>
    `)
    $(".news-content-activity ol").append(`<li></li>`)
})
$(".news-content-activity div a").eq(0).addClass("active")
$(".news-content-activity ol li").eq(0).addClass("current")


/**
 *  nav部分  功能
 */
// 给nav部分  关注我们  添加鼠标移入事件
$(".nav-right-nav > li:nth-last-child(2)").hover(enterFollowus, leaveFollowus)
function enterFollowus() {
    $(".nav-right-followus").fadeIn(400)
}
function leaveFollowus() {
    $(".nav-right-followus").fadeOut(400)

}


/**
 *  给 头部的 视频介绍 点击播放视频功能
 */
$(".header-upload-player").on('click', clickHeaderPlayer)
function clickHeaderPlayer() {
    $('.mask, .show-video').show()
    // 让视频从头播放
    $('.show-video video').get(0).currentTime = 0
    $('.show-video video').get(0).play()
}
// 关闭按钮功能
$('.show-video i').on("click", closeShowVideo)
function closeShowVideo() {
    // 暂停视频
    $('.show-video video').get(0).pause()
    $('.mask, .show-video').hide()

}


/**
 *  给 kv图的导航按钮  绑定点击功能
 */
$('.tab-content li').on("click", clickKvNav)
function clickKvNav() {
    // 先清除正在运行的两个定时器
    clearInterval(mainTimer)
    clearTimeout(startNextKvTimer)
    // 更改index记录
    kvIndex = $(this).index()
    // 调用核心功能函数
    changeKvMainFn()
    // 再次开启核心的定时器
    mainTimer = setInterval(mainTimerFn, 5000)
}


/**
 *  游戏专属电脑版的轮播 功能
 */
// 声明一个变量 记录电脑专属的窗口中的第一个li的索引
let computerIndex = 0
// 上一个按钮 的 点击事件
$(".computer-content-prev").on("click", clickComputerPrev)
function clickComputerPrev() {
    // 向右滑出前面的一个li
    if (computerIndex == 0) {
        // 如果此时在第一个li上，我们要先跳到 第二份中第一个li上，再进行上一个动画
        $('.computer-content ul').css({
            left: -298 * computerContentList.length
        })
        computerIndex = computerContentList.length - 1;
        // 随后进行动画
        $('.computer-content ul').stop().animate({
            left: -298 * computerIndex
        }, 400, "linear")
    }
    // 正常滑动
    else {
        // 退一位索引
        computerIndex--;
        $('.computer-content ul').stop().animate({
            left: -298 * computerIndex
        }, 400, "linear")
    }
}

// 下一个按钮 的 点击事件
$(".computer-content-next").on("click", clickComputerNext)
function clickComputerNext() {
    // 向左滑出后面的一个li
    if (computerIndex == $('.computer-content ul li').length - 4) {
        // 如果此时在第二份的倒数第四个li上，我们要先跳到 第一份中倒数第四个li上，再进行上一个动画
        $('.computer-content ul').css({
            left: -298 * (computerContentList.length - 4)
        })
        computerIndex = computerContentList.length - 3
        // 随后进行动画
        $('.computer-content ul').stop().animate({
            left: -298 * computerIndex
        }, 400, "linear")
    }
    // 正常滑动
    else {
        // 退一位索引
        computerIndex++;
        $('.computer-content ul').stop().animate({
            left: -298 * computerIndex
        }, 400, "linear")
    }
}

// 自动轮播功能
let computerTimer = null;
computerTimer = setInterval(clickComputerNext, 4500)
// 鼠标移入停止轮播
$('.computer > div').hover(enterComputer, leaveComputer)
function enterComputer() {
    clearInterval(computerTimer)
}
function leaveComputer() {
    // 再次开启
    computerTimer = setInterval(clickComputerNext, 4500)
}


/**
*  游戏推荐  栏   功能 （响应式）
*/
// 右按钮  点击功能
$(".recommend-content-next").on("click", clickRecommendNext)
function clickRecommendNext() {
    recommendContentIndex += $(".recommend-content ul li").length
    // 如果有一次，index 已经加到了 大于 数据末尾索引的长度
    if (recommendContentIndex >= recommendContentList.length) {
        // 让数据从上次记录的end 的 后一个 开始
        recommendContentIndex = recommendContentEndIndex + 1
    }
    // 先动画隐藏当前的
    recommendLiAnimateOut($(".recommend-content ul li").length)
}
// 左按钮  点击功能
$(".recommend-content-prev").on("click", clickRecommendPrev)
function clickRecommendPrev() {
    // 计算出往前退x个li的 合理的索引（不能小于0）
    let dis = recommendContentIndex - $(".recommend-content ul li").length

    // 如果有一次，index  减到了  小于 0 的索引
    if (dis < 0) {
        recommendContentIndex = recommendContentList.length - $(".recommend-content ul li").length + recommendContentIndex
    }
    else {
        recommendContentIndex = dis
    }
    // 先动画隐藏当前的
    recommendLiAnimateOut($(".recommend-content ul li").length)
}

// 实现响应式添加，减少
// 给页面绑定一个resize事件
$(window).resize(function () {
    if (largeWidth.matches) {
        // 如果到了大屏，但是没有 6个 li，那我们就添加
        if ($(".recommend-content ul li").length != 6) {
            // 清空，还是以当前开始索引插入6个，
            $(".recommend-content ul").empty();
            responsiveRendering(6);
            // css设为显示模式
            $(".recommend-content ul li").css({
                opacity: 1,
                top: 0
            })
        }
    }
    else if (middleWidth.matches) {
        // 屏幕宽度超过 1400px 的 处理  插入5个
        if ($(".recommend-content ul li").length != 5) {
            $(".recommend-content ul").empty();
            responsiveRendering(5);
            $(".recommend-content ul li").css({
                opacity: 1,
                top: 0
            })
        }
    }
    else {
        // 屏幕宽度小于 1400px 的 处理  插入4个
        if ($(".recommend-content ul li").length != 4) {
            $(".recommend-content ul").empty();
            responsiveRendering(4);
            $(".recommend-content ul li").css({
                opacity: 1,
                top: 0
            })
        }
    }
})
function recommendMainFn() {
    if (largeWidth.matches) {
        // 屏幕宽度超过 1700px 的 处理  插入6个
        responsiveRendering(6)
        // 数据插入后，动画显示
        recommendLiAnimateIn($(".recommend-content ul li").length)
    }
    else if (middleWidth.matches) {
        // 屏幕宽度超过 1400px 的 处理  插入5个
        responsiveRendering(5)
        // 数据插入后，动画显示
        recommendLiAnimateIn($(".recommend-content ul li").length)
    }
    else {
        // 屏幕宽度小于 1400px 的 处理  插入4个
        responsiveRendering(4)
        // 数据插入后，动画显示
        recommendLiAnimateIn($(".recommend-content ul li").length)
    }
}

// 动画隐藏，隐藏后要显示新的
function recommendLiAnimateOut(num) {
    // 用延时定时器 将动画产生前后顺序
    for (let i = 0; i < num; i++) {
        setTimeout(function () {
            $(".recommend-content ul li").eq(i).animate({
                top: -300,
                opacity: 0
            }, 450, function () {
                // 如果已经到了最后一个li完成动画，清空ul
                if (i == num - 1) {
                    $(".recommend-content ul").empty()
                    // 清空后，插入新的
                    recommendMainFn()
                }
            })
        }, i * 70)
    }
}
// 动画显示
function recommendLiAnimateIn(num) {
    // 用延时定时器 将动画产生前后顺序
    for (let i = 0; i < num; i++) {
        setTimeout(function () {
            $(".recommend-content ul li").eq(i).animate({
                top: 0,
                opacity: 1
            }, 450)
        }, i * 70)
    }
}

// 写一个遍历数据插入页面的函数，参数为 开始索引，结束索引
function forEachRecommendList(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        $(".recommend-content ul").append(`
    <li>
    <div>
        <img src="${recommendContentList[i].imgSrc}" alt="">
        <h5>${recommendContentList[i].name}</h5>
        <p>${recommendContentList[i].p}</p>
        <i></i>
        <a href="${recommendContentList[i].pcLink}">电脑版下载</a>
        <a href="${recommendContentList[i].phoneLink}">手机版下载</a>
    </div>
    </li>    
    `)
        // 记录结束的那个索引
        recommendContentEndIndex = i
    }
}

// 对于不同屏幕渲染不同数量数据的函数  参数为 渲染数量
function responsiveRendering(liNum) {
    // 插入前判断：当前索引开始，后面的数据还够不够插6个
    if (recommendContentIndex + liNum - 1 <= recommendContentList.length - 1) {
        // 如果够
        // 我们会往页面中的 推荐游戏部分，插入6个li
        forEachRecommendList(recommendContentIndex, recommendContentIndex + liNum);
    }
    // 如果不够
    else {
        // 计算出  还差几组数据
        let difnum = liNum - (recommendContentList.length - recommendContentIndex);
        // 先遍历完剩下的
        forEachRecommendList(recommendContentIndex, recommendContentList.length)
        // 再从前面遍历需要补充的
        forEachRecommendList(0, difnum)
    }
}


/**
*  最新活动  小圆点功能
*/
$(".news-content-activity ol").on("click", "li", clickNewsCircle)
function clickNewsCircle() {
    $(this).addClass("current").siblings().removeClass("current")
    let $index = $(this).index();
    $(".news-content-activity div a").eq($index).addClass("active").siblings().removeClass("active")
}

// 显示分享列表功能
$(".share-main li:last-child, .share-more").hover(enterShareMore, leaveShareMore)
function enterShareMore() {
    $(".share-more").stop().fadeIn()
}
function leaveShareMore() {
    $(".share-more").stop().fadeOut()
}
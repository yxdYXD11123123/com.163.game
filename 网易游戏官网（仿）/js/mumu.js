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


// 给nav部分  关注我们  添加鼠标移入事件
$(".nav-right-nav > li:nth-last-child(2)").hover(enterFollowus, leaveFollowus)
function enterFollowus() {
    $(".nav-right-followus").fadeIn(400)
}
function leaveFollowus() {
    $(".nav-right-followus").fadeOut(400)

}


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

// 这里的4秒延时定时器，是为了 让第一次展示的时间，和后面的每次展示的时间保持一致 -- 4秒  （当然这样也会造成下面的小圆圈第一次不能转够完整的5s, 为了和kv图节奏一直，第一次的小圆圈也要在4s时提前结束）
// 这也是为了还原 与原官网完全一致的效果 
setTimeout(function () {
    mainTimerFn();
    let mainTimer = setInterval(mainTimerFn, 5000)
}, 4000)

function mainTimerFn() {
    // kv 图  处理部分
    // 索引加到下一组
    kvIndex++;
    // 如果超出4组，让其再回到0
    if (kvIndex == 4) {
        kvIndex = 0
    }
    //  先让上一组kv图完全消失
    $(".header-kv ul li").eq(kvIndex).siblings().removeClass("current");
    //  1秒后，上一组图完全消失后，再让下一组kv图开始展示
    setTimeout(startNextKv, 1000)

    // 时间线  处理部分
    $(".header-timeline").css({
        width: 0
    })

    // 小圆环 部分
    $(".tab-circle li").eq(kvIndex).addClass('current').siblings().removeClass("current")
}
function startNextKv() {
    $(".header-kv ul li").eq(kvIndex).addClass("current")
    // 时间线  处理部分
    $(".header-timeline").css({
        width: 100
    })
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
 *  小圆圈 计时旋转
 */
$(".tab-circle li").click(function () {
    $(this).toggleClass("current")
})
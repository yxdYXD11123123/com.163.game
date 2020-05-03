/**
 *  轮播图渲染数据  
 */
// 将轮播图数据遍历到页面中
$.each(carouselList, function (i, j) {
    $(".carousel ul").append(`
<li>
    <a href="${j.link}">
        <img src="${j.imgSrc}" alt="">
        <p>${j.p}</p>
        <span></span>
    </a>
</li>
    `)
    // 插入小圆点
    $(".carousel ol").append(`<li></li>`)
})
// 第一个小圆点添加active
$(".carousel ol li").eq(0).addClass("current")

/**
*  爱玩评测渲染数据  
*/
$.each(evaluationsList, function (i, j) {
    // 处理数据
    let scoreBg = ""
    // 如果评测超出9分，用黑色的分数背景
    if (parseFloat(j.score) >= 9) {
        scoreBg = "black-bg"
    }
    // 将优点数组，用换行标签拼接起来
    let advantagesStr = j.advantages.join("<br>");
    let disadvantagesStr = j.disadvantages.join("<br>")
    // 插入
    $(".evaluation-content").append(`
<li>
    <a href="#">
        <div class="evaluation-content-left">
            <i></i>
            <span class="${scoreBg}">${j.score}</span>
            <div>
                <h4>${j.gameName}</h4>
                <p>${j.platForm}</p>
            </div>
            <img src="${j.imgSrc}" alt="">
        </div>
        <div class="evaluation-content-right">
            <h4>/ 优缺点 /</h4>
            <div>
                <span></span>
                <p>
                   ${advantagesStr}
                </p>
            </div>
            <i></i>
            <div>
                <span></span>
                <p>
                    ${disadvantagesStr}
                </p>
            </div>
        </div>
    </a>
</li>    
    `)
})
setTimeout(function () {
    $(".evaluation-content li").eq(0).addClass("current")

}, 1)

/**
*  游戏新鲜事渲染数据  
*/
$.each(funContentList, function (i, j) {
    $(".fun-content").append(`
<li>
    <a href="${j.link}">
        <div>
            <img src="${j.imgSrc}" alt="">
        </div>
        <h5>${j.title}</h5>
        <p>${j.time}</p>
    </a>
</li>  
    `)
})
// banner 数据渲染
$.each(funBannerList, function (i, j) {
    $(".fun-banner").append(`
<a href="${j.link}">
    <img src="${j.imgSrc}" alt="">
</a>   
    `)
})

/**
*  爱玩视频 渲染数据  
*/
$.each(videosContentList, function (i, j) {
    $(".videos-content").append(`
<li>
    <a href="${j.link}">
        <div>
            <img src="${j.imgSrc}" alt="">
            <span></span>
        </div>
        <h5>${j.title}</h5>
    </a>
</li>  
    `)
})
// banner 数据渲染
$.each(videosBannerList, function (i, j) {
    $(".videos-banner").append(`
<a href="${j.link}">
    <img src="${j.imgSrc}" alt="">
</a>
    `)
})


/**
 *  新媒体矩阵  数据渲染
 */
$.each(newmediaContentList, function (i, j) {
    let platformsStr = ""
    if (j.platforms != undefined) {
        // l 就是 platforms 中的对象
        $.each(j["platforms"], function (k, l) {
            let spanStr = ""
            if (l.span != undefined) {
                spanStr = `<span>${l.span}</span>`
            }
            let addNewStr = `
        <a href="${l.link}" class="newmedia-content-platform">
            <i class="${l.platformName}"></i>
            ${spanStr}
        </a>
            `
            platformsStr = platformsStr + addNewStr
        })
    }

    $(".newmedia-content").append(`
<li class="newmedia-content-li">
    <a href="${j.link}">
        <img src="${j.imgSrc}" alt="">
        <h5>${j.h5}</h5>
    </a>
    ${platformsStr}
</li>
    `)
})


/**
 *   轮播图  轮播功能
 */
// 声明一个节流阀
let flag = true
// 声明一个变量记录小圆点的索引
let circle = 0
// 给小圆点绑定点击事件
$(".carousel ol").on("click", "li", clickCircles)
function clickCircles() {
    if (flag == true) {
        // 关闭节流阀
        flag = false;
        // 切换小圆点样式
        $(this).addClass("current").siblings().removeClass("current");
        // 记录点击索引
        circle = $(this).index();
        $(".carousel ul li").eq(circle).fadeIn(600, function () {
            // 控制节流阀
            flag = true;
        }).siblings().fadeOut(600)
        // 清楚定时器，重新计时
        clearInterval(timer)
        timer = setInterval(autoPlay, 5000)
    }
}
// 写一个定时器，让轮播图定时轮播
let timer = setInterval(autoPlay, 5000)
function autoPlay() {
    circle++
    if (circle >= $(".carousel ol").children().length) {
        circle = 0
    }
    // 切换小圆点样式
    $(".carousel ol li").eq(circle).addClass("current").siblings().removeClass("current");
    $(".carousel ul li").eq(circle).fadeIn(600, function () {
        // 控制节流阀
        flag = true;
    }).siblings().fadeOut(600)
}
//  鼠标移入停止轮播/移开继续轮播
$('.carousel ul').hover(enterCarousel, leaveCarousel)
function enterCarousel() {
    // 清楚定时器
    clearInterval(timer)
}
function leaveCarousel() {
    // 再次打开
    timer = setInterval(autoPlay, 5000)
}

/**
 *   爱玩评测（手风琴）功能
 */
$(".evaluation-content").on("mouseenter", "li", enterEvaluationLi)
function enterEvaluationLi() {
    $(this).addClass("current").siblings().removeClass("current")
}


/**
 *  新媒体矩阵  功能
 */
// 
$(".newmedia-content-li").hover(enterNewmediaLi, leaveNewmediaLi)
function enterNewmediaLi() {
    // 第一个新媒体平台  显示到对应的位置
    $(this).find(".newmedia-content-platform").eq(0).stop().animate({
        top: -32,
        marginLeft: 21,
        opacity: 1
    }, 200)
    $(this).find(".newmedia-content-platform").eq(1).stop(true).delay(50).animate({
        top: 0,
        marginLeft: 44,
        opacity: 1
    }, 200)
    $(this).find(".newmedia-content-platform").eq(2).stop(true).delay(150).animate({
        top: 37,
        marginLeft: 45,
        opacity: 1
    }, 200)
    $(this).find(".newmedia-content-platform").eq(3).stop(true).delay(200).animate({
        top: 71,
        marginLeft: 27,
        opacity: 1
    }, 200)
}

function leaveNewmediaLi() {
    // 所有新媒体平台  隐藏回去
    $(this).find(".newmedia-content-platform").stop().animate({
        top: 22,
        marginLeft: -14,
        opacity: 0
    }, 200)
}


//  鼠标移入新媒体平台小图标，显示平台号
$(".newmedia-content-platform").hover(enterNewmediaPlatform, leaveNewmediaPlatform)
function enterNewmediaPlatform() {
    $(this).find("span").show().stop().animate({
        left: 36,
        opacity: 1
    }, 200)
}
function leaveNewmediaPlatform() {
    $(this).find("span").stop().animate({
        left: 4,
        opacity: 0
    }, 200, function () {
        $(this).hide()
    })
}


// 显示隐藏侧边栏
$(document).on("scroll", scrollPage)
function scrollPage() {
    if ($(this).scrollTop() > 300) {
        $("aside").show()
    }
    else {
        $("aside").hide()
    }
}

// 返回顶部功能
$(".backtop").on("click", clickBacktop)
function clickBacktop() {
    $(document.documentElement).animate({
        scrollTop: 0
    }, 200)
}
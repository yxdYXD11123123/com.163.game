// 初始化 全屏滚动插件
new fullpage('#fullpage', {
    //options here
    // 锚点
    anchors: ["section1", "section2", "section3", "section4"],
    // 离开当前页时
    onLeave: function (origin, destination, direction) {
        // 实现 侧边导航 的对应效果
        if (origin.index >= 0 && origin.index <= 3 && !(origin.index == 3 && direction == "down")) {
            $("aside ul li").eq(origin.index).children().removeClass('active')
        }
    },
    // 到达某个页面时
    afterLoad: function (origin, destination, direction) {
        // 实现到达某个页面  侧边导航的对应效果
        if (destination.index >= 0 && destination.index <= 3) {
            $("aside ul li").eq(destination.index).children().addClass('active')
        }
    }
});
//methods
fullpage_api.setAllowScrolling(true);

/**
 *  切换场景 功能
 */
$(".change-scene a").on("click", clickSceneChange)
function clickSceneChange() {
    nightSceneFlag = !nightSceneFlag
    nightScene(nightSceneFlag)
    $(".section1-main-title").removeClass("rubberBand").css({
        "opacity": 0
    }).delay(400).animate({
        "opacity": 1
    }, 1, function () {
        $(this).addClass("rubberBand");
    })

}


/**
 * 根据当前时间来切换场景  6点到18点为白天   其余时间为夜晚
 */
let nightSceneFlag = false;
let date = new Date();
let currentTime = date.getHours();
if (currentTime <= 6 || currentTime >= 18) {
    nightSceneFlag = true;
    nightScene(nightSceneFlag);
}
// 夜晚场景
function nightScene(flag) {
    if (flag) {
        $(".section, .change-scene a").addClass("night");
    }
    else {
        $(".section, .change-scene a").removeClass("night");
    }

}

// 显示section1的title部分
setTimeout(() => {
    $(".section1-main-title").css({
        "visibility": "visible"
    }).addClass("rubberBand")
}, 800);

/**
 *
 *   搜索框
 *
 * */
$(".section1-search-city, .section1-search-jobkinds").on("click", clickChoose)
function clickChoose() {
    $(this).toggleClass("active")
}
$(".section1-search-city, .section1-search-jobkinds").on('blur', searchChooseBlur)
function searchChooseBlur() {
    $(this).removeClass('active')
}

$(".section1-search-city, .section1-search-jobkinds").on("click", "li", chooseCityOrJob)
function chooseCityOrJob() {
    let keyWord = $(this).html();
    $(this).parent().prev().prev().html(keyWord)
}

// 显示搜索记录
$('.section1-search-keyword').on("focus", showSearchHistory)
function showSearchHistory() {
    $(this).next().show();
}
$('.section1-search-keyword').on("blur", hideSearchHistory)
function hideSearchHistory() {
    $(this).next().hide();
}
$(".section1-search-history").on("mouseenter", "li", overSearchHistory)
function overSearchHistory() {
    $(".section1-search-keyword").val($(this).html());
    // 每次enter事件进入后，绑定一个leave事件
    $(".section1-search-history").on("mouseleave", "li", outSearchHistory)
}
function outSearchHistory() {
    $(".section1-search-keyword").val("")
}
$(".section1-search-history").on("mousedown", "li", clickSearchHistory)
function clickSearchHistory() {
    // 取消 leave 事件，防止清空
    $(".section1-search-history").off("mouseleave");
    $(".section1-search-keyword").val($(this).html());
}

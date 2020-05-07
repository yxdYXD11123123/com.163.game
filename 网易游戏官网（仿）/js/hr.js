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
    $(this).toggleClass("night");
    $(".section1").toggleClass("night")
}
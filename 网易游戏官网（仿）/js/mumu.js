// 给nav部分  关注我们  添加鼠标移入事件
$(".nav-right-nav > li:nth-last-child(2)").hover(enterFollowus, leaveFollowus)
function enterFollowus() {
    $(".nav-right-followus").fadeIn(400)
}
function leaveFollowus() {
    $(".nav-right-followus").fadeOut(400)

}

$(".nav-right-nav > li:nth-last-child(3)").click(function () {
    $(".header-kv-part3").toggleClass("current")
})
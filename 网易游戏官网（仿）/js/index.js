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
    // 切换 显示/隐藏  gamenav
    $(".gamenav").slideToggle("linear")
})
// 点击gamenav的收起按钮，收起gamenav
$(".gamenav-closebtn").on("click", closeGameNav)
function closeGameNav() {
    $(".gamenav").slideUp("linear")
    // 并且给 顶部列表按钮添加类名
    $(".topnav-listbtn").removeClass("open")
}
// 先存入一些假数据 fakehistory = ["手机","电脑"]
// 显示现有历史记录
function showData() {
    let aData = getDate();
    // 检测数据中的元素长度是否为0
    if (aData.length == 0) {
        $("ul").html(`<li>没有搜索记录</li>`)
    }
    else {
        let htmlStr = ''
        $.each(aData, function (i, j) {
            htmlStr += `
                    <li>
            <span>${j}</span>
            <a href="javascript:;">删除</a>
        </li>
                    `
        })
        $("ul").html(htmlStr)
    }
}
showData()
// 获取数据 函数
function getDate() {
    return JSON.parse(localStorage.getItem('fakehistory') || '[]')
}

// 点击搜索，把数据添加到localStorage中
$("#search").on("click", addDate)
function addDate() {
    let newData = $("#new").val()
    if (newData.trim().length == 0) {
        alert("你要搜啥")
    }
    else {
        let aData = getDate()
        // 检查是否有相同的历史记录
        $.each(aData, function (i, j) {
            // 有则删除
            if (j == newData) {
                aData.splice(i, 1)
            }
        })
        // 添加新数据
        aData.push(newData)
        // 把新数据转成JSON的字符串
        localStorage.setItem("fakehistory", JSON.stringify(aData))
        // 再次显示
        showData()
        // 清空输入框
        $("#new").val('')
    }
}

// 删除功能  --- 需要委托给ul
$('ul').on("click", "a", deleteData)
function deleteData() {
    // 获取被点击删除的那个
    let spanFont = $(this).siblings("span").html();
    let aData = getDate()
    // 找到要删除的
    $.each(aData, function (i, j) {
        // 有则删除
        if (j == spanFont) {
            aData.splice(i, 1)
        }
    })
    // 把新数据转成JSON的字符串
    localStorage.setItem("fakehistory", JSON.stringify(aData))
    // 再次展示
    showData()
}

// 清空功能
$("#clear").on("click", clearHistory)
function clearHistory() {
    localStorage.setItem('fakehistory', '[]')
    showData()
}
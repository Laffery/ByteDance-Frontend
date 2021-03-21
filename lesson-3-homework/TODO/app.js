// 将 body 的 onload 参数设置为 render()，初始渲染
document.getElementsByTagName('body')[0].setAttribute('onload', 'render()')

// 设置按钮的点击回调函数
document.getElementsByTagName('button')[0].setAttribute('onclick', 'add()')
document.getElementById('clear').setAttribute('onclick', 'rm_ckd()')

// 发现form标签中按钮的点击会刷新页面从而丢失 todo list 的数据，于是把onsubmit的回调disable
document.getElementsByTagName('form')[0].setAttribute('onsubmit', 'return false')

// todo list
var list = [];
// var list = ['hello', 'kuqiochi', 'laffery']

// li的渲染函数
function render()
{   
    document.getElementById('clear').parentElement.style.display = 
        list.length === 0 ? 'none' : 'block';

    var str = '';

    for (let i = 0; i < list.length; ++i) {
        str += '<li><div id=' + i + '>\
            <input type="checkbox">\
            <span>' + list[i] + '</span>\
            <button class="fork" type="button" onclick="rm(' + i + ')"><strong>×</strong></button>\
        </div></li>';
    }
    document.getElementsByTagName("ul")[0].innerHTML = str;
}

// ADD 按钮的回调函数
function add() {
    var input = document.getElementsByTagName("input")[0].value;
    if (input === '')
        return;
    list.push(input);
    document.getElementsByTagName('input')[0].value = '';
    console.log(list.length);
    render();
}

// × 按钮的回调函数，去除对应item
function rm(index) {
    list.splice(index, 1);
    render();
}

// clear 的回调函数，去除checked的item
function rm_ckd() {
    res = [];
    for (let i = 0; i < list.length; ++i) 
        if (!document.getElementById(i).children[0].checked) // 检查checked
            res.push(list[i]);
    list = res;
    render();
}

# Task3 Part3&4&5 Scrolling Fresh and Data Compatibility

🔧

## Scrolling Fresh

下拉刷新主要要检测滚动条下拉的距离，一般我们有判别方法

> scrollHeight - scrollTop === clientHeight

只需要监听滚动条🖱滚动事件

> window.addEventListener('scroll', callback)

我们在监听到下拉到底部时，从server获取`/next`路由下的数据并加入渲染列表即可

## Data Compatibility

在之前自定义数据对象的基础上，调一调键值对的`key`名称即可，关键在于对时间数据的`相对实现`

其实很简单，和之前签名破解类似地，我们直接去`network`搜索`behot_time`，因为这个键在响应json中每条都有，一个直观的感觉就是它们系统时间，即现在距离1970年1月1日过去了多少秒。事实上也不难通过减法去验证。搜索到在`index.xxxx.js`中有这么一段

```js
{
    key: "updateTime",
    value: function e() {
        var t = this.getList();
        t.forEach((function(e) {
            e.time_ago = Object(y["f"])(e.behot_time)
        }
        ));
        return t
    }
}
```

出现`time_ago`字段，肯定是这里了，我们打上断点后调试运行，然后在控制台运行

> Object(y["f"])

找到对应的函数为

```js
function _() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (!e)
        return "";
    var t = 1e3 * 60;
    var a = p()() - 1e3 * e;
    var r = Math.floor(a / t);
    if (r < 1)
        return "\u521a\u521a";
    if (r < 60)
        return "".concat(r, "\u5206\u949f\u524d");
    else if (r < 60 * 24)
        return "".concat(Math.floor(r / 60), "\u5c0f\u65f6\u524d");
    else if (r < 60 * 24 * 30)
        return "".concat(Math.floor(r / 1440), "\u5929\u524d");
    else if (r < 60 * 24 * 30 * 12)
        return "".concat(Math.floor(r / 43200), "\u6708\u524d");
    return y(1e3 * e, "Y\u5e74M\u6708d\u65e5")
}
```

控制台运行这个函数，刚好能得到和首页一样的相对时间效果，就是它了！

然后我们通过打印的方式，发现函数`p()()`就是获取系统时间，直接用👇替换即可。

> (new Date()).getTime()

而`y(1e3 * e, "Y\u5e74M\u6708d\u65e5")`函数猜测可知是格式化输出Y年M月d日，于是直接计算`1e3*e时刻`的年月日

- getFullYear()
- getMonth() + 1 //返回值的月份是从0开始的
- getDate() // getDay()返回的是星期几

至于**时分秒，这些都是手到擒来的操作，由于原生的头条函数没有精细到这个程度**，在此就不做细致处理

**大数据聚合**：

```js
function aggregate(number) {
    if (number === undefined)
        return 0;
    if (number >= 1e4)
        return Math.floor(number / 1e4)
    return number;
}
```

## Styling

重新对不同类型的头条进行样式适配，有以下几种模式

- no-mode
- single-mode
- ugc-mode
- gallery-mode

在content.js中分拆函数封装，不作多说

# Task3 Part1 Spider

🕷

> 这一部分我们尝试爬取头条首页的内容

## Getting Started

1. 获取请求

    首先我们来到头条首页，下拉刷新页面，查到两种不同的请求

   - [list](https://mcs.snssdk.com/v1/list)
   - [?max_behot...](https://www.toutiao.com/api/pc/feed/?max_behot_time=1616313182&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&_signature=_02B4Z6wo005017Ly26wAAIDDyEviCuZkzf-y1t8AAIz0Ea1OvIy5sCEf.jiQanJz8M6XHD3OoOelDvKy7BLpN0.HRYsWWtJv4h61oe1WciOuRSJ1GeGwhZNAYrQgFBwzmg1WEwz0N6JXShmcc8)

    第一个似乎是头条用来检查用户是否还是active的，第二个才是我们要找的请求。点进去一看我们发现都是\u开头的字符，于是想到将unicode转码成汉字，去[这个网站](http://tools.jb51.net/transcoding/chinese2unicode)刨出了他们转码的[脚本](./decoder.js)。现在可以看到正常的response内容了。

2. 请求解析

    主要有以下几个参数

   - `max_behot_time`
   - category =\_\_all\_\_
   - utm_source = toutiao
   - widen = 1
   - tadrequire = true
   - `_signature`

    我们看到只有两个是动态变化的，其中我们分析response发现`max_behot_time`会在返回值中给出新的值。因此我们只需要考虑如何生成签名`_signature`

3. 破解签名

    我们在chrome浏览器下`Ctrl`+`Shift`+`I`，进入`Network`下，`F5`刷新头条首页，我们在得到的一些数据中搜索，在`index.xxxx.js`下找到了`_signature`

    ```js
    q.interceptors.request.use((function(e) {
            var t;
            if (!R(e.url))
                return e;
            if (null === (t = e.params) || void 0 === t ? void 0 : t._signature)
                delete e.params._signature;
            var a = q.getUri(e);
            var r = I(a, e);
            e.params = V(V({}, e.params), {}, {
                _signature: r
            });
            return e
        }
    ```

    可以看到签名由函数`I(a, e)`生成，我们回溯其定义，找到如下片段

    ```js
    function I(e, t) {
            var a, r;
            var n = "".concat(location.protocol, "//").concat(location.host, "/toutiao");
            if (false)
                ;var i = {
                url: n + e
            };
            if (t.data)
                i.body = t.data;
            var c = (null === (a = window.byted_acrawler) || void 0 === a ? void 0 : null === (r = a.sign) || void 0 === r ? void 0 : r.call(a, i)) || "";
            return c
        }
    ```

    可以看到签名与这里的`window.byted_acrawler.sign`有关，我们在控制台运行这个函数，发现这个函数定义在文件`acrawler.js`中，猜测签名可由这个文件产生

    我们将这个文件复制到`Sources`下的`Snippets`中，在末尾添加上述函数

    ```js
    window.byted_acrawler.sign({url: 'https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true'})
    // 里面的参数url是结合控制台输出补充的
    ```

    发现有长得很像签名的输出，证明我们思路的正确性

    但这只是在浏览器上，我们还要将获取签名的方法写到本地的脚本里

    将上述snippet复制到[本地的脚本](./acrawler.js)中，运行，得到结果：

    ```log
    TypeError: Cannot read property 'referrer' of undefined
    ```

    发现是缺少一些浏览器中的全局变量环境，于是加入之。至此我们的脚本即可获取签名，我们将其封装成函数`_signature`并export

4. 获取新闻

    之前开发vue.js项目的时候使用过`axios`来发送请求，于是我们引入之，过程就不赘叙。其中请求头要加入`user-agent`

    ```js
    axios.get(url, {xxx}).then((res) => {console.log(res.data)})
    ```

    ✌got it!

    写入本地用到fs模块下的`writeFileSync`。至此，第一部分完成

## Local Server

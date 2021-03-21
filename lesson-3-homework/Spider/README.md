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

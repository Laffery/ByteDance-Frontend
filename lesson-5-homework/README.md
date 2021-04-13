# Lesson 5 Homework

> 🎉 

## Details

本次作业要求使用`Next.js`改写[lesson 3 homework](../lesson-3-homework/README.md)中的头条首页

1. 改写

    将原来的html分拆成多个组件，详情见目录[components](./toutiao/pages/components/)

2. 网络请求

    作业要求使用fetch API进行网络请求，参见[news.js](./toutiao/pages/components/news.js)

    ```js
    function pull() {
        fetch(url(protocol, ip, port) + route).then((response) => {
            response.json().then((res) => {
                var tmp = JSON.parse(localStorage.getItem('data'))
                if (!tmp) tmp = []
                localStorage.setItem('data', JSON.stringify([...tmp, ...res.data]))
                setData({ array: JSON.parse(localStorage.getItem('data')) })
            })
        }).catch((e) => {
            console.log(e)
        })
    }
    ```

    我们将数据在本地进行存储，这样在无网络的情况也会有较好的体验；另外支持下拉刷新（lesson 3内容）

    查看*演示*

    ![lesson 5 toutiao demo](./demo.gif)

    其中获取今日头条新闻数据采用的是本人在lesson 3中实现的[爬虫](../lesson-3-homework/Spider/README.md)

    **Notes: 针对spider部分的特别注意**：
    
    - 本作业默认使用本人部署在服务器上的爬虫服务
    - 若服务器不可用
      - 请将[news.js line 5](./toutiao/pages/components/news.js)中的ip修改为`localhost`
      - 并在[Spider](../lesson-3-homework/Spider) 目录下运行 `node server.js`
    - 最坏情况下，请以*演示*作为参考

> 本项目node version: `v14.16.0及以上`

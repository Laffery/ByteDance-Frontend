# Lesson 6 Homework

> ⚡

## Fibonacci

1. fibonacci 递归实现

    ```js
    function fibonacci(n) {
        if (n <= 2) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
    ```

2. fibonacci 非递归实现

    ```js
    function fibonacci2(n) {
        if (n <= 2) return 1;

        var prev = 1;
        var curr = 1;
        for (let i = 3; i <= n; ++i) {
            var tmp = curr; 
            curr += prev;
            prev = tmp;
        }

        return curr;
    }
    ```

    其实到这里我们`直接调用该函数均在很短的时间内计算完成`，但是我们的要求实现非阻塞的函数，实际场景可能面临更复杂的计算

3. requestAnimationFrame & generator

    适应generator，我们改写上述函数

    ```js
    function* fibonacci(n) {
        ...
        for (...) {
            ...
            yield curr;
        }
    }
    ```

    最后一次 yield 时的 `curr` 值即算得的结果，所以我们在generator.next().value不存在时将结果赋给我们的目标变量即可，所以在button的监听回调中

    ```js
    btn.addEventListener('click', () => {
        ...
        gen = fibonacci2(input.value);
        window.requestAnimationFrame(function step() {
            let val = gen.next().value;
            if (val) {
                ...
                resText = val; // 保存当前yield的结果
                window.requestAnimationFrame(step); // 下一帧计算
            }
            else { // 结果全部计算完成
                ...
                result.innerText = resText;
                ...
            }
        });
    });
    ```

    参见注释。这样就实现了非阻塞

4. more

    在这个场景中，一帧的时长不止可以计算一次迭代，我们可以在将循环进一步展开，即一次yield计算若干次，这里以展开计算2次为例（更为极端的，可以加个16ms的计时器，其中进行若干次循环，可以最大化计算的性能）

    ```js
    function* fibonacci3(n) {
        ...
        for (let i = 3; i <= n; ++i) {
            ... // 一次迭代
            i++;
            if (i <= n) {
                ... // 一次迭代
            }
            yield curr;
        }
        ...
    }
    ```

## Static Server

这里对max-age，no-store，no-cache的理解可以参考[知乎文章](https://zhuanlan.zhihu.com/p/55623075)

首先搭建起来一个简单的Node.js 的 [server](./sserver.js)，运行在`3000` 端口，默认返回index.html，该页面在前面fibonacci的基础上加上了三张图片，分别使用的`Cache-Control`的策略为`max-age=10`，`no-store`，`no-cache`
(这里不同策略的传值方式为，在url后的参数传值)

```js
fs.stat(urlPath, (err, stat) => {
    ...// if err
    var mtime = stat.mtimeMs.toString()
    // 用文件的last modified time 作为 etag
    if (etag === mtime) {
        res.writeHead(304, {
            'Cache-Control': query,
            'Etag': mtime
            })
        return res.end('')
    } else {
        res.writeHead(200, {
            'Cache-Control': query, 
            'Etag': mtime
        })
    }
    ...            
})
```

我们运行server，在`Edge`浏览器打开`隐私窗口`，先取消勾选`Disable Cache`，然后访问`http://localhost:3000`.
可以在**NetWork**下的**Img**里看到有三个请求，可以看到如下内容

| Name         | Status | Size   |
| ------------ | ------ | ------ |
| 0?max-age=10 | 200    | 33.3KB |
| 1?no-store   | 200    | 33.3KB |
| 2?no-cache   | 200    | 33.3KB |

我们在**10秒内刷新网页**，上述内容变为

| Name         | Status | Size       |
| ------------ | ------ | ---------- |
| 0?max-age=10 | 200    | (内存缓存) |
| 1?no-store   | 200    | 33.3KB     |
| 2?no-cache   | 304    | 159B       |

可以看到

- 图1从浏览器内存的cache中取出，因为时间还未到达max-age，缓存未失效，并未向服务器请求
- 图2由于是no-store，再次向服务器请求资源，由于没有保存etag，服务器视其为第一次请求，因此状态与之前一致
- 图3是no-cache，相当于max-age=0，缓存是失效的，于是向服务器请求，请求头中带有etag，服务器核验对应的文件没有被修改过，返回状态码304，并告诉客户端文件未修改，可以继续用缓存的文件数据，所以不再发送文件，实际返回的大小只有159B

在第一次访问**10秒后刷新网页**，上述内容变为

| Name         | Status | Size   |
| ------------ | ------ | ------ |
| 0?max-age=10 | 304    | 161B   |
| 1?no-store   | 200    | 33.3KB |
| 2?no-cache   | 304    | 159B   |

图1和图3均属于缓存失效的，解析参见上述图3

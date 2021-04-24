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

cache=max-age | no-cache | no-store，来控制返回的文件的 cache-control

首先搭建起来一个简单的Node.js 的 [server](./sserver.js)，运行在`3000` 端口，默认返回index.html

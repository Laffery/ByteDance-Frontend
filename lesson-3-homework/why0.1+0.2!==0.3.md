# Why 0.1 + 0.2 !== 0.3 ？

> 😀 敖宇晨[@Laffery](https://github.com/Laffery)

## Getting Started

常识上我们认为$0.1+0.2=0.3$，然而在机器上执行这段代码会得到出人意料的结果

```js
console.log(.1 + .2)
// 0.30000000000000004
```

要解释这个现象，就得从计算机底层说起

## Explanation

我们日常生活中包括我们数学学习中，基本上都是`十进制`，而在机器中，数据都是以`二进制`存储。

在十进制中，想要得到一个整洁的小数，我们考虑10的素因子2和5，由此得到一些整洁的分数$\frac 1 2, \frac 1 4,\frac 1 5, \frac 1 8$。相反，对于不满足上述条件的分数$\frac 1 3, \frac 1 7, \frac 1 9$，显而易见这些分数都是循环的、不整洁的。

我们将同样的思路应用在二进制中，**二进制中能得到所谓整洁的数，需要分母因子全由2的质因子组成，即形如$\frac k {2^i}$**。显然的是，0.3不满足这样的条件，于是在计算过程中就会出现赘余的小数位。

更加根本地，由于浮点数的表示方法限制了浮点数的精度和范围，在某些无法精确表示的情形，如

$$
.2 = \frac{1}{5} = \frac{1}{8} + \frac{1}{16} + \frac{1}{128} + \frac{1}{256} +...
$$

始终存在余量，于是在转化为二进制表示的时候存在`舍入`（rounding）现象。反过来，对于舍入后的结果，再转化为十进制时引入了舍入误差。
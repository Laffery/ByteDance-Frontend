# Lesson 4 Homework

👨‍🎨

## Target

- 无限循环轮播
- 左右拖动
- 上下页
- 懒加载
- 自适应

## Details For Implementation

1. 懒加载

   我的做法是轮播图有且只有`3个`div，即prev, curr, next，其余图片则不加载。

   另一方面，加上`可视区域判定`，即当curr图片被拖拽一定的距离下限`inferior`（20px暂定）时才将左边或者右边的图片背景src设置出来，这时候图片才会被加载。故而实现了简单的懒加载

   其中预留的20px是因为，一拖拽就加载的方式会有短暂的加载空挡，即图片闪白，因而`拖拽下限可以让新图片加载更加顺滑，用户体验更佳`。不过当用户拖拽过快则优化效果并没有很明显

2. 自适应

    不知道我的理解有没有问题，只要将图片作为div的背景并且加上cover属性即可实现图片的尺寸大小自适应卡片大小

3. 上下页

    需要处理的就是边界情况，如index为0是的上一页，这个没什么问题。然后将index的变更绑定到按键的点击事件即可

4. 循环轮播

    很显然我们采用`setInterval`函数，我们将周期设为`2 sec`，这里逻辑上参考课上老师所讲的`可见计时器`例子，使用`useEffect`来消除拉拽及👆👇按钮对计时器的影响

5. 左右拖动

    监听鼠标在轮播卡片上的点击事件，记录点击市的x坐标，监听鼠标移动事件，计算当前x坐标相比点击时的偏移量offset，进而改变轮播卡片的`transform: translateX(xxx px)`，以此实现拖动效果

    我们对拖动设置一系列阈值

    | abs(offset) | description |
    | - | - |
    | 0 | nothing |
    | 0 ~ inferior | load image |
    | inferior ~ threshold | image display |
    | > threshold | image index change |

    以此来说明操作逻辑

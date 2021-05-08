# ByteDance FE Project README

> 👨‍💻

## 项目需求

1. 复刻已有产品
2. 可以在断网的情况下可以正常运行、演示
3. 基本功能要求：
    - 首页 ✅
    - 二级页面 ✅
    - 首页可以导航到二级页面 ✅
    - 支持SSR ✅
4. 高级功能如下
    - 性能优化到足够好（LightHouse的结果）
    - 离线化的支持
    - PWA支持
5. 项目中的关键点
    - Next.js(React Framework) ✅
    - SSR的基本概念和用法 ✅
    - 代码管理和组织 ✅
    - 组件的划分和管理 ✅
    - 异步操作的处理和状态管理
    - 项目的构建、打包优化、发布 ✅
    - 测试

## 说明

1. 本项目复刻已有产品，成品展示如下

    首页
    ![首页](README.assets/image-index.png)

    二级页面
    ![二级页面](README.assets/image-page2.png)

2. 本项目原本设计了爬取*今日头条*网站数据并转发给前端的[后台系统](../lesson-3-homework/Spider/server.js)，但是考虑到**断网的情况下可以正常运行、演示**的要求，最终决定采用写死的数据，但这与本项目中实现的**动态数据显示**并不冲突

3. 本项目采用Next.js框架开发，**自带支持SSR**

4. LightHouse性能优化

5. 代码通过[Github](https://github.com/Laffery/ByteDance-Frontend)持续集成

6. 测试仅采用黑盒测试方法，对页面可用性进行测试

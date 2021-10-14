---
title: 处女座->记录搭建该`blog`遇到的问题
date: 2021-10-10
sidebar: "auto"
categories:
  - vuepress
tags:
  - vuepress
keys:
  - "5452a60329b853edc5b4d4c8d331d025"
publish: true
sticky: 100
---

> 我是摘要，报告完毕

<!--more-->

:::tip
提示的色块
:::

::: warning
This is a warning⚠️
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

---

### 技术栈

在`github`中创建两个仓库，`vuepress-blog`用来存放项目的源代码，`vuepress-blog-dist`用来存放项目打包之后的`dist`文件夹。利用`deploy.sh`脚本自动切换到项目本地的`npm run build`打包之后的 dist 文件夹中，之后通过`git add`、`git commit`、`git push`到`vuepress-blog-dist`仓库上面，自动触发`vercel`进行项目的部署(`vercel`只需要`dist`文件夹)。目前存在的一个问题就是项目的源代码没有和项目打包部署进行同步，未解决(本来是利用`deploy.sh`脚本中进行自动的推送源代码到`vuepress-blog`上面，但是会遇到一个问题就是:如果一次`npm run deploy`操作失败的话呢，就是会有未`push`的`commit`残留,导致下一次运行该命令失败。解决思路的话:判断有没有未推送的`commit`，对它进行回推到未`git add -A`之前（目前不会写判断条件，没时间研究，好吧，主要是我的笔记本还没有置换，太卡不想操作 😅）~~~~或者干脆单独另外再本地提交一次(主要还是嫌麻烦 🦄)

### 遇到报错`Maximum call stack size exceeded... pageMeta is not defined...`

> 解决办法: 就是你写博客那个`[name].md`文件的`name`不可以带有中文字符 😑。好像可以配置一个插件来解决该问题，等有时间我一定要看看(换了新电脑 😭)

<test></test>

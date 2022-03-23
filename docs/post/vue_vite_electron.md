---
layout: Post
title: Vue + Vite + Electron
subtitle: How to give up Web Development? Oh, just give it up.
author: HenryZhu
date: 2022-03-23
useHeaderImage: true
headerImage: /images/vue_vite_electron.png
headerMask: rgb(0,0,0, .5)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - web
---

# Vue + Vite + Electron 做一个跨平台的桌面应用程序

## 安装 Vite

```sh
yarn create vite
```

设置项目名称，并且依次选择 `vue` `vue-ts` 作为模板：
```sh
✔ Project name: … vite-project
✔ Select a framework: › vue
✔ Select a variant: › vue-ts
```

启动项目
```sh
cd vite-project
yarn
yarn dev
```
![vite-start](./vue_vite_electron/images/vite-start.png)

在 `vite.config.ts` 中添加 `base` 配置
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()]
})
```

## 安装 Electron
向新建的项目中添加 Electron
```sh
yarn add --dev electron@latest
```

然后根据[官方文档](https://www.electronjs.org/zh/docs/latest)中的[创建你的应用程序](https://www.electronjs.org/zh/docs/latest/tutorial/quick-start#创建你的应用程序)来添加下列文件
<details>
  <summary>
    <code>main.js</code>
  </summary>

@[code](./vue_vite_electron/src/main.js)

</details>


在根目录下添加 Electron 启动入口文件 `main.js`

[在窗口中打开您的页面](https://www.electronjs.org/zh/docs/latest/tutorial/quick-start#在窗口中打开您的页面)
```js
const { app, BrowserWindow } = require('electron')
```


睡觉😪，明天再写🌙




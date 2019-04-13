# vue-ssr-starter

> Vue 服务器端渲染项目起手式

### 关于ssr

> 服务器端渲染的 **Vue.js** 应用程序，是使 **vue** 应用既可以在客户端（浏览器）执行，也可以在服务器端执行，我们称之为“同构”或“通用”技术。之所以能够实现同构，是因为在客户端和服务端都创建了 **vue** 应用程序，并都用 **webpack** 进行打包，生成了**server bundle**和**client manifest**两个**json**文件。**server bundle**用于服务器渲染，**client manifest**是一个客户端的静态标记，服务器渲染好**html**页面片段后，会发送给客户端，然后混合客户端静态标记，这样应用就具有**vue**应用的特性。
![流程图](https://ws1.sinaimg.cn/large/005Yd2Thly1fl9ko1nf2yj30zz0il0xb.jpg)

### 安装项目依赖
```
  npm install or yarn
```

### 启动客户端应用
> 启动客户端项目，运行 **client-entry.js** 脚本，不走服务器端渲染
```
  npm run serve
```

### 项目构建
> 项目构建生成**server bundle**和**client manifest**两个**json**文件
```
  npm run build:client // 客户端应用构建
  npm run build:server // 服务器应用构建
  npm run build // 完整的构建（包含客户端和服务器端构建）
```

### 服务器端项目启动
> 项目构建好之后，就可以运行服务器端渲染好的应用。每次会执行 **client-entry.js** 脚本
```
  npm start
```
### changelog生成
```
  npm run changelog
```
### 测试用例
```
  npm run test
```

### 代码检查
```
  npm run lint
```

### 其他配置
See [Configuration Reference](https://cli.vuejs.org/config/).


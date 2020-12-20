# 2021 必修：React + React Hook + TS 最佳实践仿 Jira 企业级项目
专属开发者工具

# 安装与使用：
```
npx imooc-jira-tool
```

```
import { loadDevTools } from "jira-dev-tool";

loadDevTools(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
```

# 两大功能介绍

### 1. 分布式后端服务
传统教学项目后端服务的两大问题：
1. 服务脆弱，请求次数有限，不稳定，如果down掉学员就没法使用了
2. 学员对后端数据库的控制有限，比如没法轻易地重置数据库

这个开发者工具用 [MSW](https://github.com/mswjs/msw) 以 [Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API) 为原理实现了"分布式后端"

即：

1. 所有请求被Service Worker代理
[![rU5enx.png](https://s3.ax1x.com/2020/12/20/rU5enx.png)](https://imgchr.com/i/rU5enx)
2. 后端逻辑处理后，以localStorage为数据库进行增删改查操作
[![rU558J.png](https://s3.ax1x.com/2020/12/20/rU558J.png)](https://imgchr.com/i/rU558J)

这样每个同学的浏览器上都安装了一个独立的后端服务和数据库，再也不受任何中心化服务的影响
点击'清空数据库'便可以重置后端服务
[![rUIdqx.png](https://s3.ax1x.com/2020/12/20/rUIdqx.png)](https://imgchr.com/i/rUIdqx)

### 2. HTTP 请求精准控制
项目的健壮性被很多教学项目忽视，而作为一个最佳实践的项目，健壮性是一个被重点关注的点

这个开发者工具可以精准地控制 HTTP请求的时间、失败概率、失败规则

[![rUHjc4.png](https://s3.ax1x.com/2020/12/20/rUHjc4.png)](https://imgchr.com/i/rUHjc4)







# 2022 Discrete Math Learning Platform · Web

[![CI](https://github.com/mengmengjiang1999/2022-discrete-math-learning-platform-web/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mengmengjiang1999/2022-discrete-math-learning-platform-web/actions/workflows/ci.yml)

离散数学智能教学平台的 Web 前端。项目以图算法练习为核心，将随机题目、图结构展示、在线答案判定和学习记录整合为一套清晰的学习体验。

仓库名保留 `2022` 前缀以延续原项目的时间与毕业设计背景；当前前端已经完成现代化重构。

- 前端：[`2022-discrete-math-learning-platform-web`](https://github.com/mengmengjiang1999/2022-discrete-math-learning-platform-web)
- 后端：[`2022-algorithm-learning-platform`](https://github.com/mengmengjiang1999/2022-algorithm-learning-platform)

## 功能

- 基于后端会话的登录、登录状态查询与退出
- 单源最短路、旅行商、支撑树计数和根树计数练习
- 随机题目获取、图示展示与在线答案判定
- 未完成题目续答、最近一次答案展示
- 学习记录、完成状态与正确率统计
- 桌面端与移动端响应式界面
- 路由鉴权、加载状态和请求异常反馈

> 注册接口按后端当前业务策略保持关闭，请使用管理员提供的账户或后端脱敏样例账户。

## 技术栈

| 类别      | 技术                                     |
| --------- | ---------------------------------------- |
| 前端框架  | Vue 3、Composition API、`<script setup>` |
| 开发语言  | TypeScript                               |
| 路由      | Vue Router                               |
| 网络请求  | Axios                                    |
| 构建工具  | Vite                                     |
| 代码质量  | ESLint、Prettier                         |
| 测试与 CI | Vitest、GitHub Actions                   |

## 快速开始

### 1. 获取前后端代码

```bash
git clone https://github.com/mengmengjiang1999/2022-algorithm-learning-platform.git
git clone https://github.com/mengmengjiang1999/2022-discrete-math-learning-platform-web.git
```

### 2. 启动后端

后端需要 Python、`g++`、Graphviz 和 Pandoc。完整安装和数据库准备步骤见[后端 README](https://github.com/mengmengjiang1999/2022-algorithm-learning-platform#本地运行)。

后端默认监听：

```text
http://127.0.0.1:5000
```

### 3. 启动前端

前端要求 Node.js 22.22.2 或更高版本。

```bash
cd 2022-discrete-math-learning-platform-web
npm install
cp .env.example .env.local
npm run dev
```

浏览器访问：

```text
http://127.0.0.1:2333
```

开发环境下，Vite 会将 `/api/*` 转发至 `http://127.0.0.1:5000/*`，并在转发时移除 `/api` 前缀。

## 环境变量

| 变量                | 默认值                  | 说明                                  |
| ------------------- | ----------------------- | ------------------------------------- |
| `VITE_API_BASE_URL` | `/api`                  | 浏览器访问 API 时使用的地址或路径前缀 |
| `VITE_API_TARGET`   | `http://127.0.0.1:5000` | Vite 开发服务器代理的后端地址         |

本地覆盖示例：

```dotenv
VITE_API_BASE_URL=/api
VITE_API_TARGET=http://127.0.0.1:5000
```

不要在 `VITE_*` 变量中存放密钥；这些值会进入浏览器构建产物。

## 常用命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 类型检查并构建生产包
npm run preview      # 预览生产构建
npm run lint         # 执行 ESLint
npm run format       # 使用 Prettier 格式化
npm run format:check # 检查代码格式
npm test             # 运行单元测试
```

## 项目结构

```text
.
├── .github/workflows/ # 持续集成
├── public/            # 无需构建的公共资源
├── src/
│   ├── components/    # 通用状态组件
│   ├── composables/   # 登录状态等组合式逻辑
│   ├── services/      # API 客户端、类型与测试
│   ├── styles/        # 全局视觉与响应式样式
│   ├── views/         # 首页、登录、题目和记录页面
│   ├── App.vue        # 应用布局与导航
│   ├── main.ts        # 应用入口
│   └── router.ts      # 路由及鉴权守卫
├── .env.example       # 环境变量模板
├── index.html         # Vite HTML 入口
├── package.json       # 依赖与脚本
└── vite.config.ts     # Vite、代理与测试配置
```

## 前后端接口

| 方法   | 后端路径         | 用途           | 是否需要登录 |
| ------ | ---------------- | -------------- | ------------ |
| `GET`  | `/login_status`  | 查询登录状态   | 否           |
| `POST` | `/login`         | 登录           | 否           |
| `POST` | `/logout`        | 退出登录       | 是           |
| `GET`  | `/access`        | 记录访问次数   | 否           |
| `GET`  | `/problemlist`   | 获取题目类型   | 是           |
| `GET`  | `/algorithm`     | 创建或读取题目 | 是           |
| `POST` | `/algorithm`     | 提交答案       | 是           |
| `GET`  | `/algorithm_fig` | 获取题目图示   | 是           |
| `GET`  | `/records`       | 获取学习记录   | 是           |

请求参数和响应结构以[后端 API 文档](https://github.com/mengmengjiang1999/2022-algorithm-learning-platform/blob/0601/API.md)为准。

## 生产部署

构建前端：

```bash
npm ci
npm run build
```

将生成的 `dist/` 目录作为静态站点发布。服务器需要：

1. 将前端 History 路由回退到 `index.html`。
2. 将 `/api/*` 反向代理至 Flask 后端并移除 `/api` 前缀。

Nginx 示例：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location /api/ {
    proxy_pass http://127.0.0.1:5000/;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

如果前后端位于不同域名，请将 `VITE_API_BASE_URL` 设置为完整后端地址，并在 Flask 端配置允许凭据的 CORS、Cookie `SameSite` 和 HTTPS 策略。

## 数据与安全

- 仓库不提交 `.env`、构建产物、日志、数据库或编辑器配置。
- 页面不依赖第三方 CDN，减少外部可用性和浏览隐私风险。
- 后端返回的题面 HTML 在受限 `iframe` 中展示，不直接注入主页面。
- 前端不保存密码和会话凭据；登录态由后端 Cookie 会话管理。

## 当前边界

- 这是图算法教学原型的前端，不是支持用户代码执行的在线判题沙箱。
- 当前包含学生练习与记录界面，后端课程、作业和推荐接口尚未接入前端。
- 注册暂未开放，账户和数据准备请参考后端说明。

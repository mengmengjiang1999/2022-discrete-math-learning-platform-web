# 2022 离散数学智能教学平台 · Web

`2022-discrete-math-learning-platform-web` 是离散数学智能教学平台的现代化前端。项目提供随机算法题、在线答案判定和学习记录，需配合后端仓库 [2022-algorithm-learning-platform](https://github.com/mengmengjiang1999/2022-algorithm-learning-platform) 使用。

## 技术栈

- Vue 3 + Composition API + TypeScript
- Vue Router 单页路由
- Vite 构建与开发代理
- Axios API 客户端
- ESLint、Prettier、Vitest

## 本地开发

要求 Node.js 22.22.2 或更高版本。

```bash
npm install
cp .env.example .env.local
npm run dev
```

默认开发地址为 `http://127.0.0.1:2333`，Vite 会把 `/api/*` 转发到 `http://127.0.0.1:5000/*`。若后端地址不同，请修改 `.env.local`：

```dotenv
VITE_API_TARGET=http://127.0.0.1:5000
```

## 常用命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 类型检查并构建生产包
npm run preview      # 本地预览生产包
npm run lint         # 代码检查
npm run format:check # 格式检查
npm test             # 单元测试
```

## 部署

执行 `npm run build` 后，将 `dist/` 作为静态站点发布。服务端需完成两项配置：

1. 所有非静态文件路由回退到 `index.html`，以支持 History 路由。
2. 将 `/api/*` 反向代理到 Flask 后端，并移除 `/api` 前缀。

Nginx 示例：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location /api/ {
    proxy_pass http://127.0.0.1:5000/;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

如前后端部署在不同域名，可把 `VITE_API_BASE_URL` 设为完整后端地址，并在后端正确配置 CORS 与 Cookie 策略。

## API 约定

前端使用以下后端接口：

| 方法   | 路径            | 用途           |
| ------ | --------------- | -------------- |
| `GET`  | `/login_status` | 查询登录状态   |
| `POST` | `/login`        | 登录           |
| `POST` | `/logout`       | 退出登录       |
| `GET`  | `/problemlist`  | 获取题目类型   |
| `GET`  | `/algorithm`    | 创建或读取题目 |
| `POST` | `/algorithm`    | 提交答案       |
| `GET`  | `/records`      | 获取学习记录   |

注册功能与后端当前策略一致，暂不对外开放。

## 仓库说明

- 本仓库只包含前端源码，不提交环境变量、构建产物、日志或编辑器配置。
- 页面不依赖第三方 CDN，避免部署时的外部可用性与隐私问题。
- 不要把密钥放进 `VITE_*` 变量；这类变量会被打包到浏览器代码中。

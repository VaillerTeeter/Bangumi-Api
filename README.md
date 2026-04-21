# bangumi-api-client

基于 [Bangumi 官方 OpenAPI 规范](https://bangumi.github.io/api/) 自动生成的 TypeScript 客户端库，可作为依赖供其他项目调用。

## 特性

- 全量覆盖 Bangumi API（条目、章节、角色、人物、用户、收藏、编辑历史、目录）
- 完整 TypeScript 类型定义，由 OpenAPI 规范自动生成
- 基于 `@hey-api/openapi-ts` 构建，规范更新时一键重新生成

## 目录结构

```text
.
├── src/
│   ├── index.ts              # 封装入口（configureBangumiClient 等）
│   └── generated/            # 自动生成，勿手动修改
│       ├── client.gen.ts     # 预配置的 fetch 客户端
│       ├── sdk.gen.ts        # 所有 API 请求函数
│       ├── types.gen.ts      # 所有 TypeScript 类型定义
│       └── index.ts          # 统一 re-export
├── dist/                     # 编译产物，提交到 git 供消费方使用
├── openapi-ts.config.ts      # 代码生成配置
├── tsconfig.json
└── package.json
```

## 本地配置

1. 复制 Token 模板文件：

   ```powershell
   Copy-Item .env.example .env
   ```

2. 编辑 `.env`，填入你的 GitHub Personal Access Token：

   ```ini
   GH_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   ```

   > Token 申请地址：GitHub → Settings → Developer settings → Personal access tokens

3. 加载环境变量（每次新开终端执行一次）：

   ```powershell
   $content = Get-Content .env; foreach ($line in $content) { if ($line -match "^GH_TOKEN=(.+)$") { $env:GH_TOKEN = $Matches[1] } }
   ```

4. 验证配置：

   ```powershell
   gh auth status
   ```

---

## 对于消费方

在你的项目中将此库作为依赖安装：

```bash
yarn add github:VaillerTeeter/bangumi-api-client
```

`dist/` 已预编译并提交到仓库，安装后无需任何额外步骤。

### 初始化

```ts
import { configureBangumiClient } from 'bangumi-api-client';

configureBangumiClient(
  'your-access-token',  // 申请地址：https://next.bgm.tv/demo/access-token
  'YourApp/1.0 (https://github.com/yourname/yourapp)', // User-Agent，必填
);
```

### 调用 API

```ts
import { getSubjectById, searchSubjects } from 'bangumi-api-client';

// 获取条目详情
const subject = await getSubjectById({ path: { subject_id: 400602 } });
console.log(subject.data?.name);

// 搜索条目
const results = await searchSubjects({
  body: { keyword: '新世纪福音战士' },
});
console.log(results.data?.data);
```

---

## 对于维护方

### 环境初始化（首次 clone 后）

```bash
yarn install
```

### 更新 API 并发布

当 Bangumi 官方更新 OpenAPI 规范时，运行：

```bash
yarn build
```

`build` 会自动依次执行：

1. `yarn generate` — 拉取最新 OpenAPI 规范，刷新 `src/generated/`
2. `tsc` — 编译出 `dist/`

完成后将 `src/generated/` 和 `dist/` 一并提交即可。

如只想刷新 `src/generated/` 而不编译：

```bash
yarn generate
```

---

## 相关链接

- [Bangumi API 文档](https://bangumi.github.io/api/)
- [bangumi/api 仓库](https://github.com/bangumi/api)
- [Access Token 申请](https://next.bgm.tv/demo/access-token)
- [User-Agent 规范](https://github.com/bangumi/api/blob/master/docs-raw/user%20agent.md)

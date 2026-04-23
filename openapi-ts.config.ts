import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  // 直接从官方仓库拉取最新 OpenAPI 规范
  input: 'https://raw.githubusercontent.com/bangumi/api/master/open-api/v0.yaml',
  output: {
    path: 'src/generated',
  },
  plugins: [
    // 生成 TypeScript 类型（types.gen.ts）
    '@hey-api/typescript',
    // 生成原始 SDK 函数（sdk.gen.ts），按 operationId 命名
    {
      name: '@hey-api/sdk',
      operations: { nesting: 'operationId' },
    },
    // 使用 @hey-api/client-fetch 作为 HTTP 客户端（client.gen.ts）
    '@hey-api/client-fetch',
  ],
});

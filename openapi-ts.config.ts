import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'https://bangumi.github.io/api/dist.json',
  output: 'src/generated',
});

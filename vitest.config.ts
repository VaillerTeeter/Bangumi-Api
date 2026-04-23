import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => ({
  test: {
    globals: true,
    testTimeout: 15000,
    env: loadEnv(mode, process.cwd(), ''),
    reporter: 'verbose',
    fileParallelism: false,
  },
}));

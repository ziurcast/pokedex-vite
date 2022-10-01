import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import postcss from './postcss.config.cjs';

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    build: {
      rollupOptions: {
        external: [/^node:.*/],
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
    css: {
      postcss,
    },
  });
};

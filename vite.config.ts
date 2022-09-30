import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import postcss from './postcss.config.cjs';

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@tailwind-config': path.resolve(__dirname, './tailwind.config.cjs'),
      },
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
    server: {
      proxy: {
        '^/assets': {
          target: 'http://localhost:3000/',
        },
      },
    },
    css: {
      postcss,
    },
  });
};

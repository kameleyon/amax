import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    cors: true,
    proxy: {
      '/api/play-ht': {
        target: 'https://api.play.ht',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/play-ht/, '/api/v2'),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
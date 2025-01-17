import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'ChatWidget',
      fileName: 'chat-widget',
      formats: ['iife'], // 즉시 실행 함수 형태
    },
    rollupOptions: {
      output: {
        assetFileNames: 'chat-widget.css', // CSS 파일 이름
      },
    },
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '~', replacement: fileURLToPath(new URL('./', import.meta.url)) },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"@/styles/style.scss\";",
      }
    }
  }
})

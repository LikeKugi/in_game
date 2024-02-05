import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/': {
        target: 'http://95.140.156.17:8085/api/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
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

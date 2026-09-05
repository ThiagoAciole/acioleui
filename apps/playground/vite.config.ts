
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Aponta para o source da lib local para hot reload durante dev
      'acioleui': path.resolve(__dirname, '../../packages/ui/src/index.ts'),
      'acioleui/icons': path.resolve(__dirname, '../../packages/ui/src/entrypoints/icons.ts'),
      '/src/icons': path.resolve(__dirname, '../../packages/ui/src/icons'),
    },
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..']
    }
  },
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from '@tailwindcss/vite'

const isDev = process.env.NODE_ENV !== 'production'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    ...(isDev ? vueDevTools : [])
  ],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

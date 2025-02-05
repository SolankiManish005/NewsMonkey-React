import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/NewsMonkey-React/",
  define: {
    'process.env.VITE_APP_NEWS_API':process.env.VITE_APP_NEWS_API
     // __APP_ENV__: env.APP_ENV
  }
})

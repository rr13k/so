import { defineConfig } from 'vite'
import path from 'path'
import viteSass from 'vite-plugin-sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteSass()
  ],
  server:{
    open: "index.html" 
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src')
    }
  }
})
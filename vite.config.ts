import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  root: 'src/pages',
  base: "/",
  publicDir: resolve(__dirname, 'public'),
  server: {
    open: '/'
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'pages', 'index.html'),
        access: resolve(__dirname, 'src', 'pages', 'access', 'index.html')
      }
    }
  }
})

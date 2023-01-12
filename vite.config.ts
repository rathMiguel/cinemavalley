import { resolve } from "path"
import { defineConfig } from "vite"
import { ViteEjsPlugin } from "vite-plugin-ejs"

export default defineConfig({
  root: 'src/pages',
  base: "/",
  publicDir: resolve(__dirname, 'public'),
  server: {
    open: false
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'pages', 'index.html'),
        reservation: resolve(__dirname, 'src', 'pages', 'reservation', 'index.html'),
        access: resolve(__dirname, 'src', 'pages', 'access', 'index.html'),
      }
    }
  },
  plugins: [
    ViteEjsPlugin((viteConfig) => {
      return {
        siteUrl: "https://cinemavalley.net",
        title: "森のスープ屋の夜"
      }
    })
  ]
})

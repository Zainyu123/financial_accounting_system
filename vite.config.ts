import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    server: {
      host: '0.0.0.0', // 主要是host这个配置
      port: 5177, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      hmr: {
        overlay: false // 禁用服务器错误遮罩层
      },
      proxy: {
      // 例如： /api/user -> http://localhost:3000/user
      '/system': { // 代理路径, 匹配的请求路径的前缀，对应的是.env.development中的VITE_BASE_API
        target: 'http://localhost:8080', // 代理目标地址(实际的开发环境的服务端地址)
        changeOrigin: true, // 允许跨域
        // 重写路径 -> 去掉/api前缀
        // rewrite: (path) => path.replace(/^\/system/, '')
      }
    }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
    }
})

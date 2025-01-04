import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
// https://vite.dev/config/
// const env = loadEnv(mode,process.cwd())
// 不同环境下的地址
export default defineConfig({
  plugins: [vue(),
    createSvgIconsPlugin({
      // 配置选项
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }) ,
    viteMockServe({
      mockPath: "./mock",
      localEnabled: true,
    })
  ],
  // 设置代理
   server:{
    proxy:{
      '/api':{
        target:'',
        changeOrigin: true,
      }
    }
   },
  resolve: {
    alias: {
      '@': path.resolve('./src'),  //相对路径别名，使用@代替src
    },
  },
  // scss全局配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  }
})

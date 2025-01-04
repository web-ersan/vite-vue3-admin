import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import App from './App.vue'
import '@/styles/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:svg-icons-register'
// 路由鉴权
import './permission'
import { pinia } from './store'
import globalComponents from '@/components/index'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(globalComponents)
app.use(ElementPlus)
app.mount('#app')
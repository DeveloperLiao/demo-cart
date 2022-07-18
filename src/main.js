import { createApp } from 'vue'
import App from './App.vue'
// 引入bootstrap
import './assets/css/bootstrap.min.css'
import './index.css'
//引入axios
import axios from 'axios'
// 导入封装的函数
import getTotall from './utils/compute.js'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net/'
const app = createApp(App)
// 声明axios为全局属性
app.config.globalProperties.$http = axios
app.config.globalProperties.$getTotall = getTotall
app.mount('#app')

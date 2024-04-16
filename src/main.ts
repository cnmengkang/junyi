import { createApp } from 'vue'
import './style.css'
import naive from 'naive-ui'
import router from './route'
import App from './App.vue'
// 等宽字体
let app = createApp(App)
app.use(naive)
app.use(router)
app.mount('#app')

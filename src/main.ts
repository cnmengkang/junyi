import { createApp } from 'vue'
import './style.css'
import naive from 'naive-ui'
import router from './route'
import App from './App.vue'
import i18n from './language/index.ts';
// 等宽字体
let app = createApp(App)
app.use(i18n)
app.use(naive)
app.use(router)
app.mount('#app')

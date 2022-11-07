import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入饿了么UI-plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
// 引入饿了么UI 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'

const app = createApp(App)
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

// 挂载axios
app.config.globalProperties.$http=axios;

app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')

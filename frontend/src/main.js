import { createApp } from 'vue'
import router from './route'
import App from './App.vue'
import { createPinia } from 'pinia'
import './index.css'
import 'vue-toastification/dist/index.css';

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

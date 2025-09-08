import { createApp } from 'vue'
import router from './route'
import App from './App.vue'
import './index.css'
import 'vue-toastification/dist/index.css';

const app = createApp(App)
app.use(router)
app.mount('#app')

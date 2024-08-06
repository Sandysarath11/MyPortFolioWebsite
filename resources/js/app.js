import './bootstrap';
import { createApp } from 'vue';
import app from '../js/components/app.vue'
import router from './routers';


createApp(app).use(router).mount('#app')

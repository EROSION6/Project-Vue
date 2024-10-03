import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import photoModule from './store/photoModule'

createApp(App).use(photoModule).use(router).mount('#app')

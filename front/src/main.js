import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import {Vue3Mq} from 'vue3-mq'

createApp(App).use(router).use(Vue3Mq,{
    preset: 'bootstrap5'})
    .mount('#app')

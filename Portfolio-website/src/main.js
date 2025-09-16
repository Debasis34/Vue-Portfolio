import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {Icon} from '@iconify/vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Countup from 'vue-countup-v3'



AOS.init({duration:1000});
const app = createApp(App).component('Icon', Icon).component('Countup', Countup)
AOS.refresh();



app.use(createPinia())
app.use(router)

app.mount('#app')

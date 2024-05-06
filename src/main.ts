import { createApp } from 'vue'

import './assets/demo.scss'
import "@/assets/gamepad.scss"

import App from './App.vue'
import {plugins} from "@/plugins";

createApp(App)
    .use(plugins)
    .mount('#app')

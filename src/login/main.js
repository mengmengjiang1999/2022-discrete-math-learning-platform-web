import { createApp } from 'vue'
import App from './Login.vue'

import axios from 'axios'
axios.defaults.baseURL='/api/'

createApp(App).mount('#login')

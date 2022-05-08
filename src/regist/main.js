import { createApp } from 'vue'
import App from './Regist.vue'

import axios from 'axios'
axios.defaults.baseURL='/api/'

createApp(App).mount('#regist')

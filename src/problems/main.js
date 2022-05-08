import { createApp } from 'vue'
import App from './Problems.vue'

import axios from 'axios'
axios.defaults.baseURL='/api/'

createApp(App).mount('#problems')

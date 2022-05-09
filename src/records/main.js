import { createApp } from 'vue'
import App from './Records.vue'

import axios from 'axios'
axios.defaults.baseURL='/api/'

createApp(App).mount('#records')

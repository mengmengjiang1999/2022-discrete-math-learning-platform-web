import { createApp } from 'vue'
import App from './Problem.vue'

import axios from 'axios'
axios.defaults.baseURL='/api/'

createApp(App).mount('#problem')

import { createApp } from 'vue'
import App from './Regist.vue'

import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:8080/api/'

createApp(App).mount('#regist')

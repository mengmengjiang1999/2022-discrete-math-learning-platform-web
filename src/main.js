import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue'
// import router from './router'

import axios from 'axios'	       // 引入 axios

import VueAxios from 'vue-axios'

// axios.defaults.baseURL='http://localhost:5000/'
axios.defaults.baseURL='/api'

createApp(App).mount('#app')

const app = Vue.createApp(App)
app.use(VueAxios, axios)

// new Vue({
//     el: '#app',
//     router,
//     components: { App },
//     template: '<App/>',
// })
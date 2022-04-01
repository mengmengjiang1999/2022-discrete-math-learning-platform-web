import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue'

import axios from 'axios'	       // 引入 axios

import VueAxios from 'vue-axios'

import {createRouter, createWebHashHistory} from 'vue-router'

// Vue.use(VueRouter)

// import routers from './router'

// const router = new VueRouter({
//     mode: 'history',
//     routes: routers,
// })


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: App },
    { path: '/app', component: App },
  ]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// axios.defaults.baseURL='http://localhost:5000/'
axios.defaults.baseURL='/api'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')

// new Vue({
//     el: '#app',
//     // router,
//     components: { App },
//     template: '<App/>',
// })

// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App)
//   })
import { createApp } from 'vue'
// import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
// import Login from './Login.vue'

// // import Vue from 'vue'
// import HelloPage from './components/HelloPage.vue'

import axios from 'axios'	       // 引入 axios

// // import VueAxios from 'vue-axios'

// import { createRouter, createWebHashHistory, Router} from 'vue-router'

// // Vue.use(VueRouter)

// // import routers from './router'

// // const router = new VueRouter({
// //     mode: 'history',
// //     routes: routers,
// // })


// // 2. 定义一些路由
// // 每个路由都需要映射到一个组件。
// // 我们后面再讨论嵌套路由。
// const routes = [
//     { path: '/login', component: Login },
//     { path: '/app', component: App },
//     { path: '/', component: App },
// ]
// // import routes from './router'

// // 3. 创建路由实例并传递 `routes` 配置
// // 你可以在这里输入更多的配置，但我们在这里
// // 暂时保持简单
// const router = createRouter({
//     // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//     history: createWebHashHistory(),
//     routes, // `routes: routes` 的缩写
// })


// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = { template: '<div>Home</div>' }

// import Home from './views/Home'

// const About = { template: '<div><router-views><p><router-link to="/">Go to Home</router-link><router-link to="/test">Go to Test</router-link></p></router-views></div> '}

// const Test = { template: '<div>tttt</div> '}

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
// const routes = [
// { 
//     path: '/', 
//     component: About,
// },
//   {
//     path: '/home',
//     name: 'Home',
//     component: Home,
//     meta: {
//       title: 'haha' // debug
//     }
//   },
//   { path: '/about', component: About },
//   { path: '/test', component: Test },
//   // { path: '/hellopage', component: HelloPage },
//   // { path: '/app', component: App },  

// ]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
// const router = createRouter({
//   // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//   history: createWebHashHistory(),
//   routes, // `routes: routes` 的缩写
// })

axios.defaults.baseURL='http://127.0.0.1:8080/api/'
// axios.defaults.baseURL='/api'

// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
// app.use(router)

app.mount('#app')

// 现在，应用已经启动了！
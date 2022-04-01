<template>
  <div id="app">
    <hello-page></hello-page>
    <login-page></login-page>
    <regist-page></regist-page>
    <logout-page></logout-page>
    <clear-ssession></clear-ssession>
    <problem-list></problem-list>
    <dijkstra></dijkstra>
  </div>
</template>


<script>

import HelloPage from './components/HelloPage.vue'
// import TimeNow from './components/TimeNow.vue'
import ProblemList from './components/ProblemList.vue'
import Dijkstra from './components/Dijkstra.vue'
import LoginPage from './components/LoginPage.vue'
import RegistPage from './components/RegistPage.vue'
import LogoutPage from './components/LogoutPage.vue'
import ClearSsession from './components/ClearSession.vue'

export default {
  name: 'App',
  components: {
    HelloPage,
    // TimeNow,
    LoginPage,
    RegistPage,
    ProblemList,
    Dijkstra,
    // LoginPage,
    LogoutPage,
    ClearSsession,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

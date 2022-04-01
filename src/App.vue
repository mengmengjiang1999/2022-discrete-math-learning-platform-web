<template>
  <div id="app">
    <hello-page></hello-page>
    <!-- <time-now></time-now> -->
    <problem-list></problem-list>
    <dijkstra></dijkstra>
  </div>
</template>


<script>

import HelloPage from './components/HelloPage.vue'
// import TimeNow from './components/TimeNow.vue'
import ProblemList from './components/ProblemList.vue'
import Dijkstra from './components/Dijkstra.vue'

export default {
  name: 'App',
  components: {
    HelloPage,
    // TimeNow,
    ProblemList,
    Dijkstra,
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

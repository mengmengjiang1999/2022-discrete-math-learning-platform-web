<template>
  <div id="app">
    <!-- <h1>My To-Do List</h1>
    <ul>
      <li>
        <to-do-item label="My ToDo Item" :done="true"></to-do-item>
      </li>
    </ul> -->
    <hello-page></hello-page>
    <time-now></time-now>
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ToDoItem from './components/ToDoItem.vue'
import HelloPage from './components/HelloPage.vue'
import TimeNow from './components/TimeNow.vue'

export default {
  name: 'App',
  components: {
    HelloPage,
    TimeNow,
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

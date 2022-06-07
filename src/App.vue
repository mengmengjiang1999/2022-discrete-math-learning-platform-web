<template>
  <direct-bar></direct-bar>
  <div class="container mt-5 mb-5">
    <div class="row pt-5">
      <div class="col-6 pt-3">
        <hello-page></hello-page>
        <login-status></login-status>
      </div>
      <div class="col-6">
        <img src="./assets/images/gougou.jpeg" class="img-fluid" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

import HelloPage from "./components/HelloPage.vue";
import ProblemList from "./components/ProblemList.vue";
import Dijkstra from "./components/Dijkstra.vue";
import RegistPage from "./components/RegistPage.vue";
import LoginPage from "./components/LoginPage.vue";
import LogoutPage from "./components/LogoutPage.vue";
import DirectBar from "./components/DirectBar.vue";
import GotoButton from "./components/GotoButton.vue";
// import StatusBar from './components/StatusBar.vue'
import LoginStatus from "./components/LoginStatus.vue";

export default {
  name: "App",
  components: {
    HelloPage,
    RegistPage,
    ProblemList,
    Dijkstra,
    LoginPage,
    LogoutPage,
    DirectBar,
    GotoButton,
    // StatusBar,
    LoginStatus,
  },
  created() {
    axios.get('/access');
  },
  methods: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

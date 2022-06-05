<template>
  <div>
    <direct-bar></direct-bar>
    <!-- <div class="container"> -->
    <!-- <div class="col-md-6 offset-md-3"> -->
      <hello-page></hello-page>
      <login-status></login-status>
    <!-- </div> -->
    <!-- </div> -->
    
    <!-- <status-bar></status-bar> -->
    <!-- <status-bar :username="username"></status-bar> -->
    <logout-page></logout-page>
    <!-- <problem-list></problem-list> -->
  </div>
</template>


<script>

import HelloPage from './components/HelloPage.vue'
import ProblemList from './components/ProblemList.vue'
import Dijkstra from './components/Dijkstra.vue'
import RegistPage from './components/RegistPage.vue'
import LoginPage from './components/LoginPage.vue'
import LogoutPage from './components/LogoutPage.vue'
import DirectBar from './components/DirectBar.vue'
import GotoButton from './components/GotoButton.vue'
// import StatusBar from './components/StatusBar.vue'
import LoginStatus from './components/LoginStatus.vue'

export default {
  name: 'App',
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
  created(){
  },
  methods:{
    login_status(){
      axios.post('/login_status')
          .then((res) => {
          console.log(res.data)
          if(res.data['status'][0]==true){
              // this.$router.push('/home')
              // <Redirect to="/" />
              console.log("success")
              window.location.href = "/";
          }else{
              console.log("wrong!")
          }
      })
    }
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
  /* margin-top: 60px; */
}
</style>

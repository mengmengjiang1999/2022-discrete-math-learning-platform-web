<template>
  <div>
      <!-- LOGIN -->
    <!-- <router-view></router-view> -->
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>

    <regist-page></regist-page>

    <h3>Login</h3>
    <ul>
      <li><a href="/login" rel="noopener">Login</a></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"


import RegistPage from "./../components/RegistPage.vue"

export default {
    components:{
      RegistPage,
    },
    methods: {
      // submit() {
      //     console.log("post: this.username "+this.username)
      //     console.log("post: this.password "+this.password)
      //     let data = {
      //         'username': this.username,
      //         'password': this.password,
      //     }
      //     console.log(data)
      //     axios.post('/regist', data)
      //         .then((res) => {
      //         console.log(res.data)
      //     })
      // }
  }
}
</script>
<template>
  <div>
      <!-- LOGIN -->
    <!-- <router-view></router-view> -->
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>

    <!-- 输入框 -->
    <form v-on:submit.prevent="submit()">
      <tr><input placeholder="用户名" maxlength="15" type="text" v-model="username" /></tr>
      <tr><input placeholder="密码" maxlength="15" type="text" v-model="password" /></tr>
      <tr><button type="submit" class="ui-button" ><span>登录</span></button></tr>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
//   data(){
//     return {
//         username: this.username,
//         password: this.password,
//     }
//   },
//   created(){
//   },
//     methods: {
//       submit() {
//           console.log("post: this.username "+this.username)
//           console.log("post: this.password "+this.password)
//           let data = {
//               'username': this.username,
//               'password': this.password,
//           }
//           console.log(data)
//           axios.post('/login', data)
//               .then((res) => {
//               console.log(res.data)
//           })
//       }
//   }
}
</script>
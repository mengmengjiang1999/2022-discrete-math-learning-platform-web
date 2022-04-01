<template>
  <div>
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>

    <!-- 输入框 -->
    <form v-on:submit.prevent="submit()">
      <tr><input placeholder="用户名" maxlength="15" type="text" v-model="username" /></tr>
      <tr><input placeholder="密码" maxlength="15" type="text" v-model="password1" /></tr>
      <tr><input placeholder="确认密码" maxlength="15" type="text" v-model="password2" /></tr>
      <tr><input placeholder="邮箱" maxlength="15" type="text" v-model="email" /></tr>
    <tr><button type="submit" class="ui-button" ><span>注册</span></button></tr>
    </form>

  </div>
</template>

<script>
import axios from "axios"

// import marked from 'marked';
export default {
  // name: 'HelloPage',
  // path: '/algorithm/dijkstra',
  // image: "http://127.0.0.1:5000/images/000.png",
  data(){
    return {
        username: this.username,
        password1: this.password1,
        password2: this.password2,
        email: this.email,
    }
  },
  created(){

  },
    methods: {
      submit() {
          let data = {
              'username': this.username,
              'password1': this.password1,
              'password2': this.password2,
              'email': this.email,
          }
          console.log(data)
          axios.post('/regist', data)
              .then((res) => {
              console.log(res.data)
          })
      }
  }
}
</script>
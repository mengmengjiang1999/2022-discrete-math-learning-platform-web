<template>
  <div>
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>

    <!-- 输入框 -->
    <form v-on:submit.prevent="submit()">
      <tr><input placeholder="用户名" maxlength="15" type="text" v-model="username" /></tr>
      <tr><input placeholder="密码" maxlength="15" type="text" v-model="password" /></tr>
      <!-- <tr><button type="submit" class="ui-button" ><span>登录</span></button></tr> -->
      <button type="submit" class="btn btn-secondary">登录</button>
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
        password: this.password,
    }
  },
  created(){
  },
    methods: {
      submit() {
          let data = {
              'username': this.username,
              'password': this.password,
          }
          console.log(data)
          axios.post('/login', data)
              .then((res) => {
              console.log(res.data)
              if(res.data['status'][0]==true){
                  // this.$router.push('/home')
                  // <Redirect to="/" />
                  window.location.href = "/";
              }else{
                  console.log("wrong!")
              }
          })
      }
  }
}
</script>
<template>
  <div>
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

// import marked from 'marked';
export default {
  // name: 'HelloPage',
  // path: '/algorithm/dijkstra',
  // image: "http://127.0.0.1:5000/images/000.png",
  data(){
    return {
        username: this.username,
        password: this.password,
    //   my_message: this.message,
    //   problem: this.problem,
    //   image:this.image,
    //   answer: this.answer,
    //   status: this.status,
    }
  },
  created(){
    // axios.post('/login')
    // .then((response)=>{
    //     console.log(response.data)
    //     // this.problem = response.data.data_problem
    //     // this.image =  "data:image/png;base64,"+ response.data.data_image
    //     // this.problem_id = response.data.problem_id
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
  },
    methods: {
      submit() {
          console.log("post: this.username "+this.username)
          console.log("post: this.password "+this.password)
          let data = {
              'username': this.username,
              'password': this.password,
          }
          console.log(data)
          axios.post('/login', data)
              .then((res) => {
              console.log(res.data)
            //   if(res.data['data']==true){
            //     this.status=1
            //   }else{
            //     this.status=2
            //   }
          })
      }
  }
}
</script>
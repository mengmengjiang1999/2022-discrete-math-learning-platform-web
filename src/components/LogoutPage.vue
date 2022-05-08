<template>
  <div>
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>

    <!-- <h3 v-if="my_status==true">您已登陆！</h3>
    <h3 v-else>您未登录！</h3> -->
    <form v-on:submit.prevent="submit()" v-if="my_status==true">
      <tr><button type="submit" class="ui-button" ><span>退出登录</span></button></tr>
    </form>

    <!-- 输入框 -->
    <!-- <form v-on:submit.prevent="submit()">
      <tr><button type="submit" class="ui-button" ><span>退出登录</span></button></tr>
    </form> -->

  </div>
</template>

<script>
import axios from "axios"

// import marked from 'marked';
export default {
  data(){
    return {
        username: this.username,
        my_status: this.my_status,
    }
  },
  created(){
      axios.get('/login_status')
              .then((res) => {
            //   console.log(res.data)
              this.my_username=res.data['username']
              this.my_status=res.data['status']
            //   console.log(this.my_username)
            //   console.log(this.my_status)
        })
  },
    methods: {
      submit() {
          axios.post('/logout')
              .then((res) => {
              console.log(res.data)
              window.location.href = "/";
          })
      }
  }
}
</script>
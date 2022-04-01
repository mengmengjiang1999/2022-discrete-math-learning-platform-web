<template>
  <div>
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>

    <!-- 输入框 -->
    <form v-on:submit.prevent="submit()">
      <tr><button type="submit" class="ui-button" ><span>退出登录</span></button></tr>
    </form>

  </div>
</template>

<script>
import axios from "axios"

// import marked from 'marked';
export default {
  data(){
    return {
        username: this.username,
    }
  },
  created(){
  },
    methods: {
      submit() {
          // data = {

          // }
          // console.log(data)
          axios.post('/logout')
              .then((res) => {
              console.log(res.data)
          })
      }
  }
}
</script>
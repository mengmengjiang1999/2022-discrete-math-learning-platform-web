<template>
  <div>
    <h1>注册</h1>
    <direct-bar></direct-bar>
    <regist-page></regist-page>
    <h3>已有账号？去登录</h3>
    <ul>
      <li><a href="/login" rel="noopener">登录</a></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"


import RegistPage from "./../components/RegistPage.vue"
import DirectBar from "./../components/DirectBar.vue"

export default {
    components:{
      RegistPage,
      DirectBar,
    },
    methods: {
  }
}
</script>
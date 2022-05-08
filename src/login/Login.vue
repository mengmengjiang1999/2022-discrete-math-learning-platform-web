<template>
  <div>
      <!-- LOGIN -->
    <h1>登录</h1>
    <direct-bar></direct-bar>
    
    <login-page></login-page>
    <h3>没有账号？去注册</h3>
    <ul>
      <li><a href="/regist" rel="noopener">注册</a></li>
    </ul>
    <ul>
      <li><a href="/" rel="noopener">主页</a></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

import LoginPage from './../components/LoginPage.vue'
import DirectBar from './../components/DirectBar.vue'

export default {

    components:{
      LoginPage,
      DirectBar,
    },
    methods: {
    }
}
</script>
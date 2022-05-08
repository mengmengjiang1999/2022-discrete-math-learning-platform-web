<template>
  <div>
      <!-- LOGIN -->
    <!-- <router-view></router-view> -->
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>
    <div>LOGIN</div>
    <login-page></login-page>
    <h3>Regist</h3>
    <ul>
      <li><a href="/regist" rel="noopener">Regist</a></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

import LoginPage from './../components/LoginPage.vue'

export default {

    components:{
      LoginPage,
    },
    methods: {
    }
}
</script>
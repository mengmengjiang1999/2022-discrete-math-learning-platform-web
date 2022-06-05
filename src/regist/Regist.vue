<template>
  <!-- <div>
    <h1>注册</h1>
    <direct-bar></direct-bar>
    <regist-page></regist-page>
    <h3>已有账号？去登录</h3>
    <ul>
      <li><a href="/login" rel="noopener">登录</a></li>
    </ul>
  </div> -->

   <direct-bar></direct-bar>

  <div class="container">
    <div class="col-md-6 offset-md-3">

      <div class="card" style="margin-top:5rem">
        <h5 class="card-header">
          注册
        </h5>
        <div class="card-body">
          <form v-on:submit.prevent="submit()">
            <div class="mb-3">
              <input type="text" class="form-control" id="input-username" placeholder="用户名" v-model="username">
            </div>

            <div class="mb-3">
              <input type="password" class="form-control" id="input-password" placeholder="密码" v-model="password1">
              <div id="btn-eye-password" class="btn-eye" data-password-target="#input-password">
                <i class="fa fa-lg fa-eye" aria-hidden="true"></i>
              </div>
            </div>

            <div class="mb-3">
              <input type="password" class="form-control" id="input-password2" placeholder="确认密码" v-model="password2">
              <div id="btn-eye-password" class="btn-eye" data-password-target="#input-password">
                <i class="fa fa-lg fa-eye" aria-hidden="true"></i>
              </div>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="input-mail" placeholder="邮箱" v-model="email">
              <div id="btn-eye-password" class="btn-eye" data-password-target="#input-password">
                <i class="fa fa-lg fa-eye" aria-hidden="true"></i>
              </div>
            </div>

            <div>
              <button type="submit" class="btn btn-success btn-gen w-100" id="btn-gen">注册</button>
            </div>

          </form>
        </div>
      </div>
      <span>已有账号？去<a href="/login" rel="noopener">登录</a></span>

    </div>
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
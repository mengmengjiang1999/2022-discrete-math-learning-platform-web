<template>
  <direct-bar></direct-bar>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card" style="margin-top: 5rem">
        <h5 class="card-header">登录</h5>
        <div class="card-body">
          <form v-on:submit.prevent="submit()">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="input-domain"
                placeholder="用户名"
                v-model="username"
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="input-password"
                placeholder="密码"
                v-model="password"
              />
              <div
                id="btn-eye-password"
                class="btn-eye"
                data-password-target="#input-password"
              >
                <i class="fa fa-lg fa-eye" aria-hidden="true"></i>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="btn btn-success btn-gen w-100"
                id="btn-gen"
              >
                登录
              </button>
            </div>

          </form>
        </div>
      </div>
      <!-- <div class="row justify-content-md-center"> -->
      <div class="row">
      <div class="col-6">没有账号？去<a href="/regist" rel="noopener">注册</a></div>
      <div class="col-6 text-end text-danger" :key="my_message">{{my_message}}</div>
      </div>
      <!-- </div> -->
    </div>
  </div>

</template>

<script>
import axios from "axios";

import LoginPage from "./../components/LoginPage.vue";
import DirectBar from "./../components/DirectBar.vue";

export default {
  components: {
    LoginPage,
    DirectBar,
  },
  data(){
    return {
      my_message: this.my_message,
    }
  },
  created(){
      this.username="";
      this.password="";
      this.my_message="";
  },
  methods: {
    submit() {
      let data = {
        username: this.username,
        password: this.password,
      };

      console.log(data);
      axios.post("/login", data).then((res) => {
        console.log(res.data);
        if (res.data["status"] == true) {
          window.location.href = "/";
        } else {
          console.log("wrong!");
          this.my_message = res.data["error"]
          console.log(this.my_message)
          this.$forceUpdate();
        }
      });
    },
  },
};
</script>

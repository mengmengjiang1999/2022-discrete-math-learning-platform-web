<template>
  <div>
    <!-- <h3>{{username}}</h3> -->
    <h3 v-if="my_status == true">您好，{{ my_username }}</h3>
    <h3 v-else>您未登录</h3>
  </div>
  <div>
    <div v-if="my_status == false" class="mt-3">
      <a class="mmj-link m-2" aria-current="page" :href="'/login'">登录</a>
      <a class="mmj-link m-2" aria-current="page" :href="'/regist'">注册</a>
    </div>
    <div v-else>
      <!-- <a class="mmj-link m-2" aria-current="page" :href="'/logout'">退出登录</a> -->
      <form v-on:submit.prevent="submit()">
        <button type="submit" class="btn btn-secondary">
          <span>退出登录</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// import axios from "./../main"

// import marked from 'marked';
export default {
  data() {
    return {
      my_username: this.my_username,
      my_status: this.my_status,
    };
  },
  created() {
    axios.get("/login_status").then((res) => {
      //   console.log(res.data)
      this.my_username = res.data["username"];
      this.my_status = res.data["status"];
      //   console.log(this.my_username)
      //   console.log(this.my_status)
    });
  },
  methods: {
    submit() {
      console.log("logouting...");
      axios.post("/logout").then((res) => {
        console.log(res.data);
        window.location.href = "/";
      });
    },
  },
};
</script>

<style>
.mmj-link {
  font-size: 25px !important;
  line-height: 20px !important;
  color: #3498db;
  text-decoration: none;
}
</style>
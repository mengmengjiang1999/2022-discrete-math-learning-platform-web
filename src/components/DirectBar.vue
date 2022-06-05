<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark mmj-direct">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">主页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/problems">题目列表</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/records">做题记录</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                用户
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="/login">登录</a></li>
                <li><a class="dropdown-item" href="/regist">注册</a></li>
                <li>
                  <form v-on:submit.prevent="submit()">
                    <tr>
                      <button type="submit" class="btn btn-light">
                        <span>退出登录</span>
                      </button>
                    </tr>
                  </form>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios"

import GotoButton from "./GotoButton.vue";

// import marked from 'marked';
export default {
  components: {
    GotoButton,
  },
  methods: {
    submit() {
      console.log("logouting...")
      axios.post("/logout").then((res) => {
        console.log(res.data);
        window.location.href = "/";
      });
    },
  },
};
</script>

<style>
.mmj-direct {
  background: linear-gradient(90deg, rgb(35, 37, 38), rgb(65, 67, 69));
  filter: blur(0px) brightness(100%);
}
</style>
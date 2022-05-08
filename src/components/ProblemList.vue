<template>
  <div>
    <!-- <h2>{{ title }}</h2> -->
    <!-- <tr v-for="item in problemlist" :key="item">
        {{ item['problem'] }}
    </tr> -->

    <ul class="nav flex-column">
      <li class="nav-item" v-for="item in problemlist" :key="item">
        <a class="nav-link active" aria-current="page" href="/">{{ item['problem'] }}</a>
      </li>
  </ul>
  </div>
</template>

<script>
import axios from "axios"
// import VueElElements from 'vue-el-element'
// import { ElButton } from 'vue-el-element'
// import { ElButton } from 'element-plus'
export default {
  name: 'ProblemList',
  data(){
    return {
      title: this.title,
      problemlist: this.problemlist
    }
  },
  created(){
    this.title = "题目列表"
    this.problemlist = []
    axios.get('/problemlist')
        .then((response)=>{
            console.log(response.data)
            this.problemlist = response.data.algorithms   //json：algorithms
        })
        .catch((error)=>{
            console.log(error)
        })
  }
}
</script>
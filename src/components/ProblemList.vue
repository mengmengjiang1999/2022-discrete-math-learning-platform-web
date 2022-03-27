<template>
  <div>
    <h2>{{ title }}</h2>
    <!-- <h3>{{ problemlist }}</h3> -->
    <tr v-for="item in problemlist" :key="item">
        {{ item['problem'] }}
    </tr>
    <!-- <el-button v-for="item in problemlist" :key="item">
      {{ item['problem'] }}
    </el-button> -->
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
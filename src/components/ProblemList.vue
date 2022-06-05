<template>
  <div>
    <!-- <h2>{{ title }}</h2> -->
    <!-- <tr v-for="item in problemlist" :key="item">
        {{ item['problem'] }}
    </tr> -->

    <table class="table table-striped">
      <thead>
      <tr class="mmj-table-header">
        <th class="">题目编号</th>
        <th class="">题目名称</th>
      </tr>
      </thead>
      <tbody>
      <tr class="" v-for="item in problemlist" :key="item">
        <td class="">{{ item['id'] }}</td>
        <td class=""><a class="mmj-table-item" aria-current="page" :href="'/problem?problem_type=' + item.problem_type">{{ item['problem_name'] }}</a></td>
      </tr>
      </tbody>
    </table>
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

<style >
.mmj-table-item{
    /* border-bottom: 1px solid #e8e8e8; */
    color: #3498db;
    text-decoration: none;
}
</style>
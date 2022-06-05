<template>
  <div>

    <table class="table table-striped">
      <thead>
      <tr class="mmj-table-header">
        <th class="">#</th>
        <th class="">题目名称</th>
        <th class="">做题时间</th>
        <th class="">做题结果</th>
      </tr>
      </thead>
      <tbody>
      <tr class="" v-for="item in recordlist" :key="item">
        <td class="">{{ item['id'] }}</td>
        <td class=""><a class="mmj-table-item" aria-current="page" :href="'/records?problem_id=' + item.problem_id">{{ item['problem_type'] }}</a></td>
        <td class="">{{ item['problem_time'] }}</td>
        <td class="">{{ item['problem_status'] }}</td>
      </tr>
      </tbody>
    </table>

    <!-- <table class="table">
      <tbody>
      <tr class="nav-item" v-for="item in recordlist" :key="item">
        <a class="nav-link active" aria-current="page" :href="'/records?problem_id=' + item.problem_id">{{ item['problem_type'] }}</a>
      </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import axios from "axios"
// import VueElElements from 'vue-el-element'
// import { ElButton } from 'vue-el-element'
// import { ElButton } from 'element-plus'
export default {
  name: 'Record',
  data(){
    return {
      title: this.title,
      recordlist: this.recordlist
    }
  },
  created(){
    this.title = "题目列表"
    this.recordlist = []
    axios.get('/records')
        .then((response)=>{
            console.log(response.data)
            this.recordlist = response.data.data  //json：algorithms
        })
        .catch((error)=>{
            console.log(error)
        })
  }
}
</script>

<style>
.mmj-table-item{
    /* border-bottom: 1px solid #e8e8e8; */
    color: #3498db;
    text-decoration: none;
}
</style>
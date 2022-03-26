<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'ProblemList',
  data(){
    return {
      title: this.title
    }
  },
  created(){
    this.title = "题目列表"
    this.problemlist = {}
    axios.get('/problemlist')
        .then((response)=>{
            console.log(response.data)
            this.problemlist = response.data   //json：algorithms
        })
        .catch((error)=>{
            console.log(error)
        })
  }
}
</script>
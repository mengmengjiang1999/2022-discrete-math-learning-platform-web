<template>
  <div>
    <h1>{{ timenow }}</h1>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloPage',
  data(){
    return {
    //   message: this.message
        timenow: this.timenow
    }
  },
  created(){
    axios.get('/')
        .then((response)=>{
            console.log(response.data)
            this.timenow = "000"
        })
        .catch((error)=>{
            console.log(error)
            this.timenow = "111"
        })
  }
}
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <div v-html="problem"></div>
  <!-- <textarea v-model="problem"></textarea>
  <div v-html="markdownToHtml"></div> -->
  <!-- <p><strong>Promoted URLs:</strong><img src="@/assets/images/000.png"/></p> -->
  <!-- <p><strong>Promoted URLs:</strong><img src= {{image_path}} /></p> -->
  </div>
</template>

<script>
import axios from "axios"

// import marked from 'marked';
export default {
  name: 'HelloPage',
  path: '/algorithm/dijkstra',
  image_path: "http://127.0.0.1:5000/images/000.png",
//   /algorithm/dijkstra
  data(){
    return {
      message: this.message,
      problem: this.problem,
    //   mark: this.mark,
      // image_path: this.image_path
    }
  },
  created(){
    this.message = "求最短路"
    this.problem = " "
    // this.mark = " "
    axios.get('/algorithm/dijkstra')
    .then((response)=>{
        console.log(response.data)
        // this.problemlist = response.data.algorithms   //json：algorithms
        this.problem = response.data.data_problem
        // this.mark= marked(this.problem)
        // this.image_path = "http://127.0.0.1:5000"+response.data.image_path
    })
    .catch((error)=>{
        console.log(error)
    })
  },
//   computed: {
//    markdownToHtml(){
//      return marked(this.problem);
//    }
//  }
}
</script>
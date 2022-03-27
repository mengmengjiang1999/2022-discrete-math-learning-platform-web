<template>
  <div>
    <h1>{{ my_message }}</h1>
    <div v-html="problem"></div>
    <p><img :src="image" ></p>

    <!-- 答案输入框 -->
    <form v-on:submit.prevent="submit()">
      <input placeholder="答案" maxlength="15" type="text" v-model="answer" />
    <button type="submit" class="ui-button" ><span>提交答案</span></button></form>

    <!-- 显示答案是否正确 -->
    <div v-if="status === 1">
      答案正确
    </div>
    <div v-else-if="status === 2">
      答案错误
    </div>
  </div>
</template>

<script>
import axios from "axios"

// import marked from 'marked';
export default {
  // name: 'HelloPage',
  // path: '/algorithm/dijkstra',
  // image: "http://127.0.0.1:5000/images/000.png",
//   /algorithm/dijkstra
  data(){
    return {
      my_message: this.message,
      problem: this.problem,
      image:this.image,
      answer: this.answer,
      status: this.status,
    //   mark: this.mark,
      // image_path: this.image_path
    }
  },
  created(){
    this.message = "求最短路"
    this.problem = " "
    this.answer = 0
    // this.mark = " "
    this.status = 0 //0:还未提交答案 1:已提交，答案正确 2:已提交，答案错误
    axios.get('/algorithm/dijkstra')
    .then((response)=>{
        console.log(response.data)
        // this.problemlist = response.data.algorithms   //json：algorithms
        this.problem = response.data.data_problem
        // this.mark= marked(this.problem)
        // this.image_path = "http://127.0.0.1:5000"+response.data.image_path
        this.image =  "data:image/png;base64,"+ response.data.data_image
    })
    .catch((error)=>{
        console.log(error)
    })
  },
    methods: {
      submit() {
          console.log("post: this.answer "+this.answer)
          axios.post('/algorithm/dijkstra', { 'answer': this.answer} )
              .then((res) => {
              console.log(res.data)
              if(res.data['answer']==true){
                this.status=1
              }else{
                this.status=2
              }
          })
      }
  }
}
</script>
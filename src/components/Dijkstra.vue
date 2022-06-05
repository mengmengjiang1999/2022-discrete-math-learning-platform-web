<template>
  <div class="container">
    <div class = "row">
    <div class="col-8 p-3">
      <div class="mmj">
      <h1>{{ my_message }}</h1>
      <div v-html="problem"></div>
      <p  style="border: solid 1px red;"><img :src="image"></p>
      </div>
    </div>

    <div class="col-4 p-3">
    <!-- 答案输入框 -->
    <div class="mmj">
    
    <form v-on:submit.prevent="submit()">

      <button type="submit" class="btn btn-primary mb-3"><span>提交答案</span></button>
        <!-- <div class="mb-3">
              <input type="text" class="form-control" id="input-answer" placeholder="答案" v-model="answer">
            </div> -->

      <div class="form-floating">
        <textarea class="form-control" placeholder="答案" id="input-answer" v-model="answer"></textarea>
        <label for="floatingTextarea">在这里输入答案</label>
      </div>
    </form>

    <!-- 显示答案是否正确 -->
    <div v-if="status === 1">
      答案正确
    </div>
    <div v-else-if="status === 2">
      答案错误
    </div>
    </div>
    </div>

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
      image: this.image,
      answer: this.answer,
      status: this.status,
    //   mark: this.mark,
      // image_path: this.image_path
    }
  },
  created(){
    this.message = '求单源最短路'
    this.problem = " "
    this.answer = ""
    // this.mark = " "
    this.status = 0 //0:还未提交答案 1:已提交，答案正确 2:已提交，答案错误
    this.problem_id = -1
    axios.get('/algorithm',{
      params:{
      'problem_type': "shortestpath"
    }})
    .then((response)=>{
        console.log(response.data)
        this.problem = response.data.data_problem
        this.image =  "data:image/png;base64,"+ response.data.data_image
        this.problem_id = response.data.problem_id
    })
    .catch((error)=>{
        console.log(error)
    })
  },
    methods: {
      submit() {
          console.log("post: this.answer "+this.answer)
          console.log("post: this.problem_id "+this.problem_id)
          axios.post('/algorithm', {
              'answer': this.answer,
              'problem_id': this.problem_id.toString(),
              'problem_type': "shortestpath"
          })
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
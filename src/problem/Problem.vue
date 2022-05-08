<template>
  <direct-bar></direct-bar>
  <div class="container">
  <div class="row">
     <!-- style="border:solid 1px red" -->
  </div>
  <div class ="row">
    <div class="col-6">
    <div class="page-header">
    <h2>题目列表
    </h2></div>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
    <problem-list></problem-list>
    </div>
  </div>
  <dijkstra></dijkstra>
</div>

</template>

<script>
import axios from "axios"
import DirectBar from "../components/DirectBar.vue"
import ProblemList from "../components/ProblemList.vue"
import Dijkstra from "../components/Dijkstra.vue"

export default {
    data(){
        return{
            problem: this.problem,
        }
    },
    components:{
      DirectBar,
      Dijkstra,
    },
    methods: {
    }
}
</script>
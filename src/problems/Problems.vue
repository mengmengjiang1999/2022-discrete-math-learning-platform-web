<template>
  <direct-bar></direct-bar>
  <div class="container">
  <div class="row">
     <!-- style="border:solid 1px red" -->
  </div>
  <div class ="row">
    <div class="col-6">
    <div class="page-header mt-5 mb-3">
    <h2>题目列表
    </h2></div>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
    <problem-list></problem-list>
    </div>
  </div>
</div>

</template>

<script>
import axios from "axios"

import RegistPage from "../components/RegistPage.vue"
import DirectBar from "../components/DirectBar.vue"
import ProblemList from "../components/ProblemList.vue"
import ProblemListExample from "../components/ProblemListExample.vue"

export default {
    components:{
      RegistPage,
      DirectBar,
      ProblemList,
      ProblemListExample,
    },
    methods: {
  }
}
</script>
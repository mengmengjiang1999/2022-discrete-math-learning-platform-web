<template>
  <div>

    <direct-bar></direct-bar>
    <div class="page-header">
    <h2>题目列表
    </h2></div>
    <problem-list></problem-list>
  </div>
</template>

<script>
import axios from "axios"

import RegistPage from "../components/RegistPage.vue"
import DirectBar from "../components/DirectBar.vue"
import ProblemList from "../components/ProblemList.vue"

export default {
    components:{
      RegistPage,
      DirectBar,
      ProblemList,
    },
    methods: {
  }
}
</script>
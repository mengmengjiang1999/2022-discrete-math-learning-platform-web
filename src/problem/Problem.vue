<template>
  <direct-bar></direct-bar>
  <dijkstra></dijkstra>

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
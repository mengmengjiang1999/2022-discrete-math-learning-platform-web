<template>
  <direct-bar></direct-bar>
  <div class="container mt-5 mb-5">
    <div class="mmj">
      <div class="row">
          <div class="page-header mb-3">
            <h2>做题记录</h2>
          </div>

      </div>
      <div class="row">

          <record-list></record-list>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import RegistPage from "../components/RegistPage.vue";
import DirectBar from "../components/DirectBar.vue";
// import ProblemList from "../components/ProblemList.vue"
import RecordList from "../components/RecordList.vue";

export default {
  components: {
    RegistPage,
    DirectBar,
    RecordList,
  },
  methods: {},
};
</script>

<style>
/* div{
        border: solid 1px red;
      } */
.mmj {
  height: 100%;
  padding: 3rem;
  display: block;
  margin-bottom: 1.3em;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(26 26 26 / 10%);
  box-sizing: border-box;
}
body {
  background-color: rgb(239, 239, 239);
}
</style>
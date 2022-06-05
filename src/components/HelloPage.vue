<template>
  <!-- <div class="hello-page">
    <h1>{{ message }}</h1>
  </div> -->
  <!-- <div> -->
    <div class="page-header mt-5 mb-3">
      <!-- <div class="page-header mt-5 mb-3"> -->
    <h1>欢迎进入离散数学智能教学平台
        <!-- <small>子标题</small> -->
    </h1>
<!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloPage',
  props:{

  },
  data(){
    return {
      message: this.message
    }
  },
  created(){
    this.message = "欢迎进入离散数学智能教学平台"
  }
}
</script>
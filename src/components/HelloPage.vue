<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloPage',
  // props: {
  //   msg: String
  // },
  data(){
    return {
      message: this.message
    }
  },
  created(){
    this.message = "欢迎离散数学智能教学平台"
  }
}
</script>
<template>
<div>
    <!-- <h3>{{username}}</h3> -->
    <h3 v-if="my_status==true">您已登录！</h3>
    <h3 v-else>您未登录！</h3>
</div>
</template>

<script>
import axios from "axios"

// import axios from "./../main"

// import marked from 'marked';
export default {
    data(){
        return{
            my_username: this.my_username,
            my_status: this.my_status,
        }
    },
    created(){
        axios.get('/login_status')
              .then((res) => {
            //   console.log(res.data)
              this.my_username=res.data['username']
              this.my_status=res.data['status']
            //   console.log(this.my_username)
            //   console.log(this.my_status)
        })
    },
}
</script>
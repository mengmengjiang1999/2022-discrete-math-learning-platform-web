<template>
<div>
    <!-- <h3>{{username}}</h3> -->
    <h3>您已登陆！</h3>
</div>
</template>

<script>
// import axios from "axios"

// import axios from "./../main"

// import marked from 'marked';
export default {
    props:{
        my_username: " ",
        my_status: false,
    },
    created(){
        axios.get('/login_status')
              .then((res) => {
              console.log(res.data)
        })
    },
}
</script>
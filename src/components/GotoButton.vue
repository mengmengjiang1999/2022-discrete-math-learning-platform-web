<template>
<div>
    <h3>{{myname}}</h3>
    <ul>
        <li><a href="/login" rel="noopener">{{myname}}</a></li>
    </ul>
</div>
</template>

<script>
import axios from "axios"

// import marked from 'marked';
export default {
    props:{
        myname: String,
        myurl: String,
    },
    // methods: {
    //     submit() {
    //         axios.post('/clear_session')
    //             .then((res) => {
    //             console.log(res.data)
    //         })
    //     }
    // }
}
</script>
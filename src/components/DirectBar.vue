<template>
<div>
    <!-- <goto-button :myname="Login" :myurl="login"></goto-button>
    <goto-button :myname="Regist" :myurl="regist"></goto-button> -->
    <!-- <goto-button :myname="Login" :myurl="login"></goto-button> -->

    <!-- <h3>display: flex</h3> -->
    <div class="display-flex">
    <div class="div-size">
            <a href="/login" rel="noopener">登陆</a>
    </div>
    <div class="div-size">
            <a href="/regist" rel="noopener">注册</a>
    </div>
    <!-- <div class="div-size">3</div> -->
    </div>
    
        

</div>
</template>

<script>
// import axios from "axios"

import GotoButton from "./GotoButton.vue"

// import marked from 'marked';
export default {
    components:{
        GotoButton,
    },
}
</script>
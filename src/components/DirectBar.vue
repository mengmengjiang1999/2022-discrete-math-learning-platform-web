<template>
<div>
    <!-- <goto-button :myname="Login" :myurl="login"></goto-button>
    <goto-button :myname="Regist" :myurl="regist"></goto-button> -->
    <!-- <goto-button :myname="Login" :myurl="login"></goto-button> -->
    <h3>Login</h3>
    <ul>
        <li><a href="/login" rel="noopener">Login</a></li>
    </ul>
        <h3>Regist</h3>
    <ul>
        <li><a href="/regist" rel="noopener">Regist</a></li>
    </ul>

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
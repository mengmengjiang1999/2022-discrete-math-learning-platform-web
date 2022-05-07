import HelloPage from './../components/HelloPage.vue'
export default {
    components:{
        HelloPage,
    },
}

import { createApp } from 'vue'
import App from './Home.vue'

createApp(App).mount('#home')

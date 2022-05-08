const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

//vue.config.js

module.exports = {
    lintOnSave: false,
    // devServer:{
    //     host:'0.0.0.0',
    //     port:'8080',
    //     // https:false,
    //     open:true,
    //     //以上的ip和端口是我们本机的;下面为需要跨域的
    //     proxy:{ //配置跨域
    //         '/api':{
    //             target:'http://localhost:5000/',
    //             ws:true,
    //             changeOrigin:true,//允许跨域
    //             pathRewrite:{
    //                 '^/api':''   //请求的时候使用这个api就可以
    //             }
    //         }
    //     }
    // },
    pages:{
        // 先配置主页
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            filename: 'index.html',
            title: 'main',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 再配置各个子页面：登录后课表查询页
        login: {
            entry: 'src/login/main.js',
            template: 'public/login.html',

            filename: 'login.html',
            title: 'Login',
        },// 再配置各个子页面：登录后课表查询页
        regist: {
            entry: 'src/regist/main.js',
            template: 'public/regist.html',
            filename: 'regist.html',
            title: 'Regist',
        },
        home: {
            entry: 'src/home/main.js',
            template: 'public/home.html',
            filename: 'home.html',
            title: 'Home',
        },
    }
}

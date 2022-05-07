const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

//vue.config.js

module.exports = {
    lintOnSave: false,
    devServer:{
        host:'0.0.0.0',
        port:'8080',
        // https:false,
        open:true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy:{ //配置跨域
            '/api':{
                target:'http://localhost:5000/',
                ws:true,
                changeOrigin:true,//允许跨域
                pathRewrite:{
                    '^/api':''   //请求的时候使用这个api就可以
                }
            }
        }
    },
    // pages: {
    //     pc: {
    //         // page 的入口
    //         entry: 'src/entry/pc.js',
    //         // 模板来源
    //         template: 'public/pc.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'pc.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: '环保在线监测云平台',
    //         chunks: ['chunk-vendors', 'chunk-common', 'pc']
    //     },
    //     mobile: {
    //         // page 的入口
    //         entry: 'src/entry/mobile.js',
    //         // 模板来源
    //         template: 'public/mobile.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'mobile.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: '环保在线监测云平台',
    //         chunks: ['chunk-vendors', 'chunk-common', 'mobile']
    //     },
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
            // entry: './src/pages/login/login.js',
            // template: './public/login.html',
            // title: 'login'

            entry: 'src/login/main.js',
            template: 'public/login.html',
            // 在 dist/index.html 的输出
            filename: 'login.html',
            title: 'Login',
        },
        home: {
            // entry: './src/pages/login/login.js',
            // template: './public/login.html',
            // title: 'login'

            entry: 'src/home/main.js',
            template: 'public/home.html',
            // 在 dist/index.html 的输出
            filename: 'home.html',
            title: 'Home',
        },
    }
}

/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-18 10:22:49
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 11:05:41
 */
'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const title = defaultSettings.title || '信息资源管理平台' // page title

module.exports = {
    publicPath: '/', // 根路径
    outputDir: 'html', //构建输出目录
    assetsDir: 'assets', //静态资源目录
    lintOnSave: false, // 是否开启eslint保存检测，有效值true/false/error
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: { //配置跨域
            '/api': {
                target: process.env.VUE_APP_SERVER_API,
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: title, // page-title
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
}
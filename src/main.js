/**
 * @description: main方法
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-17 12:51:19
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 11:47:19
 */
import Vue from 'vue'
import App from './App.vue'

import router from "@/router/index.js"; // 路由
import store from "@/store/index.js"; // 存储
import global from "@/utils/global"; // 全局方法
import '@/utils/permissions' // 全局路由钩子
import '@/directive/index' // 自定义指令集
import "@/plugins/element/element.js"; // 饿了么样式

Vue.use(global);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
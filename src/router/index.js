/**
 * @description: 路由配置
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-05 14:28:33
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 11:13:08
 */
import Vue from 'vue'
import Router from 'vue-router'
import {
  routes
} from './routes'
Vue.use(Router)
export default new Router({
  mode: "history",
  routes
})
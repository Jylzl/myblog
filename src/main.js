/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-17 12:51:19
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-17 12:51:19
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

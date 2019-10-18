/**
 * @description: 全局路由钩子、页面加载进度条
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-05-27 08:41:05
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 11:29:06
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import getPageTitle from '@/utils/get-page-title'
import router from '@/router/index' //路由
import {
    getToken
} from '@/utils/auth'

router.beforeEach((to, from, next) => {
    // 页面加载进度条
    NProgress.start();

    // 设置页面标题
    document.title = getPageTitle(to.meta.title)

    //登录标示
    let token = getToken();

    if (to.path == '/login' || to.path == '/404' || to.path == '/401') {
        next();
    } else {
        if (token) {
            next();
        } else {
            next('/login');
        }
    }
})

router.afterEach(() => {
    NProgress.done();
});
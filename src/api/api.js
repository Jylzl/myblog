/**
 * @description: 全局api定义
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-12 15:16:26
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 10:20:35
 */

const api = {
    // 用户
    userInf: "/api/user/info", // 获取用户信息
    userLogin: "/api/user/login", // 用户登陆
    userLogout: "/api/user/logout", // 用户登出
    getPerms: "/api/getMenuByUser", // 获取用户权限
}

export default api;
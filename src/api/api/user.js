/**
 * @description: 用户请求操作
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-18 10:02:57
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-22 16:39:41
 */
import request from '@/utils/request'
import user from '@/api/url/user';

// 用户登陆
export function login(data) {
  return request({
    url: user.userLogin,
    method: 'post',
    data
  })
}

// 用户退出
export function logout() {
  return request({
    url: user.userLogout,
    method: 'post'
  })
}

// 用户权限
export function getUserPerms(data) {
  return request({
    url: user.userPerms,
    method: 'get',
    params: data
  })
}

// 用户信息
export function getUserInfo(token) {
  return request({
    url: user.userInf,
    method: 'get',
    params: {
      token
    }
  })
}
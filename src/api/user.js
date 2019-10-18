/**
 * @description: 用户请求操作
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-18 10:02:57
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 10:18:45
 */
import request from '@/utils/request'
import api from '@/api/api';

// 用户登陆
export function login(data) {
  return request({
    url: api.userLogin,
    method: 'post',
    data
  })
}

// 用户退出
export function logout() {
  return request({
    url: api.userLogout,
    method: 'post'
  })
}

// 用户权限
export function getUserPerms(data) {
  return request({
    url: api.userPerms,
    method: 'get',
    params: data
  })
}

// 用户信息
export function getUserInfo(token) {
  return request({
    url: api.userInf,
    method: 'get',
    params: {
      token
    }
  })
}
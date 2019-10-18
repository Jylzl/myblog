/**
 * @description: Token操作
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-18 09:49:54
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 09:51:07
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-02 10:31:44
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-18 11:18:48
 */
import Vue from 'vue'
import Router from 'vue-router'
import {
	ansycRoutes
} from '@/router/ansycRoutes';

import login from '@/views/account/Login.vue'
import lock from '@/views/account/Lock.vue'

import error401 from '@/views/error/errorpage/401.vue'
import error404 from '@/views/error/errorpage/404.vue'

Vue.use(Router)
/**
 * routes==默认路由节点
 * isParent: true,
 * leaf: true, //指定当前只有一个节点(子children不展示)
 * hidden: true, //当前节点不显示
 */
const routes = [{
		meta: {
			title: '登录',
			hidden: true
		},
		path: '/login',
		name: 'login',
		component: login
	},
	{
		meta: {
			title: '锁屏',
			hidden: true
		},
		path: '/lock',
		name: 'lock',
		component: lock
	},
	{
		meta: {
			title: '错误页面401',
			hidden: true
		},
		path: '/401',
		name: 'error401',
		component: error401
	},
	{
		meta: {
			title: '错误页面404',
			hidden: true
		},
		path: '/404',
		name: 'error404',
		component: error404
	}
];

const lastRoutes = [{
	meta: {
		title: '404',
		hidden: true
	},
	path: '*',
	name: 'error',
	redirect: '/404'
}]


export {
	routes,
	lastRoutes,
	ansycRoutes
}
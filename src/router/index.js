import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '我的活动',
    component: () => import('@/views/salesman/index.vue')
  },
  {
    path: '/details',
    name: '查看活动闲情',
    component: () => import('@/views/salesman/details/index.vue')
  },
  {
    path: '/addActivity',
    name: '创建活动',
    component: () => import('@/views/salesman/addActivity/index.vue')
  },
  {
    path: '/complete',
    name: '创建成功',
    component: () => import('@/views/salesman/addActivity/complete/index.vue')
  },
  {
    path: '/statistics',
    name: '签到统计',
    component: () => import('@/views/salesman/statistics/index.vue')
  },
  {
    path: '/customer',
    name: '活动签到',
    component: () => import('@/views/customer/index.vue')
  },
  {
    path: '/success',
    name: '签到成功',
    component: () => import('@/views/customer/success/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

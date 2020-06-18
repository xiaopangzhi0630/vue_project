import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      // redirect: { name: 'Home' },
      redirect: { name: 'New' },
      // component: HelloWorld
    },
    {
      path: '/new',
      name: 'New',
      component: () => import('@/view/New')
    },
    {
      path: '/editpage',
      name: 'Editpage',
      component: () => import('@/view/Editpage')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/view/Home')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('@/view/List')
    },
    {
      path: '/child',
      name: 'Child',
      component: () => import('@/view/Child')
    },
    {
      path: '/parent',
      name: 'Parent',
      component: () => import('@/view/Parent')
    }
  ]
})

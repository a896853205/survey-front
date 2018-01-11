import Vue from 'vue'
import Router from 'vue-router'
// 主页组件
import Index from '@/components/Index'
// 登录组件
import Login from '@/components/Login'
// 注册组件
import Register from '@/components/Register'
// 后台组件
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      // 这里进行token判断
      beforeEnter: (to, from, next) => {

      }
    }
  ]
})

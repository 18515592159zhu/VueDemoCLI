import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default new Router({
  routes: [
    {
      path: '/',//默认路由，重定向到主页
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login')//按需加载 用到的时候才用加载
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/Index'),
      children: [
        {
          path: 'emps',
          name: 'Emps',
          component: () => import('../views/emp/Index')
        },
        {
          path: 'depts',
          name: 'Depts',
          component: () => import('../views/dept/Index')
        },
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('../views/order/Index')
        },
        {
          path: 'users',
          name: 'Users',
          component: () => import('../views/user/Index')
        }
      ]
    },
    {
      path: '*',
      component: () => import('../views/404')
    }
  ]
})

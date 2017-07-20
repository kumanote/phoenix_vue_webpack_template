import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import UserList from '@/components/user/List'
import UserAdd from '@/components/user/Add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/user/list',
      name: 'user_list',
      component: UserList
    },
    {
      path: '/user/add',
      name: 'user_add',
      component: UserAdd
    }
  ]
})

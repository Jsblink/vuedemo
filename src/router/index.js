import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableMainVue from '@/components/TableMainVue'
import Search from '@/components/Search'
import Test from '@/components/Test'
import Regist from '@/components/Regist'
import LogIn from '@/components/LogIn'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Table',
      component: TableMainVue
    },
    {
      path: '/Search',
      name: '/Search',
      component: Search
    },
    {
      path: '/Test',
      name: '/Test',
      component: Test
    },
    {
      path: '/Regist',
      name: '/Regist',
      component: Regist
    },
    {
      path: '/LogIn',
      name: '/LogIn',
      component: LogIn
    },
    {
      path: '/Config',
      name: '/Config',
      component: Config
    }
  ]
})

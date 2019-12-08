import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
import Nav from '@/components/home/Nav'
import order from '@/components/home/order'
import Navig from '@/components/home/navig'
import ation from '@/components/home/ation'
import select from '@/components/home/select'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Index,
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    },
    {
      path: '/navig',
      name: 'navig',
      component: Navig,
    },
    {
      path: '/ation',
      name: 'ation',
      component: ation,
    },
    {
      path: '/select',
      name: 'select',
      component: select,
    }
  ]
})

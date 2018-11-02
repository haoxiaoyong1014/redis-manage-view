import Vue from 'vue'
import Router from 'vue-router'
import RedisList from '@/components/RedisList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RedisList',
      component: RedisList
    }
  ]
})

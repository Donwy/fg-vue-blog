import Vue from 'vue'
import Router from 'vue-router'
import Autumn from '@/components/Autumn'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Autumn',
    //   component: Autumn
    // },
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Autumn from '@/components/Autumn'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Autumn',
      component: Autumn
    },
  ]
})

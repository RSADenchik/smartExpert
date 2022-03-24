import { createRouter, createWebHistory } from 'vue-router'
import BaseSelect from '../components/BaseSelect'
import BaseTooltip from '../components/BaseTooltip'

const routes = [
  {
    path: '/',
    redirect: '/select'
  },
  {
    path: '/select',
    name: 'select',
    component: BaseSelect
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: BaseTooltip
  }
]

const router = createRouter({
  history: createWebHistory('/smartExpert/'),
  routes: [
      '/select', '/tooltip'
  ]
})

export default router

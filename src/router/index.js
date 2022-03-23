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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

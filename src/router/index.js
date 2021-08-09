import { createRouter, createWebHashHistory } from 'vue-router'
import Example from '../views/Example.vue'

const routes = [
  {
    path: '/:id',
    name: 'Example',
    component: Example,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

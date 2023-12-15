import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LogIn from '@/components/auth/LogIn.vue'
import SignUp from '@/components/auth/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: '',
          redirect: () => {
            return { path: 'auth/login' }
          }
        },
        { path: 'login', component: LogIn },
        { path: 'signup', component: SignUp }
      ]
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LogIn from '@/components/auth/LogIn.vue'
import SignUp from '@/components/auth/SignUp.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/auth',
      component: AuthView,
      children: [
        {
          path: '',
          name: 'Auth',
          redirect: () => {
            return { path: 'auth/signin' }
          }
        },
        { name: 'SignIn', path: 'signin', component: LogIn },
        { name: 'SignUp', path: 'signup', component: SignUp }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()

  if (to.name === 'SignUp' || to.name === 'SignIn') {
    return store.isAuthenticated ? next({ name: 'Dashboard' }) : next()
  } else {
    return store.isAuthenticated ? next() : next({ name: 'SignIn' })
  }
})

export default router

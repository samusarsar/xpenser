import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LogIn from '@/components/auth/LogIn.vue'
import SignUp from '@/components/auth/SignUp.vue'
import { useAuthStore } from '@/stores/auth'
import { DASHBOARD_PATH_NAME, SIGN_IN_PATH_NAME, SIGN_UP_PATH_NAME } from '@/common/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: DASHBOARD_PATH_NAME,
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
        { name: SIGN_IN_PATH_NAME, path: 'signin', component: LogIn },
        { name: SIGN_UP_PATH_NAME, path: 'signup', component: SignUp }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()

  if (to.name === SIGN_UP_PATH_NAME || to.name === SIGN_IN_PATH_NAME) {
    return store.isAuthenticated ? next({ name: DASHBOARD_PATH_NAME }) : next()
  } else {
    return store.isAuthenticated ? next() : next({ name: SIGN_IN_PATH_NAME })
  }
})

export default router

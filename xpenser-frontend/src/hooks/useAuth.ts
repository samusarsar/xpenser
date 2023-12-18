import { useRouter } from 'vue-router'
import type { NewUserData } from '@/common/types'
import { useAuthStore } from '@/stores/auth'
import { createUser } from '@/utils/auth.utils'

const useAuth = () => {
  const store = useAuthStore()
  const router = useRouter()

  const signUp = async (newUserData: NewUserData) => {
    const newUserRes = await createUser(newUserData)

    router.replace({ path: '/auth/login' })

    if (newUserRes.status === 200) {
      return {
        status: 'success',
        message: ''
      }
    } else {
      throw new Error('Username or Email already taken!')
    }
  }

  return { signUp }
}

export default useAuth

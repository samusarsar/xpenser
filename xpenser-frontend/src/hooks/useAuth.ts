import { useRouter } from 'vue-router'
import type { NewUserData, UserCredentials } from '@/common/types'
import { useAuthStore } from '@/stores/auth'
import { createUser, signInUser } from '@/utils/auth.utils'
import Cookies from 'js-cookie'
import { SIGN_IN_PATH_NAME } from '@/common/constants'

const useAuth = () => {
  const store = useAuthStore()
  const router = useRouter()

  const signUp = async (newUserData: NewUserData) => {
    const newUserRes = await createUser(newUserData)

    if (newUserRes.ok) {
      router.replace({ path: '/auth/signin' })

      return {
        status: 'success',
        message: ''
      }
    } else {
      throw new Error('Username or Email already taken!')
    }
  }

  const signIn = async (userCredentials: UserCredentials) => {
    const res = await signInUser(userCredentials)
    const data = await res.json()

    if (res.ok) {
      const cookies = Cookies.get()

      const { _id, firstName, lastName, username, email, transactions, avatar, createdAt } = data

      const user = {
        userId: _id,
        firstName,
        lastName,
        username,
        email,
        transactions,
        avatar,
        createdAt
      }

      if (cookies.access_token) store.signInSuccess(user, cookies.access_token)

      router.replace({ path: '/', replace: true })
    } else {
      throw new Error(data.message)
    }
  }

  const signOut = () => {
    Cookies.remove('access_token')
    store.signOutSuccess()
    router.push({ name: SIGN_IN_PATH_NAME })
  }

  return { signUp, signIn, signOut }
}

export default useAuth

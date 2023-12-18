import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserData } from '@/common/types'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<UserData | null>(null)
    const token = ref<string>('')
    const isAuthenticated = ref(false)

    const signInSuccess = (userData: UserData, tokenData: string) => {
      user.value = userData
      token.value = tokenData
      isAuthenticated.value = true
    }

    const signOutSuccess = () => {
      user.value = null
      token.value = ''
      isAuthenticated.value = false
    }

    return { user, token, isAuthenticated, signInSuccess, signOutSuccess }
  },
  {
    persist: true
  }
)

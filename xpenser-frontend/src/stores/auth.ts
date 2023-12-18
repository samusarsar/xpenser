import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserData } from '@/common/types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserData | null>(null)
  const token = ref(null)
  const isAuthenticated = ref(false)

  const signInSuccess = (userData: UserData, token) => {
    user.value = userData
    token.value = token
    isAuthenticated.value = true
  }

  const signOutSuccess = () => {
    user.value = null
    token.value = null
    isAuthenticated.value = false
  }

  return { user, token, isAuthenticated, signInSuccess, signOutSuccess }
})

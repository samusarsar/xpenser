import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserData } from '@/common/types'
import { useTransactionsStore } from './transactions'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const transactionsStore = useTransactionsStore()

    const user = ref<UserData | null>(null)
    const token = ref<string>('')
    const isAuthenticated = ref(false)

    const signInSuccess = (userData: UserData, tokenData: string) => {
      user.value = userData
      token.value = tokenData
      isAuthenticated.value = true
      transactionsStore.transactions = userData.transactions
    }

    const signOutSuccess = () => {
      user.value = null
      token.value = ''
      isAuthenticated.value = false
      transactionsStore.transactions = []
    }

    return { user, token, isAuthenticated, signInSuccess, signOutSuccess }
  },
  {
    persist: true
  }
)

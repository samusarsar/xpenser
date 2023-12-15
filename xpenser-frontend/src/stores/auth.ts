import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', async () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  return { user, isAuthenticated }
})

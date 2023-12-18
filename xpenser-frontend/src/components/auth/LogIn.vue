<template>
  <form @submit.prevent="onLogIn">
    <div class="form-control">
      <label for="text">Username</label>
      <input type="text" id="username" placeholder="Enter username..." v-model="username" />
    </div>
    <div class="form-control">
      <label for="amount">Password</label>
      <input type="password" id="password" placeholder="Enter password..." v-model="password" />
    </div>
    <button class="btn">Log In</button>
  </form>
  <p>Not yet registered? <router-link :to="{ name: SIGN_UP_PATH_NAME }">Sign Up</router-link></p>
</template>

<script setup lang="ts">
import { SIGN_UP_PATH_NAME } from '@/common/constants'
import useAuth from '@/hooks/useAuth'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const { signIn } = useAuth()

const toast = useToast()

const username = ref('')
const password = ref('')

const onLogIn = async () => {
  if (!username.value || !password.value) {
    toast.error('Please fill out all fields! Fields must not be empty.')
    return
  }

  try {
    await signIn({ username: username.value, password: password.value })
  } catch (error: Error | any) {
    toast.error(error.message)
  }
}
</script>

<style scoped></style>

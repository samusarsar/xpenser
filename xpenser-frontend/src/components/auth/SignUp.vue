<template>
  <form @submit.prevent="onSignUp">
    <div class="col-2">
      <div class="form-control">
        <label for="text">First name</label>
        <input type="text" id="firstName" placeholder="Enter first name..." v-model="firstName" />
      </div>
      <div class="form-control">
        <label for="text">Last name</label>
        <input type="text" id="lastName" placeholder="Enter last name..." v-model="lastName" />
      </div>
    </div>
    <div class="form-control">
      <label for="text">Username</label>
      <input type="text" id="username" placeholder="Enter username..." v-model="username" />
    </div>
    <div class="form-control">
      <label for="text">Email</label>
      <input type="text" id="email" placeholder="Enter email..." v-model="email" />
    </div>
    <div class="form-control">
      <label for="amount">Password</label>
      <input type="password" id="password" placeholder="Enter password..." v-model="password" />
    </div>
    <button class="btn">Sign Up</button>
  </form>
  <p>Already registered? <router-link :to="{ name: SIGN_IN_PATH_NAME }">Log In</router-link></p>
</template>

<script setup lang="ts">
import { SIGN_IN_PATH_NAME } from '@/common/constants'
import useAuth from '@/hooks/useAuth'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const { signUp } = useAuth()

const toast = useToast()

const firstName = ref('')
const lastName = ref('')
const username = ref('')
const email = ref('')
const password = ref('')

const onSignUp = async () => {
  if (!firstName.value || !lastName.value || !username.value || !email.value || !password.value) {
    toast.error('Please fill out all fields! Fields must not be empty.')
    return
  }

  try {
    await signUp({
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value
    })
  } catch (error: Error | any) {
    toast.error(error.message)
  }
}
</script>

<style scoped></style>

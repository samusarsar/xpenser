<template>
  <form @submit.prevent="onSignUp">
    <div class="form-control">
      <label for="text">First name</label>
      <input type="text" id="firstName" placeholder="Enter first name..." v-model="firstName" />
    </div>
    <div class="form-control">
      <label for="text">Last name</label>
      <input type="text" id="lastName" placeholder="Enter last name..." v-model="lastName" />
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
  <p>Already registered? <router-link :to="'login'">Log In</router-link></p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const onSignUp = () => {
  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    toast.error('Please fill out all fields! Fields must not be empty.')
  }
}
</script>

<style scoped></style>

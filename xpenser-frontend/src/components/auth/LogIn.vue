<template>
  <form @submit.prevent="onLogIn">
    <div class="form-control">
      <label for="text">Email</label>
      <input type="text" id="email" placeholder="Enter email..." v-model="email" />
    </div>
    <div class="form-control">
      <label for="amount">Password</label>
      <input type="password" id="password" placeholder="Enter password..." v-model="password" />
    </div>
    <button class="btn">Log In</button>
  </form>
  <p>Not yet registered? <router-link :to="'signup'">Sign Up</router-link></p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const email = ref('')
const password = ref('')

const onLogIn = () => {
  if (!email.value || !password.value) {
    toast.error('Please fill out all fields! Fields must not be empty.')
  }
}
</script>

<style scoped></style>

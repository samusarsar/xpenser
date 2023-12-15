<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="addTransaction">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Enter text..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="number" id="amount" placeholder="Enter amount..." v-model="amount" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

const text = ref<string | null>(null)
const amount = ref<number | null>(null)

const emit = defineEmits(['transactionAdded'])

const toast = useToast()

const addTransaction = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled!')
    return
  }

  const transactionData = {
    text: text.value,
    amount: amount.value
  }

  emit('transactionAdded', transactionData)

  text.value = null
  amount.value = null
}
</script>

<style scoped></style>

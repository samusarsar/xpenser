<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onAddTransaction">
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
import { ref } from 'vue'
import { useTransactionsStore } from '@/stores/transactions'
import { useToast } from 'vue-toastification'
import useTransactions from '@/hooks/useTransactions'

const text = ref<string | null>(null)
const amount = ref<number | null>(null)

const { createTransaction } = useTransactions()

const store = useTransactionsStore()

const toast = useToast()

const onAddTransaction = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled!')
    return
  }

  const transactionData = {
    text: text.value,
    amount: amount.value
  }

  try {
    createTransaction(transactionData)

    toast.success(`${transactionData.amount >= 0 ? 'Income' : 'Expense'} transaction added!`)

    text.value = null
    amount.value = null
  } catch (error: Error | any) {
    toast.error('Could not add transaction!')
  }
}
</script>

<style scoped></style>

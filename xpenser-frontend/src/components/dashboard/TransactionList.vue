<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in store.transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn" @click="onDeleteTransaction(transaction.id)">x</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/stores/transactions'

const store = useTransactionsStore()

const onDeleteTransaction = (id: number) => {
  store.deleteTransaction(id)
}
</script>

<style scoped></style>

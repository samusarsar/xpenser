<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

import type { Transaction } from '@/common/types'

const emit = defineEmits(['transactionDeleted'])

const props = defineProps({
  transactions: {
    type: Array<Transaction>,
    required: true
  }
})

const deleteTransaction = (id: number) => {
  emit('transactionDeleted', id)
}
</script>

<style scoped></style>

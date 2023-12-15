<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">${{ store.incomeTotal }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">${{ store.expenseTotal }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/stores/transactions'

const store = useTransactionsStore()
</script>

<style scoped></style>

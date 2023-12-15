<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">${{ incomeTotal }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">${{ expenseTotal }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  incomeTotal: {
    type: Number,
    required: true
  },
  expenseTotal: {
    type: Number,
    required: true
  }
})
</script>

<style scoped></style>

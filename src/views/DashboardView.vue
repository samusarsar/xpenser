<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/dashboard/Header.vue'
import Balance from '../components/dashboard/Balance.vue'
import IncomeExpenses from '../components/dashboard/IncomeExpenses.vue'
import TransactionList from '../components/dashboard/TransactionList.vue'
import AddTransaction from '../components/dashboard/AddTransaction.vue'

import type { Transaction } from '@/common/types'

import { ref } from 'vue'

const transactions: Transaction[] = [
  { id: 1, text: 'Paycheck', amount: 200 },
  { id: 2, text: 'God Of War for PS5', amount: -80 }
]
</script>

<style scoped></style>

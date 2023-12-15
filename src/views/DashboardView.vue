<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :incomeTotal="incomeTotal" :expenseTotal="expenseTotal" />
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
    <AddTransaction @transactionAdded="handleTransactionAdded" />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/dashboard/Header.vue'
import Balance from '../components/dashboard/Balance.vue'
import IncomeExpenses from '../components/dashboard/IncomeExpenses.vue'
import TransactionList from '../components/dashboard/TransactionList.vue'
import AddTransaction from '../components/dashboard/AddTransaction.vue'

import type { Transaction, TransactionData } from '@/common/types'

import { ref, computed, type Ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const transactions: Ref<Transaction[]> = ref([
  { id: 1, text: 'Paycheck', amount: 200 },
  { id: 2, text: 'God Of War for PS5', amount: -80 }
])

const total = computed(() => transactions.value.reduce((acc, t) => acc + t.amount, 0))
const incomeTotal = computed(() =>
  transactions.value.filter((t) => t.amount >= 0).reduce((acc, t) => acc + t.amount, 0)
)
const expenseTotal = computed(() =>
  transactions.value.filter((t) => t.amount < 0).reduce((acc, t) => acc + t.amount, 0)
)

const handleTransactionAdded = (transactionData: TransactionData) => {
  transactions.value.push({
    id: transactions.value.length,
    text: transactionData.text,
    amount: transactionData.amount
  })

  toast.success(`${transactionData.amount >= 0 ? 'Income' : 'Expense'} transaction added!`)
}

const handleTransactionDeleted = (id: number) => {
  transactions.value.splice(id - 1, 1)
}
</script>

<style scoped></style>

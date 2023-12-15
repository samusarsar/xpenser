import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Transaction, TransactionData } from '@/common/types'

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref<Transaction[]>([{ id: 1, text: 'Paycheck', amount: 200 }])

  const total = computed(() => {
    console.log('total hit')
    return transactions.value.reduce((acc, t) => acc + t.amount, 0)
  })
  const incomeTotal = computed(() =>
    transactions.value.filter((t) => t.amount >= 0).reduce((acc, t) => acc + t.amount, 0)
  )
  const expenseTotal = computed(() =>
    transactions.value.filter((t) => t.amount < 0).reduce((acc, t) => acc + t.amount, 0)
  )

  const addTransaction = (transactionData: TransactionData) => {
    transactions.value.push({
      id: transactions.value.length,
      text: transactionData.text,
      amount: transactionData.amount
    })
  }

  const deleteTransaction = (id: number) => {
    transactions.value.splice(id - 1, 1)
  }

  return { transactions, total, incomeTotal, expenseTotal, addTransaction, deleteTransaction }
})

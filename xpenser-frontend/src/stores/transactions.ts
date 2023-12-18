import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Transaction } from '@/common/types'

export const useTransactionsStore = defineStore(
  'transactions',
  () => {
    const transactions = ref<Transaction[]>([])

    const total = computed(() => {
      return transactions.value.reduce((acc, t) => acc + t.amount, 0)
    })
    const incomeTotal = computed(() =>
      transactions.value.filter((t) => t.amount >= 0).reduce((acc, t) => acc + t.amount, 0)
    )
    const expenseTotal = computed(() =>
      transactions.value.filter((t) => t.amount < 0).reduce((acc, t) => acc + t.amount, 0)
    )

    const updateTransactions = (updatedTransactions: Transaction[]) => {
      transactions.value = updatedTransactions
    }

    return { transactions, total, incomeTotal, expenseTotal, updateTransactions }
  },
  {
    persist: true
  }
)

import type { NewTransactionData } from '@/common/types'
import { useTransactionsStore } from '@/stores/transactions'
import { addTransaction, deleteTransaction } from '@/utils/transactions.utils'

const useTransactions = () => {
  const store = useTransactionsStore()

  const createTransaction = async (transactionData: NewTransactionData) => {
    const res = await addTransaction(transactionData)

    if (res.ok) {
      const data = await res.json()
      const { transactions } = data

      store.updateTransactions(transactions)
    } else {
      throw new Error('Could not add transaction')
    }
  }

  const removeTransaction = async (transactionId: string) => {
    const res = await deleteTransaction(transactionId)

    if (res.ok) {
      const data = await res.json()
      const { transactions } = data

      store.updateTransactions(transactions)
    } else {
      throw new Error('Could not delete transaction')
    }
  }

  return { createTransaction, removeTransaction }
}

export default useTransactions

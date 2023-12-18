import { BE_BASE_URL, requestUrls } from '@/common/constants'
import type { NewTransactionData } from '@/common/types'

export const addTransaction = async (transactionData: NewTransactionData) => {
  const fetchURL = BE_BASE_URL + requestUrls.addTransaction

  return await fetch(fetchURL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(transactionData)
  })
}

export const deleteTransaction = async (transactionId: string) => {
  const fetchURL = BE_BASE_URL + requestUrls.deleteTransaction

  return await fetch(fetchURL, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ transactionId })
  })
}

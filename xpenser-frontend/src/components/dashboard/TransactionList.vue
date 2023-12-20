<template>
  <h3>History</h3>
  <ModalTransaction :transaction="selectedTransaction" @close-modal="onCloseModal" />
  <ul id="list" class="list">
    <li
      v-for="transaction in store.transactions"
      :key="transaction._id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
      @click="selectedTransaction = transaction"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn" @click="onDeleteTransaction(transaction._id)">x</button>
    </li>
    <li v-if="!store.transactions.length"><span>No transactions yet...</span></li>
  </ul>
</template>

<script setup lang="ts">
import useTransactions from '@/hooks/useTransactions'
import { useTransactionsStore } from '@/stores/transactions'
import { useToast } from 'vue-toastification'
import ModalTransaction from './ModalTransaction.vue'
import type { Transaction } from '@/common/types'
import { ref } from 'vue'

const { removeTransaction } = useTransactions()

const store = useTransactionsStore()

const toast = useToast()

const selectedTransaction = ref<Transaction | null>(null)

const onDeleteTransaction = async (id: string) => {
  try {
    await removeTransaction(id)

    toast.success('Transaction deleted!')
  } catch (error: Error | any) {
    toast.error('Could not deleted transaction!')
  }
}

const onCloseModal = () => {
  selectedTransaction.value = null
}
</script>

<style scoped></style>

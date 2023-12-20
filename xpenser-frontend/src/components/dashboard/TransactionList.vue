<template>
  <h3>History</h3>
  <ModalTransaction :transaction="selectedTransaction" @close-modal="onCloseModal" />
  <ul id="list" class="list">
    <TransitionGroup>
      <li
        v-for="transaction in store.transactions"
        :key="transaction._id"
        :class="transaction.amount < 0 ? 'minus' : 'plus'"
        @click="onOpenModal($event, transaction)"
      >
        {{ transaction.text }} <span>${{ transaction.amount }}</span>
        <button class="delete-btn" @click="onDeleteTransaction(transaction._id)">x</button>
      </li>
      <li key="no-transactions" v-if="!store.transactions.length">
        <span>No transactions yet...</span>
      </li>
    </TransitionGroup>
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
  selectedTransaction.value = null
  try {
    await removeTransaction(id)

    toast.success('Transaction deleted!')
  } catch (error: Error | any) {
    toast.error('Could not delete transaction!')
  }
}

const onOpenModal = (e: MouseEvent, transaction: Transaction) => {
  if ((e.target! as HTMLElement).classList.value !== 'delete-btn') {
    selectedTransaction.value = transaction
  }
}

const onCloseModal = () => {
  selectedTransaction.value = null
}
</script>

<style scoped>
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.v-enter-active,
.v-leave-active {
  transition: all 500ms ease-in-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

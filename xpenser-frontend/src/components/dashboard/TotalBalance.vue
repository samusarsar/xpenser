<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ store.total.toFixed(2) }}</h1>
</template>

<script setup lang="ts">
import { useTransactionsStore } from '@/stores/transactions'

const store = useTransactionsStore()
</script>

<style scoped></style>

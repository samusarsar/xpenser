<template>
  <NavBar />
  <TheHeader />
  <div class="container">
    <TotalBalance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/ui/TheHeader.vue'
import TotalBalance from '../components/dashboard/TotalBalance.vue'
import IncomeExpenses from '../components/dashboard/IncomeExpenses.vue'
import TransactionList from '../components/dashboard/TransactionList.vue'
import AddTransaction from '../components/dashboard/AddTransaction.vue'
import NavBar from '@/components/ui/NavBar.vue'
</script>

<style scoped></style>

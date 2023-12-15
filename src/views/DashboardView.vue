<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script setup>
import Header from '../components/dashboard/Header.vue'
import Balance from '../components/dashboard/Balance.vue'
import IncomeExpenses from '../components/dashboard/IncomeExpenses.vue'
import TransactionList from '../components/dashboard/TransactionList.vue'
import AddTransaction from '../components/dashboard/AddTransaction.vue'
</script>

<style scoped></style>

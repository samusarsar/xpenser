<template>
  <div class="container">
    <TheHeader />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/ui/TheHeader.vue'
</script>

<style scoped></style>

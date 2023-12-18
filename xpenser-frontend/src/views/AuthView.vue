<template>
  <TheHeader />
  <div class="container">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/ui/TheHeader.vue'
</script>

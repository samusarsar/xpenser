<template>
  <TheHeader />
  <div class="container">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheHeader from '../components/ui/TheHeader.vue'
</script>

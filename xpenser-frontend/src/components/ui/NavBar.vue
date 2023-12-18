<template>
  <nav>
    <p>
      Logged in as: <b>{{ store.user?.username }}</b>
    </p>
    <button class="btn-logout" @click="onSignOut()">Log Out</button>
  </nav>
</template>

<script setup lang="ts">
import useAuth from '@/hooks/useAuth'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()

const { signOut } = useAuth()

const onSignOut = () => {
  signOut()
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
}

.btn-logout {
  color: whitesmoke;
  background-color: rgb(202, 93, 93);
  border: black solid 1px;
  border-radius: 5px;
  cursor: pointer;
  height: fit-content;
  padding: 8px;
  transition: all 200ms ease-out;
}

.btn-logout:hover {
  background-color: rgb(203, 5, 5);
  scale: 1.05;
}

.btn-logout:active {
  background-color: rgb(116, 1, 1);
}
</style>

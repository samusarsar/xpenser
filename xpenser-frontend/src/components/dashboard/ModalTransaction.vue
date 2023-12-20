<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div v-if="transaction" class="modal-backdrop" @click="onCloseModal()"></div>
    </Transition>

    <Transition>
      <div v-if="transaction" class="container modal">
        <div class="header" :class="transaction.amount < 0 ? 'header-expense' : 'header-income'">
          <h3>{{ transaction.text }}</h3>
        </div>
        <div class="body">
          <p><b>Amount:</b></p>
          <p>${{ transaction.amount }}</p>
        </div>
        <div class="footer">
          <button class="btn" @click="onCloseModal()">Close</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps(['transaction'])
const emits = defineEmits(['closeModal'])

const onCloseModal = () => {
  emits('closeModal')
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 11;
  top: 20%;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
}

.modal-backdrop {
  position: fixed;
  z-index: 10;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.284);
}

h3 {
  border-bottom: 0;
}

.header-income {
  background-color: #2ecc71;
}

.header-expense {
  background-color: #c0392b;
}
.header {
  color: white;
  width: 100%;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid black;
  padding: 0 10px;
}

.body {
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
}

.footer {
  display: flex;
  justify-content: end;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
}

.v-enter-to,
.v-leave-from,
.backdrop.enter-to,
.backdrop-leave-from {
  opacity: 1;
  transform: scale(100%);
}

.v-enter-active,
.v-leave-active,
.backdrop-enter-active,
.backdrop-leave-active {
  transition: 300ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(80%);
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>

<template>
  <Teleport to="body" v-if="transaction">
    <div class="modal-backdrop" @click="onCloseModal()"></div>
    <div class="container modal">
      <div class="header" :class="transaction.amount < 0 ? 'header-expense' : 'header-income'">
        <h3>{{ transaction.text }}</h3>
      </div>
      <div class="body">
        <p><b>Amount:</b></p>
        <p>${{ transaction.amount }}</p>
      </div>
      <div class="footer">
        <button class="btn-modal" @click="onCloseModal()">Close</button>
      </div>
    </div>
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

.btn-modal {
  width: fit-content;
  padding: 10px;
  color: white;
  background-color: #778899;
  box-shadow: none;
  border: 1px solid black;
  border-radius: 3px;
}

.btn-modal:hover {
  background-color: #5079a2;
}

.btn-modal:active {
  background-color: #0051a1;
}
</style>

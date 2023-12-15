<template>
  <form>
    <div class="form-control">
      <label for="text">Email</label>
      <input type="text" id="email" placeholder="Enter email..." />
    </div>
    <div class="form-control">
      <label for="amount">Password</label>
      <input type="password" id="password" placeholder="Enter password..." />
    </div>
    <button class="btn">Log In</button>
  </form>
  <p>Not yet registered? <router-link :to="'signup'">Sign Up</router-link></p>
</template>

<script setup lang="ts"></script>

<style scoped></style>

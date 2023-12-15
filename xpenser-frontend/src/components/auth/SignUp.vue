<template>
  <form>
    <div class="form-control">
      <label for="text">First name</label>
      <input type="text" id="firstName" placeholder="Enter first name..." />
    </div>
    <div class="form-control">
      <label for="text">Last name</label>
      <input type="text" id="lastName" placeholder="Enter last name..." />
    </div>
    <div class="form-control">
      <label for="text">Email</label>
      <input type="text" id="email" placeholder="Enter email..." />
    </div>
    <div class="form-control">
      <label for="amount">Password</label>
      <input type="password" id="password" placeholder="Enter password..." />
    </div>
    <button class="btn">Sign Up</button>
  </form>
  <p>Already registered? <router-link :to="'login'">Log In</router-link></p>
</template>

<script setup lang="ts"></script>

<style scoped></style>

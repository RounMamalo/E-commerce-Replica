<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="min-h-fit min-w-full py-5 justify-center flex bg-white"
  >
  <div class="flex min-w-[70%] justify-between px-5">
    <div class="top flex gap-5">
      <div class="home-button">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="top-settings flex gap-5">
        <RouterLink to="/profile"> Profile </RouterLink>
        <!-- <RouterLink to="/messages"> Messages </RouterLink>
        <RouterLink to="/friends"> Friends </RouterLink> -->
        <RouterLink to="/dashboard"> Dashboard </RouterLink>
      </div>
    </div>
    <div class="bottom-settings flex gap-5">
      <div>Register</div>
      <div>Sign In</div>
    </div>
  </div>
  </div>
</template>

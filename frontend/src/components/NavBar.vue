<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="min-h-screen bg-blue-200 w-fit flex flex-col justify-between py-5 px-8"
  >
    <div class="top">
      <div class="home-button mb-10">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="top-settings flex flex-col gap-5">
        <RouterLink to="/profile"> Profile </RouterLink>
        <RouterLink to="/messages"> Messages </RouterLink>
        <RouterLink to="/friends"> Friends </RouterLink>
      </div>
    </div>
    <div class="bottom-settings flex flex-col gap-5">
      <div>Settings</div>
      <div>Sign Out</div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/useUserStore";

const store = useUserStore();

</script>
<template>
  <div class="min-h-fit min-w-full py-5 justify-center flex bg-white">
    <div class="flex min-w-[70%] justify-between">
      <div class="top flex gap-5">
        <div class="home-button">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="top-settings flex gap-5">
          <a>Mall</a>
        </div>
      </div>
      <div class="bottom-settings flex gap-5" v-if="store.isLoggedIn === true">
        <RouterLink to="/profile"> Profile </RouterLink>
        <RouterLink to="/dashboard"> Dashboard </RouterLink>
        <button @click="store.logOut">Log Out</button>
      </div>
      <div class="bottom-settings flex gap-5" v-else-if="store.isLoggedIn === false">
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login">Log In</RouterLink>
      </div>
    </div>
  </div>
</template>

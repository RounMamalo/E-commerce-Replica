<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { RouterLink } from "vue-router";

const userStore = useUserStore();
</script>

<template>
  <div class="main pt-10 flex justify-between items-end">
    <div class="left-side">
      <h1 class="text-3xl">
        Welcome {{ userStore.account ? userStore.account.userName : "Default" }}
      </h1>
      <div class="lower-left flex items-center gap-5">
        <p class="text-lg text-gray-500">
          {{ userStore.account ? userStore.account.email : "default@test.com" }}
        </p>
        <div class="mt-1 text-sm">Edit Profile</div>
      </div>
    </div>
    <div class="right-side flex gap-5 text-lg">
      <div>Check Cart</div>
      <RouterLink to="/product/add">Sell Item</RouterLink>
    </div>
  </div>
</template>

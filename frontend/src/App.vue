<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

</script>

<template>
  <div class="main-screen min-h-screen min-w-full bg-slate-100">
    <NavBar />
    <RouterView />
  </div>
  <!-- <div class="main-screen min-h-full flex min-w-full">
    <NavBar />
    <RouterView />
  </div> -->
</template>

<style scoped></style>

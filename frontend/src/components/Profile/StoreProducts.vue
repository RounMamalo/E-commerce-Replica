<script setup>
import { useUserStore } from "@/stores/useUserStore";
const productStore = useUserStore();
</script>

<template>
  <div class="card" v-for="product in productStore.userProducts">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <div class="numeric-information">
      <p>{{ product.stock }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

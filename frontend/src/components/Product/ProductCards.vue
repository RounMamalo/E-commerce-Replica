<script setup>
import { onMounted } from "vue";
import ProductCard from "./ProductCard.vue";
import { useProductStore } from "@/stores/useProductStore";

const store = useProductStore();
onMounted(() => {
  store.getProducts()
})
</script>

<template>
  <div class="grid grid-cols-4 gap-2 auto-rows-min">
    <ProductCard v-for="product in store.products" :product="product" class="" />
  </div>
</template>

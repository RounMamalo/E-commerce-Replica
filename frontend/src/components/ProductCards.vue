<script setup>
import ProductCard from "./ProductCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const products = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/product/");
    products.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="grid grid-cols-4 gap-2 auto-rows-min">
    <ProductCard v-for="product in products" :product="product" class="" />
  </div>
</template>

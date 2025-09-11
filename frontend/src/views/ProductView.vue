<script setup>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { useProductStore } from "@/stores/useProductStore";

const route = useRoute();
const store = useProductStore();
const productId = route.params.id;

onMounted(() => {
  store.getProduct(productId)
});
</script>

<template>
    {{ store.product.name }}
    {{ store.product.category }}
    {{ store.product.stock }}
    {{ store.product.description }}
    {{ store.product.price }}

</template>

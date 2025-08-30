<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";

const route = useRoute();
const productId = route.params.id;
const product = reactive({
  id: "",
  name: "",
  description: "",
  category: "",
  stock: 0,
  price: 0,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/product/${productId}`
    );
    const objectData = response.data;

    product.name = objectData.name;
    product.description = objectData.description;
    product.category = objectData.category;
    product.stock = objectData.stock;
    product.price = objectData.price;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
    {{ product.name }}
    {{ product.category }}
    {{ product.stock }}
    {{ product.description }}
    {{ product.price }}

</template>

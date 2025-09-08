<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";

const route = useRoute();
const item = ref([])
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

    product.id = objectData._id;
    product.name = objectData.name;
    product.description = objectData.description;
    product.category = objectData.category;
    product.stock = objectData.stock;
    product.price = objectData.price;
  } catch (error) {
    console.log(error);
  }
});

const editProduct = async () => {
  try {
    const response = await axios.put(
      `http://laravel-backend.test/api/products/${productId}`,
      product
    );
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <form @submit.prevent="editProduct">
    <fieldset>
      <label>Name</label>
      <input type="text" v-model="product.name" />
      <label>Description</label>
      <input type="text" v-model="product.description" />
      <label>Category</label>
      <input type="text" v-model="product.category" />
      <label>Stock</label>
      <input type="text" v-model="product.stock" />
      <label>Price</label>
      <input type="text" v-model="product.price" />
    </fieldset>
    <button type="submit">Edit Product</button>
  </form>
</template>

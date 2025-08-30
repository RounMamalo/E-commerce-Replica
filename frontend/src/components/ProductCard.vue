<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const product = reactive({
  id: "",
  name: "",
  description: "",
  category: "",
  stock: 0,
  price: 0,
});
const props = defineProps({
  product: Object,
});
onMounted(() => {
  product.id = props.product._id;
  product.name = props.product.name;
  product.category = props.product.category;
  product.stock = props.product.stock;
  product.price = props.product.price;
  product.description = props.product.description;
});

const deleteProduct = async () => {
    try {
        await axios.delete(`http://localhost:3000/product/${product.id}`)
        window.location.reload()
    } catch (error) {
        console.error(error)
    }
}
</script>
<template>
  <div class="border-2 border-solid border-black p-2 h-fit">
    <RouterLink :to="`/product/${product.id}`">
      <div class="heading flex justify-between">
        <h1>{{ product.name }}</h1>
        <h2>{{ product.price }}</h2>
      </div>
      <div class="body">
        {{ product.description }}
      </div>
      <div class="footer flex justify-between">
        <p>
          {{ product.category }}
        </p>
        <p>
          {{ product.stock }}
        </p>
      </div>
    </RouterLink>
    <div class="buttons-div flex justify-between mt-2 text-sm">
      <!-- @to-do -->
      <button class="bg-blue-500 p-2 text-white rounded-sm">Edit</button>
      <button class="bg-red-500 p-2 text-white rounded-sm" @click="deleteProduct">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import router from "@/route";
import axios from "axios";

const product = reactive({
  name: "",
  description: "",
  category: "",
  price: 0,
  stock: 0,
});
const formSubmitted = ref(false);
const showForm = ref(false);

const onSubmit = async () => {
  try {
    const newProduct = {
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
    };

    const response = await axios.post(
      "http://localhost:3000/product/",
      newProduct
    );
    router.push(`/product/${response.data._id}`)
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex flex-col p-2 border-2 border-black border-solid max-h-fit"
  >
    <div class="flex flex-col">
      <label>Name</label>
      <input
        type="text"
        v-model="product.name"
        class="border-2 border-solid border-black"
      />
    </div>
    <div class="flex flex-col">
      <label>Description</label>
      <input
        type="text"
        v-model="product.description"
        class="border-2 border-solid border-black"
      />
    </div>
    <div class="flex flex-col">
      <label>Category</label>
      <input
        type="text"
        v-model="product.category"
        class="border-2 border-solid border-black"
      />
    </div>
    <div class="flex flex-col">
      <label>Price</label>
      <input
        type="text"
        v-model="product.price"
        class="border-2 border-solid border-black"
      />
    </div>
    <div class="flex flex-col">
      <label>Stock</label>
      <input
        type="text"
        v-model="product.stock"
        class="border-2 border-solid border-black"
      />
    </div>
    <button type="submit" class="bg-black text-white p-2 mt-2">Submit Form</button>
  </form>

  <div v-if="formSubmitted">
    {{ product }}
  </div>
</template>

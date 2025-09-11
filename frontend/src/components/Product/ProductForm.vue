<script setup>
import { onMounted, reactive, ref } from "vue";
import router from "@/route";
import axios from "axios";
import { useProductStore } from "@/stores/useProductStore";
import { useUserStore } from "@/stores/useUserStore";

const productStore = useProductStore();
const userStore = useUserStore();

const product = reactive({
  name: "",
  description: "",
  category: "",
  price: 0,
  stock: 0,
  sellerId: "",
});

const onSubmit = async () => {
  product.sellerId = userStore.account.id;
  console.log(product);
  productStore.addProduct(product);
};
</script>

<template>
  <div
    class="min-w-fit w-[25%] bg-white shadow-xl rounded-md flex flex-col px-10 py-8"
  >
    <RouterLink class="text-red-400 max-w-fit" to="/profile"
      >Go Back</RouterLink
    >
    <form @submit.prevent="onSubmit">
      <h1 class="text-3xl mb-5">Add Product</h1>
      <fieldset class="flex flex-col gap-y-5">
        <div class="flex flex-col">
          <label>Product Name</label>
          <input
            type="text"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="product.name"
          />
        </div>
        <div class="flex flex-col">
          <label>Product Description</label>
          <input
            type="text"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="product.description"
          />
        </div>
        <div class="flex flex-col">
          <label>Product Category</label>
          <input
            type="text"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="product.category"
          />
        </div>
        <div class="number-fields flex gap-2">
          <div class="flex flex-col">
            <label>Price</label>
            <input
              type="number"
              class="border-[1px] border-solid border-gray-400 p-2"
              required
              v-model="product.price"
            />
          </div>
          <div class="flex flex-col">
            <label>Stock</label>
            <input
              type="number"
              class="border-[1px] border-solid border-gray-400 p-2"
              required
              v-model="product.stock"
            />
          </div>
        </div>
      </fieldset>
      <div class="flex justify-center mt-5">
        <button
          type="submit"
          class="text-2xl bg-green-500 text-white border-2 border-solid min-w-[70%] px-2 py-2 font-bold"
        >
          Add Product
        </button>
      </div>
    </form>
  </div>
</template>

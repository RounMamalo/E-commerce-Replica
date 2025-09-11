<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";

const product = reactive({
  id: "",
  name: "",
  description: "",
  category: "Default",
  stock: 0,
  price: 0,
  sellerId: "",
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
  if (props.product.sellerId) {
    product.sellerId = props.product.sellerId.userName;
  }
});

console.log(props.product);
</script>
<template>
  <div class="bg-white p-2 h-fit">
    <RouterLink :to="`/product/${product.id}`">
      <div class="heading flex flex-col justify-between">
        <h1 class="text-xl">{{ product.name }}</h1>
        <h2 class="text-2xl text-[#FF6F61]">{{ product.price }}</h2>
      </div>
      <div class="body line-clamp-2">
        {{ product.description }}
      </div>
      <div class="mt-2 text-gray-500">
        Seller {{ product.sellerId ? product.sellerId : "Uknown" }}
      </div>
    </RouterLink>
  </div>
</template>

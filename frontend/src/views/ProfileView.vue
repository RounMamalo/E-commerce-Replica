<script setup>
import { useUserStore } from "@/stores/useUserStore";
import Heading from "@/components/Profile/Heading.vue";
import StoreProducts from "@/components/Profile/StoreProducts.vue";
import { onMounted } from "vue";

const userStore = useUserStore();
onMounted(() => {
  userStore.getUserProduct();
});
</script>

<template>
  <div class="main-body flex justify-center">
    <div class="container max-w-[70%]">
      <Heading />
      <StoreProducts />
    </div>
  </div>
</template>

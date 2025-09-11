<script setup>
import PostForm from '@/components/Product/ProductForm.vue';
import ProductCards from '@/components/Product/ProductCards.vue';
import axios from 'axios';
import { onMounted } from 'vue';
import Categories from '@/components/HomeViewSelections/Categories.vue';
import Recommendations from '@/components/HomeViewSelections/Recommendations.vue';
import Sale from '@/components/HomeViewSelections/Sale.vue';


</script>
<template>
    <div class="flex justify-center mt-5">
        <div
        class="w-[70%]"
        >
        <Categories />
        <Sale />
        <Recommendations />
        </div>
    </div>
</template>
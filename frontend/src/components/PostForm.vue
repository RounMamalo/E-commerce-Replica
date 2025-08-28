<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

const product = reactive({
    name: "",
    description: "",
    category: "",
    price: 0,
    stock: 0
})
const formSubmitted = ref(false)
const showForm = ref(false)

const onSubmit = async () => {
    try {
        const newProduct = {
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            stock: product.stock
        }

        const response = await axios.post('http://localhost:3000/product/', newProduct)
        console.log("New Product Added")
    } catch (error) {
        console.error(error)
    }
}


</script>

<template>
    <form @submit.prevent="onSubmit">
        <label>Name</label>
        <input type="text" v-model="product.name" />
        <label>Description</label>
        <input type="text" v-model="product.description" />
        <label>Category</label>
        <input type="text" v-model="product.category" />
        <label>Price</label>
        <input type="text" v-model="product.price" />
        <label>Stock</label>
        <input type="text" v-model="product.stock" />
        <button type="submit">Submit Form</button>
    </form>

    <div
        v-if="formSubmitted"
    >
        {{ product }}
    </div>
</template>





import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import axios from 'axios'
import router from '@/route'

export const useProductStore = defineStore('products', () => {
  //data
  const products = ref([])
  const userProducts = ref([])
  const product = reactive({
    id: "",
    name: "",
    description: "",
    category: "",
    stock: 0,
    price: 0,
    sellerId: ""
  });
  //functions

  const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:3000/product/");
        products.value = response.data;
    } catch (error) {
        console.log(error)
    }
  }

  const getProduct = async (productId) => {
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
      product.sellerId = objectData.sellerId.userName;

      return product
    } catch (error) {
      console.log(error);
    }
  }

  const addProduct = async(values) => {
    try {
      const newProduct = {
      name: values.name,
      description: values.description,
      category: values.category,
      price: values.price,
      stock: values.stock,
      sellerId: values.sellerId
    };
      const response = await axios.post("http://localhost:3000/product/", newProduct)

    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(
        `http://localhost:3000/product/${productId}`
        );

        if (response.status === 200) {
        window.location.reload();
        }
    } catch (error) {
        console.error(error);
    }
  }

    return { product, products, getProducts, getProduct, addProduct, deleteProduct }
})
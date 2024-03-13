import { defineStore } from 'pinia'
import { ref } from 'vue'
import  productData  from '@/catalog/product-data'

export const useProductStore = defineStore('products', () => {
    const products = ref([])
    function getProducts(){
        products.value = productData
    }
    return {products, getProducts}
})
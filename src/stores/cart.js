import { defineStore } from 'pinia'
import { ref,computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cart = ref([])
    // cette fonction calcule les prix total de ce qui se trouve dans le cart en commencant par le 0
    //prev est la valeur qui accumulle tous les prix cur.price
    //le 0  qui est le troisieme parametre est la valeur initiale de prev
    const cartTotal = computed(()=> cart.value.reduce((prev, cur)=>prev += cur.price, 0))
    return {cart, cartTotal}
})
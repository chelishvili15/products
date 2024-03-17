<template>
    <div class="flex justify-around">
        <div class="w-1/2 m-4 border-2 border-gray-300 rounded-xl">
            
            <Carousel :images="product?.images" />

            <div class="text-gray-800 mt-10 flex flex-col gap-2">
                <div v-for="title in titles" :key="title" class="flex items-start gap-3">
                    <p class="text-lg font-semibold ">{{ firstLetterToUppercase(title) }}: </p>
                    <p>{{ product && product[title] }}</p>
                </div>
            </div>

        </div>

        <div class="py-10 flex flex-col gap-4">
            <Button>Buy now</Button>
            <Button 
                v-if="basketStore.checkToBasket(product?.id)" 
                @click="basketStore.addToBasket(product)"
            >
                    Add to basket
            </Button>
            <div 
                v-else 
                class="text-red-600 hover:text-red-700 p-1 underline cursor-pointer" 
                @click="basketStore.removeFromBasket(index)"
            >
                Remove from basket
        </div>
        </div>
    </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import Button from '../components/Button.vue'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useBasketStore } from '../stores/BasketStore'

const route = useRoute()
const id = ref(null)
const product = ref()
const basketStore = useBasketStore()

const titles = ['title', 'brand', 'description']

const firstLetterToUppercase = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}

onMounted(() => {
    id.value = Number(route.params.id)

    axios.get(`https://dummyjson.com/products/${id.value}`)
        .then((res) => product.value = res.data)
})

const index = computed(() => {
    return basketStore?.basket.map(val => val.id).indexOf(id.value)
})
</script>
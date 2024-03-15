<template>
    <div class="text-lg w-2/3 m-auto">
        <div 
            v-for="(product, index) in basketStore.basket"
            :key="product.id"
            class="h-14 flex my-3 items-center text-gray-600"
        >
            <div class="h-14 flex items-center justify-start w-1/5"> 
                <img :src="product.images[0]" class="shrink h-full">
            </div>
            <div class="w-3/5">{{ product.title }}</div>
            <div class="w-1/5">{{ basketStore.sums[index] }}</div>
            <div></div>

        </div>
    </div>
</template>

<script setup>
import { useBasketStore } from '../stores/BasketStore.js'

const basketStore = useBasketStore()
</script>
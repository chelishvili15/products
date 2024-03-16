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
            <div class="w-1/5">{{ product.price * basketStore.sums[index]}}$</div>
        </div>
        <div class="flex w-full">
            <div class="w-1/5"></div>
            <div class="w-1/5"></div>
            <div class="w-3/5"></div>
            <div class="w-1/5 text-xl font-semibold border-t-2 pt-3">{{ basketStore.getSumPrice }}$</div>
        </div>

        <Button class="fixed bottom-10 right-1/2 translate-x-1/2">Buy now</Button>
    </div>
</template>

<script setup>
import { useBasketStore } from '../stores/BasketStore.js'
import Button from '../components/Button.vue';

const basketStore = useBasketStore()
</script>
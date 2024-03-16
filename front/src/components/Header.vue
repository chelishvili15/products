<template>
    <div class="flex gap-6 justify-end items-center pr-10 text-xl text-gray-80 h-20 text-gray-600 shadow-lg mb-2">
        <router-link to="/">Home</router-link>
        <router-link to="/basket">
            <div class="relative">
                <RedMark 
                    v-if="basketStore.basket.length" 
                    class="absolute -right-5 -top-4"
                    :amount="basketStore.basket.length"
                />
                <div>Basket</div>
            </div>
        </router-link>
        <div v-if="basketStore.basket.length" class="bg-green-500 text-white px-4 py-2 rounded">
            <router-link to="/check-out">
                <p>Check out</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import RedMark from './RedMark.vue';
import { useBasketStore } from '../stores/BasketStore.js'

const basketStore = useBasketStore()
</script>


<template>
    <div class="flex gap-6 justify-end items-center pr-10 text-xl text-gray-80 h-20 text-gray-800 shadow-lg mb-2">
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
        <router-link to="/check-out">Check Out</router-link>
    </div>
</template>

<script setup>
import RedMark from './RedMark.vue';
import { useBasketStore } from '../stores/BasketStore.js'

const basketStore = useBasketStore()
</script>
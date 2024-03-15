<template>
    <div v-if="basketStore.basket.length" class="text-2xl flex flex-wrap gap-2 justify-start">
        <Card 
            v-for="(product, index) in basketStore.basket" 
            :key="product.id"
            :product="product" 
            :productAmount="true"
        />
        
    </div>
</template>

<script setup>
import { useBasketStore } from '../stores/BasketStore'
import Card from '../components/Card.vue'

const basketStore = useBasketStore()
</script>
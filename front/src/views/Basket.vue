<template>
    <div v-if="basketStore.basket.length" class="flex flex-wrap gap-5 justify-center">
        <Card 
            v-for="(product, index) in basketStore.basket" 
            :key="product.id"
            :product="product" 
            :productAmount="true"
            class="basis-1/6"
        />
        
    </div>
</template>

<script setup>
import { useBasketStore } from '../stores/BasketStore'
import Card from '../components/Card.vue'

const basketStore = useBasketStore()
</script>
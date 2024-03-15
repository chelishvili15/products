<template>
    <div class="text-2xl flex flex-wrap gap-2 justify-around h-[calc(100vh-80px)]  overflow-scroll">
        <Card v-for="product in data?.products" :key="product.id" :product="product"/>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from "vue"

import Card from '../components/Card.vue'

const data = ref(null)

onMounted(() => {
    axios.get('https://dummyjson.com/products')
        .then((res) => data.value = res.data)
})
</script>
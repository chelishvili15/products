<template>
    <div>
        <div class="w-1/2 m-4 border-2 border-gray-300 rounded-xl">
            
            <Carousel :images="product?.images" />

            <div class="text-gray-800 mt-10 flex flex-col gap-2">
                <div v-for="title in titles" :key="title" class="flex items-end gap-3">
                    <p class="text-lg font-semibold ">{{ title }}: </p>
                    <p>{{ product && product[title] }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const id = ref(null)
const product = ref()

const titles = ['title', 'brand', 'description']

onMounted(() => {
    id.value = route.params.path[0]

    axios.get(`https://dummyjson.com/products/${id.value}`)
        .then((res) => product.value = res.data)
})
</script>
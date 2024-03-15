<template>
    <div>
        <Carousel :items-to-show="1.5" :wrap-around="true">
            <Slide v-for="slide in product?.images" :key="slide">
                <div class="carousel__item">
                    <img :src="slide" alt="product.title">
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <div class="text-gray-800 mt-10 flex flex-col gap-2">
            <div class="flex items-end gap-3">
                <p class="text-lg font-semibold ">Name: </p>
                <p>{{ product?.title }}</p>
            </div>

            <div class="flex items-end gap-3">
                <p class="text-lg font-semibold ">brand: </p>
                <p>{{ product?.brand }}</p>
            </div>

            <div class="flex items-start gap-3">
                <p class="text-lg font-semibold ">description: </p>
                <p>{{ product?.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const route = useRoute()
const id = ref(null)
const product = ref(null)

onMounted(() => {
    id.value = route.params.path[0]

    axios.get(`https://dummyjson.com/products/${id.value}`)
        .then((res) => product.value = res.data)
})
</script>
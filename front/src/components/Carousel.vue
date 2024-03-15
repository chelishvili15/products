<template>
    <Carousel :items-to-show="1.5" :wrap-around="true" slideWidth="1">
        <Slide v-for="slide in images" :key="slide">
            <div class="carousel__item">
                <img :src="slide" alt="product.title">
                    </div>
                </Slide>

        <template #addons>
            <Pagination />
            <Navigation />
        </template>
    </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineProps({
    images: {
        type: Array,
        default: () => {}
    }
})
</script>
<template>
  <div 
    class="flex flex-col items-center gap-5 border-4 rounded-xl cursor-pointer"
    @click="cardDetails(product.id)"
  >
    <div class="rounded h-44 overflow-hidden w-52">
      <img :src="product.images[0]" :alt="product.title" class="w-full h-full">
    </div>
    <div class="bg-gray-100 flex justify-between w-full p-2">
      <div class="max-w-24 truncate">{{ product.title }}</div>
      <div>{{ product.price }}$</div>
    </div>
    <div class="h-12 text-xs m-2 text-gray-600 overflow-hidden">{{ product.description }}</div>

    <div v-if="productAmount" @click.stop>
      <ProductAmount :product="product" />
    </div>
    
  </div> 
</template>

<script setup>
import ProductAmount from './ProductAmount.vue'
import { useRouter } from "vue-router"

const router = useRouter()

defineProps({
  product: {
    type: Object,
    default: {}
  },
  productAmount: {
    type: Boolean,
    default: false,
  }
})

const cardDetails = (id) => {
  router.push(`product/${id}`)
}
</script>
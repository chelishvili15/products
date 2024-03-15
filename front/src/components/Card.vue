<template>
  <div 
    class="flex flex-col items-center gap-5 w-44 h-96 overflow-hidden border-4 rounded-xl cursor-pointer"
    @click="cardDetails(product.id)"
  >
    <div class="rounded h-44 overflow-hidden">
      <img :src="product.images[0]" :alt="product.title">
    </div>
    <div class="w-40 truncate">{{ product.title }}</div>
    <div class="h-18 text-xs m-2 text-gray-600 overflow-hidden">{{ product.description }}</div>
  </div> 
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

defineProps({
  product: {
    type: Object,
    default: {}
  }
})

const cardDetails = (id) => {
  router.push(`product/${id}`)
}
</script>
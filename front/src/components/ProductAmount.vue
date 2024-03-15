<template>
    <div class="flex flex-col gap items-start">
        <div class="mt-4 flex gap-4 items-center">
            <Button 
                @click="basketStore.sums[index] > 0 && sum('-')" 
                :class="basketStore.sums[index] == 0 && 'bg-blue-400 hover:bg-blue-400 cursor-not-allowed'"
            >
                -
            </Button>
            <input 
                v-model="basketStore.sums[index]" 
                class="w-20 border-2 border-gray-300 text-center h-10"
                disabled
            />                
            <Button @click="sum('+')">+</Button>
        </div>
        <Button 
            class="w-full bg-red-600 hover:bg-red-700 mt-2"
            @click="basketStore.removeFromBasket(index)"
        >
            Delete
        </Button>
    </div>

</template>

<script setup>
import { computed } from 'vue'
import Button from './Button.vue';
import { useBasketStore } from '../stores/BasketStore';

const basketStore = useBasketStore()

const props = defineProps({
    product: {
        type: Object,
        default: {}
    }
})

const index = computed(() => {
    return basketStore?.basket.map(val => val.id).indexOf(props.product.id)
})

const sum = (mark) => {
    mark === '+' ? basketStore.sums[index.value]++ : basketStore.sums[index.value]--
}
</script>
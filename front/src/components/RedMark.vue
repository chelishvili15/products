<template>
    <div class="bg-red-700 text-white rounded-full w-7 h-7 text-sm flex items-center justify-center">
        {{ amount }}
    </div>
</template>

<script setup>
defineProps({
    amount: {
        type: Number,
        default: 0
    }
})
</script>
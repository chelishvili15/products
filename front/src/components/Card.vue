<template>
  <div class="flex flex-col items-center gap-5 w-44 h-96 overflow-hidden border-4 rounded-xl cursor-pointer">
    <div class="rounded h-min">
      <img :src="card.photo" :alt="card.name">
    </div>
    <div>{{ card.product }}</div>
    <div class="h-18 text-xs m-2 text-gray-600 overflow-hidden">{{ card.description }}</div>
  </div> 
</template>

<script setup>
const card = {
  product: 'Samsung',
  price: 1800,
  photo: 'https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?cs=srgb&dl=pexels-hammad-khalid-1786433.jpg&fm=jpg',
  description: 'dolar ipsum dolar ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum ipsum dolar ipsum' 
}
</script>
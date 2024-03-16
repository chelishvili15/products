<template>

    <div class="flex flex-wrap gap-5 justify-center">
        <Card 
            v-for="product in data?.products" 
            :key="product.id" 
            :product="product"
            :productAmount="false"
            class="basis-1/6"
        />
    </div>

    <!-- Pagination -->

    <div class="flex w-full gap-4 justify-center mt-3">
        <Button @click="getParam > 1 && pag('-')"> << </Button>
        <Button @click="getParam * limit < data.total && pag('+')"> >> </Button>
    </div>

    <!-- ---------------------------------- -->
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Card from '../components/Card.vue'
import Pagination from '../components/Pagination.vue';  
import Button from '../components/Button.vue';

const data = ref(null)
const route = useRoute()
const router = useRouter()

const limit = ref(4)

const getParam = computed(() => {
    return Number(route.params?.pagination?.split('=')[1])
})

const getData = (limit, skip) => {
    axios.get(`https://dummyjson.com/products?limit=${limit}&&skip=${skip}`)
        .then((res) => {
            data.value = res.data
        })
}

onMounted(() => {
    let param = getParam.value
    getData(limit.value, (param - 1) * limit.value)
})

watch(getParam, (newParam, _) => {
    getData(limit.value, (newParam - 1) * limit.value)
})

const pag = (mark) => {
    let param = getParam.value
    
    router.push(`/page=${eval(`${param}${mark}1`)}`)
    
    /* this is equal to this */
    /* if (mark === '+') {
        router.push(`/page=${+param + 1}`)
    } else {
        router.push(`/page=${+param - 1}`)
    } */
}


</script>
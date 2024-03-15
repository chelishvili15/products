<script setup>
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
</script>

<template>
  <layout>
    <Header></Header>
    <div class="h-[calc(100vh-90px)]  overflow-scroll">
      <router-view></router-view>
    </div>
  </layout>
</template>
<script setup>
import Layout from './components/Layout.vue'
import Header from './components/Header.vue'
</script>

<template>
  <layout>
    <Header></Header>
    <router-view></router-view>
  </layout>
</template>
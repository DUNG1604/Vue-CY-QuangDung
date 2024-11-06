<template>
  <div class="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Detail</h2>

    <div class="text-gray-600 mb-2">
      <span class="font-semibold">ID:</span> {{ route.params.id }}
    </div>

    <div class="text-gray-700 text-lg leading-relaxed">
      <span class="font-semibold">Content:</span> {{ route.query.content }}
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<style scoped>
</style>

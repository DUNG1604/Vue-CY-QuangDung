<template>
  <div class="mt-[10px]">
    <div class="flex justify-center gap-4">
      <RouterLink
        :to="{
          name: 'Ex-3.1',
        }"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Bài 1
      </RouterLink>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>

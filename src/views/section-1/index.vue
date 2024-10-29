<template>
  <div class="mt-[10px]">
    <div class="flex justify-center gap-4">
      <RouterLink
        :to="{
            name:'Ex-1'
        }"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Bài 1
      </RouterLink>
      <RouterLink
        :to="{name: 'Ex-2'}"
        class="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
      >
        Bài 2
      </RouterLink>
      <RouterLink
        :to="{name: 'Ex-3'}"
        class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
      >
        Bài 3
      </RouterLink>
      <RouterLink
        :to="{name: 'Ex-4'}"
        class="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-200"
      >
        Bài 4
      </RouterLink>
      <RouterLink
        :to="{name: 'Ex-5'}"
        class="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition duration-200"
      >
        Bài 5
      </RouterLink>
      <RouterLink
        :to="{name: 'Ex-6'}"
        class="bg-amber-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-amber-600 transition duration-200"
      >
        Bài 6
      </RouterLink>
      <RouterLink
        :to="{name: 'Ex-7'}"
        class="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
      >
        Bài 7
      </RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>

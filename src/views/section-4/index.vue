<template>
    <div class="mt-[10px]">
      <div class="flex justify-center gap-4">
        <RouterLink
          :to="{
              name:'Ex-4.1'
          }"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Bài 1
        </RouterLink>
        <RouterLink
          :to="{
              name:'Ex-4.2'
          }"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Bài 2
        </RouterLink>
        <RouterLink
          :to="{
              name:'Ex-4.3'
          }"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Bài 3
        </RouterLink>
        <RouterLink
          :to="{
              name:'Ex-4.4'
          }"
          class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Bài 4
        </RouterLink>
        <RouterLink
            :to="{
              name:'Ex-4.5'
          }"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Bài 5
        </RouterLink>
        <RouterLink
            :to="{
              name:'Ex-4.6'
          }"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Bài 6
        </RouterLink>
      </div>
      <RouterView></RouterView>
    </div>
  </template>
  
  <script setup>
  import { RouterLink, RouterView } from "vue-router";
  </script>
  
  <style scoped></style>
  
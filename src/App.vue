<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <div class="flex flex-col items-center mt-[10px]">
      <div class="flex gap-[10px]">
        <RouterLink to="/section1">
          <button class="p-[5px] border-[1px] rounded-[10px] cursor-pointer">
            Section 1
          </button>
        </RouterLink>
        <RouterLink to="/section2">
          <button class="p-[5px] border-[1px] rounded-[10px] cursor-pointer">
            Section 2
          </button>
        </RouterLink>
        <RouterLink to="/section3">
          <button class="p-[5px] border-[1px] rounded-[10px] cursor-pointer">
            Section 3
          </button>
        </RouterLink>
        <RouterLink to="/section4">
          <button class="p-[5px] border-[1px] rounded-[10px] cursor-pointer">
            Section 4
          </button>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>

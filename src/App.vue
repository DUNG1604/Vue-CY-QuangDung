<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col items-center mt-[10px]">
    <RouterLink to="/section1">
      <button class="p-[5px] border-[1px] rounded-[10px] cursor-pointer">Section 1</button>
    </RouterLink>
    <RouterView />
  </div>
</template>

<style scoped></style>

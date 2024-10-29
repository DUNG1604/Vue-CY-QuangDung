<template>
  <div class="flex flex-col items-center justify-center mt-[10px]">
    <input v-model="isChecked" type="checkbox" class="mb-2 mt-[5px] scale-150" />
    <p
      :style="{
        color: isChecked ? 'green' : 'red',
        fontWeight: isChecked ? 'bold' : 'normal',
      }"
    >
      Hello, my name's Andrew
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false);
</script>

<style scoped></style>

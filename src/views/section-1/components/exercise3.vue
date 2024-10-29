<template>
  <div class="flex flex-col items-center justify-center mt-[10px]">
    <input
      v-model="fontSize"
      type="number"
      placeholder="Nhập kích thước"
      class="border border-gray-300 p-2 rounded mb-4"
    />
    <p :style="{ fontSize: fontSize + 'px' }" class="text-lg">
      Hello my name's Andrew
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fontSize = ref(0); 
</script>


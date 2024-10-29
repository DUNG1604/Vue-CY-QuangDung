<template>
  <div class="flex flex-col items-center justify-center mt-[10px]">
    <input
      v-model="num"
      type="number"
      placeholder="Nhập chiều dài cạnh"
      class="border border-gray-300 p-2 rounded mb-4"
    />
    <p class="text-lg">Diện tích hình vuông: {{ area }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const num = ref(0);
const area = computed(() => {
  return num.value ** 2; 
});
</script>


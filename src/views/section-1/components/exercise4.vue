<template>
  <div class="flex flex-col items-center justify-center mt-[10px]">
    <input
      v-model="num1"
      type="number"
      placeholder="Nhập số thứ nhất"
      class="border border-gray-300 p-2 rounded mb-2"
    />
    <input
      v-model="num2"
      type="number"
      placeholder="Nhập số thứ hai"
      class="border border-gray-300 p-2 rounded mb-4"
    />
    <p class="text-lg">Tổng: {{ sum }}</p>
    <p class="text-lg">Hiệu: {{ subtract }}</p>
    <p class="text-lg">Tích: {{ multiplication }}</p>
    <p class="text-lg">Thương: {{ divide }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const num1 = ref(0);
const num2 = ref(0);

const sum = ref(0);
const subtract = ref(0);
const multiplication = ref(0);
const divide = ref(0);

watch([num1, num2], () => {
  sum.value = num1.value + num2.value;
  subtract.value = num1.value - num2.value;
  multiplication.value = num1.value * num2.value;
  divide.value = num2.value !== 0 ? num1.value / num2.value : "Không thể chia cho 0";
});
</script>

<style lang="scss" scoped></style>

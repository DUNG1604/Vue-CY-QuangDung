<template>
  <div class="flex flex-col items-center justify-center mt-[10px]">
    <h1 class="text-2xl font-bold mb-4">Giỏ hàng</h1>
    <ul class="w-full max-w-md">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="flex justify-between items-center mb-2 p-2 border rounded"
      >
        <span>{{ product.name }}</span>
        <span>{{ product.price }} VND</span>
        <span>{{ product.quantity }}</span>
      </li>
    </ul>
    <p class="mt-4 font-semibold">Tổng giá trị giỏ hàng: {{ totalValue }} VND</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const products = ref([
  { name: "Sản phẩm 1", price: 1000, quantity: 1 },
  { name: "Sản phẩm 2", price: 2000, quantity: 2 },
  { name: "Sản phẩm 3", price: 3000, quantity: 3 },
]);

const totalValue = computed(() => {
  let sum = 0;
  for (let i = 0; i < products.value.length; i++) {
    sum += products.value[i].quantity*products.value[i].price;
  }
  return sum
});
</script>


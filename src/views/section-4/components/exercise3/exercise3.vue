<template>
  <div class="mt-[20px] flex flex-col items-center">
    <div class="flex justify-center">
      <input
        v-model.number="inputData"
        placeholder="Typing min price you want"
        class="w-[250px] px-[5px] py-[3px] border border-black"
        type="number"
      />
    </div>
    <div class="w-[200px]">
      <div
        v-for="(item, index) in listFilter"
        :key="index"
        class="grid grid-cols-3 mt-[5px]"
      >
        <div class="col-span-2">{{ item.name }}</div>
        <div class="col-span-1">{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const listData = ref([
  { name: "name1", price: 36 },
  { name: "name2", price: 33 },
  { name: "name3", price: 17 },
  { name: "name4", price: 47 },
  { name: "name5", price: 13 },
  { name: "name6", price: 47 },
  { name: "name7", price: 29 },
  { name: "name8", price: 31 },
  { name: "name9", price: 36 },
  { name: "name10", price: 22 },
]);
const inputData = ref(0);
const listFilter = computed(() =>
  listData.value.filter((item) => item.price >= inputData.value)
);
</script>

<style lang="scss" scoped></style>

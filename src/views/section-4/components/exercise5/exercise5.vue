<template>
  <div class="flex flex-col items-center justify-center mt-[20px]">
    <form @submit.prevent="handleStart" class="flex items-center flex-col">
      <input v-model="inputValue" class="w-[300px] p-[5px] border-[1px] border-black rounded-[10px]" type="number"
             placeholder="Typing time to count down">
      <button class="px-[10px] py-[5px] border-[1px] border-black rounded-[10px] mt-[10px]">Start</button>
    </form>
    <div class="text-[40px] font-medium">{{ timeCount }}</div>
    <div v-if="isTimeover" class="text-red-600 mt-[5px]">TimeOver</div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";

const inputValue = ref("");
const timeCount = ref(null);
let interval = null;
let isTimeover = false;
const handleStart = () => {
  timeCount.value = inputValue.value;
  inputValue.value = "";
  isTimeover = false;
  interval = setInterval(() => {
    timeCount.value--;
  }, 1000);
}
watch(timeCount, () => {
  if (timeCount.value === 0) {
    console.log("Time over");
    isTimeover = true;
    clearInterval(interval);
  }
})
</script>

<style lang="scss" scoped>

</style>
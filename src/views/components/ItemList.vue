<template>
  <div class="grid grid-cols-6 gap-4 p-4 bg-white shadow-lg rounded-lg mb-4">
    <div class="col-span-3 text-gray-600">{{ id }}</div>
    <div class="col-span-2 text-gray-800 font-semibold">{{ title }}</div>
    <button
        @click="handleViewDetail"
        class="col-span-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200"
    >
      Detail
    </button>
  </div>
</template>

<script setup>
const props =  defineProps({
  id: {
    default: null,
  },
  title: {
    default: "",
  },
  content: {
    default: "",
  }
})

const emit = defineEmits(["handleClick"]);

const handleViewDetail = () => {
  emit("handleClick", props);
}
</script>

<style lang="scss" scoped>
</style>

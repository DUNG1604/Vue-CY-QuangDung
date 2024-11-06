<template>
  <div>
    <div class="w-full overflow-hidden">
      <img class="w-full h-48 object-cover" :src="image" alt="Image" />
    </div>
    <div class="px-3 pb-2 flex justify-between items-center">
      <div>
        <div class="text-lg font-semibold">{{ name }}</div>
        <div>Price: {{ price }}</div>
      </div>
      <button
        @click="showId()"
        :disabled="isConfirm"
        :class="{
          'bg-gray-400 cursor-not-allowed': isConfirm,
          'hover:bg-slate-400': !isConfirm,
        }"
        class="p-1 border border-black rounded-lg"
      >
        Click
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    require: true,
    default: "",
  },
  image: {
    require: true,
    default: "",
  },
  price: {
    require: true,
    default: "",
  },
  id: {
    require: true,
    default: 0,
  },
  isConfirm: {
    require: true,
    default: false,
  },
});
const emit = defineEmits(["send-id"]);
const showId = () => {
  emit("send-id", props.id);
};
</script>

<style lang="scss" scoped></style>

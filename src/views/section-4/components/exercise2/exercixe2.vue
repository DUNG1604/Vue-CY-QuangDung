<template>
    <div class="flex justify-center gap-[20px] mt-[20px] items-center">
        <button class="border border-black rounded-[10px] p-[5px]" v-on:click="count++">Click</button>
        <div>{{ count }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const count = ref(0);
</script>

<style lang="scss" scoped>

</style>
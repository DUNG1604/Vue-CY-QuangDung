<template>
    <div v-if="isConfirm">
        Đã Confirm sản phẩm {{ name }}
    </div>
</template>

<script setup>
    const props = defineProps({
        isConfirm:{
            require: true,
            default: false,
        },
        name:{
            require: true,
            default:"",
        }
    })
</script>

<style lang="scss" scoped>

</style>
<script setup>
import { ref, computed } from "vue";
import Header from "./header.vue";

const productData = {
  image: "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
  imageAlt: "ps5 alt",
  product: "PS5",
  productLink: "https://bachtungps.com.vn/may-sony-playstation-5-ps5-1",
  quantity: 10,
  price: 10000,
  discount: 0.2,
  inStock: true,
  classObject: {
    "bg-green": true,
    "bg-blue": false,
  },
};

const { image, imageAlt, product, price, discount, inStock, classObject } = productData;

const calculateDiscountedPrice = (price, discount) => {
  return price - price * discount;
};

const productDescription = computed(() => {
  return inStock ? `${product} có sẵn` : `${product} hiện không có hàng`;
});

const currency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};
</script>

<template>
  <div :class="classObject" class="mt-[10px]">
    <h2 :style="{ color: inStock ? 'green' : 'red' }">{{ product }}</h2>
    <img :src="image" :alt="imageAlt" />
    <p v-if="inStock">Sản phẩm có sẵn</p>
    <p v-else>Sản phẩm hết hàng</p>
    <div :class="classObject">Thông tin sản phẩm</div>
    <p>Giá sau giảm: {{ calculateDiscountedPrice(price, discount) | currency }}</p>
    <p>{{ productDescription }}</p>
    <p>Giá gốc: {{ price | currency }}</p>
  </div>
</template>

<style scoped>
.bg-green {
  background-color: green;
}
.bg-blue {
  background-color: blue;
}
</style>


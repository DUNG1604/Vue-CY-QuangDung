<template>
  <div class="w-[100vw] mt-[10px]">
    <div class="p-[20px]">List</div>
    <ul class="grid grid-cols-3 gap-[20px] px-[50px]">
      <li
        v-for="item in data.products"
        :key="item.id"
        class="col-span-1 p-[10px] border-[1px] border-black rounded-[10px]"
      >
        <div class="w-full overflow-hidden">
          <img :src="item.image" alt="" />
        </div>
        <div>Tên sản phẩm: {{ item.name }}</div>
        <div>Giá: {{ item.price }}</div>
      </li>
    </ul>
    <div class="p-[20px]">Sản phẩm hot</div>
    <ul class="grid grid-cols-2 gap-[20px] px-[200px]">
      <li
        v-for="item in hotItems"
        :key="item.id"
        class="col-span-1 p-[10px] border-[1px] border-black rounded-[10px]"
      >
        <div class="w-full overflow-hidden">
          <img :src="item.image" alt="" />
        </div>
        <div>Tên sản phẩm: {{ item.name }}</div>
        <div>Giá: {{ item.price }}</div>
      </li>
    </ul>
    <div class="p-[20px]">Sản phẩm đắt/rẻ</div>
    <ul class="grid grid-cols-3 gap-[20px] px-[50px]">
      <li
        v-for="item in data.products"
        :key="item.id"
        class="col-span-1 p-[10px] border-[1px] border-black rounded-[10px]"
      >
        <div class="w-full overflow-hidden">
          <img :src="item.image" alt="" />
        </div>
        <div>Tên sản phẩm: {{ item.name }}</div>
        <div>Giá: {{ item.price }}</div>
        <div v-if="item.price >= expensiveItem">Đắt</div>
        <div v-else>Rẻ</div>
        <button @click="addCart()">Add</button>
      </li>
    </ul>
    <div class="text-center p-[20px]">Trong cart có {{ countCart }} sản phẩm</div>
    <div>
      <div class="flex flex-col items-center">
        <div>Chọn thương thức thanh toán</div>
        <form @submit.prevent="handleSubmit()" id="paymentForm" class="flex flex-col">
          <label v-for="(item, index) in data.paymentMethods" :key="index">
            <input type="radio" name="payment" :value="item.text" v-model="payMethod"/>
            {{ item.text }}
          </label>
          <div class="flex flex-col items-center">
            <button type="submit">Xác nhận</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const data1 = () => {
  return {
    cart: [],
    products: [
      {
        id: 1,
        name: "PS5",
        price: 5555,
        publicDate: "05-05-2021",
        image: "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
        hot: true,
      },
      {
        id: 2,
        name: "PS4",
        price: 4444,
        publicDate: "04-04-2021",
        image:
          "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
        hot: true,
      },
      {
        id: 3,
        name: "PS3",
        price: 3333,
        publicDate: "03-03-2021",
        image: "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
        hot: false,
      },
    ],
    paymentMethods: [
      { text: "COD", value: 1 },
      { text: "Banking", value: 2 },
      { text: "Ứng dụng bên thứ 3", value: 3 },
    ],
    selectedPayment: 2,
  };
};
const data = ref(data1());
const countCart = ref(0);
const payMethod = ref("Banking");

const hotItems = computed(() => {
  return data.value.products.filter((product) => product.hot);
});

const expensiveItem = computed(() => {
  let val = 0;
  const list = data.value.products;
  for (let i = 0; i < list.length; i++) {
    if (list[i].price > val) val = list[i].price;
  }
  return val;
});

const addCart = () => {
  countCart.value++;
};

const handleSubmit = ()=>{
    alert(`Đã thanh toán bằng ${payMethod.value}`);
}

watch(payMethod,()=>{
    alert(`Đã chuyển phương thức thanh toán sang ${payMethod.value}`);
})
</script>

<style lang="scss" scoped></style>

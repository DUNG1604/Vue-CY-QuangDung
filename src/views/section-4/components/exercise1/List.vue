<template>
  <div>
    <div class="grid grid-cols-4 gap-4 mt-5 px-12">
      <div
        v-for="item in listData"
        :key="item.id"
        class="relative col-span-1 border border-black rounded-lg overflow-hidden transform transition-transform hover:scale-105"
      >
        <Item
          @send-id="handleShowId"
          :name="item.name"
          :image="item.image"
          :price="item.price"
          :id="item.id"
          :is-confirm="item.isConfirm"
        ></Item>
      </div>
    </div>
    <div>List Check</div>
    <div v-for="item in listData" :key="item.id">
      <Check :is-confirm="item.isConfirm" :name="item.name"></Check>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Item from "./Item.vue";
import Check from "./Check.vue";
const listData = ref([
  {
    id: 1,
    name: "F-150",
    price: 1554,
    isConfirm: false,
    description: "this is description",
    image: "https://xehay.vn/uploads/images/2023/9/01/xehay-f150-130923%20(11).jpg",
    brand: "ford",
    color: "red",
    option: [
      {
        img: "https://xehay.vn/uploads/images/2023/9/01/xehay-f150-130923%20(11).jpg",
        color: "red",
        quantity: 2,
      },
      {
        img:
          "https://oto365.net/uploads/news/images/ford/f150/cbaee5c3bd102a074d6d0a8b931ef50d.jpg",
        color: "blue",
        quantity: 1,
      },
      {
        img:
          "https://carpla.vn/blog/wp-content/uploads/2024/04/than-xe-f150-co-cac-duong-gan-dap-noi-keo-dai-tu-dau-xe-xuong-cum-den-hau.jpg",
        color: "black",
        quantity: 0,
      },
    ],
    release: "16-04-2024",
  },
  {
    id: 2,
    name: "Raptor v2",
    price: 16434,
    isConfirm: false,
    description: "this is description",
    image:
      "https://oto365.net/uploads/news/images/ford/f150/cbaee5c3bd102a074d6d0a8b931ef50d.jpg",
    brand: "ford",
    color: "blue",
    option: [
      {
        img: "https://xehay.vn/uploads/images/2023/9/01/xehay-f150-130923%20(11).jpg",
        color: "red",
        quantity: 2,
      },
      {
        img:
          "https://oto365.net/uploads/news/images/ford/f150/cbaee5c3bd102a074d6d0a8b931ef50d.jpg",
        color: "blue",
        quantity: 1,
      },
      {
        img:
          "https://carpla.vn/blog/wp-content/uploads/2024/04/than-xe-f150-co-cac-duong-gan-dap-noi-keo-dai-tu-dau-xe-xuong-cum-den-hau.jpg",
        color: "black",
        quantity: 3,
      },
    ],
    release: "16-04-2024",
  },
  {
    id: 3,
    name: "Raptor v3",
    price: 1284,
    isConfirm: false,
    description: "this is description",
    image:
      "https://oto365.net/uploads/news/images/ford/f150/cbaee5c3bd102a074d6d0a8b931ef50d.jpg",
    brand: "ford",
    color: "blue",
    option: [
      {
        img: "https://xehay.vn/uploads/images/2023/9/01/xehay-f150-130923%20(11).jpg",
        color: "red",
        quantity: 0,
      },
      {
        img:
          "https://oto365.net/uploads/news/images/ford/f150/cbaee5c3bd102a074d6d0a8b931ef50d.jpg",
        color: "blue",
        quantity: 1,
      },
      {
        img:
          "https://carpla.vn/blog/wp-content/uploads/2024/04/than-xe-f150-co-cac-duong-gan-dap-noi-keo-dai-tu-dau-xe-xuong-cum-den-hau.jpg",
        color: "black",
        quantity: 0,
      },
    ],
    release: "16-04-2024",
  },
  {
    id: 4,
    name: "F-150 v4",
    price: 9934,
    isConfirm: false,
    description: "this is description",
    image:
      "https://carpla.vn/blog/wp-content/uploads/2024/04/than-xe-f150-co-cac-duong-gan-dap-noi-keo-dai-tu-dau-xe-xuong-cum-den-hau.jpg",
    brand: "ford",
    color: "black",
    option: [
      {
        img: "https://xehay.vn/uploads/images/2023/9/01/xehay-f150-130923%20(11).jpg",
        color: "red",
        quantity: 0,
      },
      {
        img:
          "https://oto365.net/uploads/news/images/ford/f150/cbaee5c3bd102a074d6d0a8b931ef50d.jpg",
        color: "blue",
        quantity: 1,
      },
      {
        img:
          "https://carpla.vn/blog/wp-content/uploads/2024/04/than-xe-f150-co-cac-duong-gan-dap-noi-keo-dai-tu-dau-xe-xuong-cum-den-hau.jpg",
        color: "black",
        quantity: 6,
      },
    ],
    release: "16-04-2024",
  },
]);
const handleShowId = (id) => {
  listData.value[id - 1].isConfirm = !listData.value[id - 1].isConfirm;
  alert(`id nhận từ con là ${id}`);
};
</script>

<style lang="scss" scoped></style>

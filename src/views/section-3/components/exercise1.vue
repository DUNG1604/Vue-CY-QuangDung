<template>
  <div class="w-full mt-10">
    <div class="flex float-end items-center gap-[10px]">
      <span>Cart have {{ sumItem }} item</span>
      <button
        type="button"
        class="btn btn-primary mr-[50px]"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        View Cart
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Cart</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="overflow-y-scroll max-h-[300px]">
                <div
                  v-for="(item, index) in cart.listCart"
                  :key="index"
                  class="grid grid-cols-6 gap-[10px] items-center mb-[10px]"
                >
                  <div class="col-span-2">
                    <div class="w-full h-[80px] overflow-hidden">
                      <img class="w-full h-full object-cover" :src="item.img" alt="" />
                    </div>
                  </div>

                  <div class="col-span-1">{{ item.name }}</div>
                  <div class="col-span-1">{{ item.color }}</div>
                  <div class="col-span-1">{{ formatCurrency(item.price) }}</div>
                  <div class="col-span-1 text-center">{{ item.quantity }}</div>
                </div>
              </div>
              <div class="flex justify-end mr-[40px] mt-[20px] text-[20px] font-[600]">
                <div>Total: {{ formatCurrency(sumCart) }}</div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button @click="handlePay()" type="button" class="btn btn-primary">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-5 px-12">
      <div
        v-for="(item, index) in listData"
        :key="item.id"
        class="relative col-span-1 border border-black rounded-lg overflow-hidden transform transition-transform hover:scale-105"
      >
        <div v-if="item.isHot" class="bg-yellow-300 p-1 absolute top-0 left-0">Hot</div>
        <div class="w-full overflow-hidden">
          <img class="w-full h-48 object-cover" :src="item.image" alt="Image" />
        </div>
        <div class="px-3 pb-2 flex justify-between items-center">
          <div>
            <div class="text-lg font-semibold">{{ item.name }}</div>
            <div>Price: {{ formatCurrency(item.price) }}</div>
          </div>
          <button
            @click="handleChooseItem(index)"
            class="p-1 border border-black rounded-lg hover:bg-slate-400"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ listData?.[item.indexItemAdd]?.name || null }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mx-auto h-[200px] w-[90%] overflow-hidden">
              <img
                class="w-full h-full object-cover"
                :src="setImg(item.selectedColor)"
                alt=""
              />
            </div>
            <div class="grid grid-cols-6 mt-[10px]">
              <div class="col-span-4">
                <div>
                  Price:
                  {{ formatCurrency(listData?.[item.indexItemAdd]?.price || null) }}
                </div>
                <div>Brand: {{ listData?.[item.indexItemAdd]?.brand || null }}</div>
                <div>
                  Description: {{ listData?.[item.indexItemAdd]?.description || null }}
                </div>
                <div>
                  Release: {{ formatDate(listData?.[item.indexItemAdd]?.release || "") }}
                </div>
              </div>
              <div class="col-span-2">
                <div>
                  <div
                    v-for="(option, index) in listData?.[item.indexItemAdd]?.option || []"
                    :key="index"
                    class="flex items-center gap-[5px] mt-[5px]"
                  >
                    <input
                      type="radio"
                      :disabled="!checkQuantity(option.quantity || 0)"
                      v-model="item.selectedColor"
                      :value="option.color"
                    />

                    <div
                      class="w-[30px] h-[30px] rounded-full"
                      :style="{ backgroundColor: option.color }"
                    ></div>

                    <div>Quantity: {{ option.quantity }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button
              @click="handleAddToCart(item.indexItemAdd)"
              type="button"
              class="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const listData = ref([
  {
    id: 1,
    name: "F-150",
    price: 1554,
    isHot: true,
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
    isHot: true,
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
    isHot: false,
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
    isHot: true,
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

const item = ref({
  indexItemAdd: null,
  checkColor: null,
  selectedColor: null,
});

const cart = ref({
  listCart: [],
});

const checkQuantity = (quantity) => {
  return quantity > 0 ? true : false;
};

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `Day ${day} Month ${month} Years ${year}`;
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(amount);
};
const setImg = (selectedColor) => {
  if (selectedColor == "red")
    return "https://xehay.vn/uploads/images/2023/9/01/xehay-f150-130923%20(11).jpg";
  if (selectedColor == "blue")
    return "https://oto365.net/uploads/news/images/ford/f150/cbaee5c3bd102a074d6d0a8b931ef50d.jpg";
  if (selectedColor == "black")
    return "https://carpla.vn/blog/wp-content/uploads/2024/04/than-xe-f150-co-cac-duong-gan-dap-noi-keo-dai-tu-dau-xe-xuong-cum-den-hau.jpg";
};

const handleChooseItem = (index) => {
  item.value.selectedColor = listData.value[index].color;
  item.value.indexItemAdd = index;
  //   console.log("index", index);
};

const handleAddToCart = (index) => {
  const selectedColor = item.value.selectedColor;

  const itemAdd = {
    id: listData.value[index].id,
    name: listData.value[index].name,
    color: selectedColor,
    price: listData.value[index].price,
    img: setImg(selectedColor),
    quantity: 1,
  };

  for (let i = 0; i < cart.value.listCart.length; i++) {
    if (
      cart.value.listCart[i].id == itemAdd.id &&
      cart.value.listCart[i].color == itemAdd.color
    ) {
      cart.value.listCart[i].quantity = cart.value.listCart[i].quantity + 1;
      for (let i = 0; i < 3; i++) {
        if (listData.value[itemAdd.id - 1].option[i].color == itemAdd.color) {
          if (listData.value[itemAdd.id - 1].option[i].quantity <= 0) {
            alert("Đã hết hàng");
            return;
          } else {
            --listData.value[itemAdd.id - 1].option[i].quantity;
          }
        }
      }
      return;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (listData.value[itemAdd.id - 1].option[i].color == itemAdd.color) {
      if (listData.value[itemAdd.id - 1].option[i].quantity <= 0) {
        alert("Đã hết hàng");
        return;
      } else {
        cart.value.listCart.push(itemAdd);
        --listData.value[itemAdd.id - 1].option[i].quantity;
        // console.log(listData.value[itemAdd.id - 1].option[i].quantity);
        // alert("Thêm số lượng thành công");
      }
    }
  }
};
const handlePay = ()=>{
    cart.value.listCart = [];
    alert("Mua hàng thành cômg");
}
const sumCart = computed(() =>
  cart.value.listCart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0)
);
const sumItem = computed(() =>
  cart.value.listCart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)
);
</script>

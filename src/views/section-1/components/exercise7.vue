<template>
  <div class="flex flex-col items-center justify-center mt-[10px]">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <input
        v-model="fullName"
        type="text"
        placeholder="Họ tên"
        required
        class="border border-gray-300 p-2 rounded"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="border border-gray-300 p-2 rounded"
      />
      <input
        v-model="phone"
        type="text"
        placeholder="Số điện thoại"
        required
        class="border border-gray-300 p-2 rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Mật khẩu"
        class="border border-gray-300 p-2 rounded"
      />
      <input
        v-model="rePassword"
        type="password"
        placeholder="Nhập lại mật khẩu"
        class="border border-gray-300 p-2 rounded"
      />
      <button :class="buttonClass" :disabled="!isValid" type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const fullName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const rePassword = ref("");
const checkForm = ref(false);

const isValid = computed(() => {
  return password.value.length >= 8 && password.value == rePassword.value;
});

const buttonClass = computed(() => {
  return isValid.value
    ? "bg-blue-500 px-4 py-2 rounded"
    : "bg-gray-300 px-4 py-2 rounded cursor-not-allowed";
});

watch([fullName, email, phone, password, rePassword], () => {
  if (fullName.value && email.value && phone.value && password.value && rePassword.value) {
    checkForm.value = true;
  }
});

const handleSubmit = () => {
  if (checkForm.value) {
    alert("Oke rồi nhé!");
    fullName.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
    rePassword.value = "";
    formCompleted.value = false;
  }
};
</script>

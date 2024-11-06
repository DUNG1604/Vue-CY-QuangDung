<template>
  <div class="flex justify-center mt-[20px]">
    <div class="w-[400px]">
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center relative">
        <input
          v-model="dataForm.username"
          placeholder="username"
          class="border border-black px-[10px] py-[5px] rounded-[10px] mt-[10px]"
          type="text"
        />
        <span v-if="usernameError" class="text-red-500 absolute top-[46px]">{{
          usernameError
        }}</span>

        <input
          v-model="dataForm.email"
          placeholder="email"
          class="border border-black px-[10px] py-[5px] rounded-[10px] mt-[30px]"
          type="text"
        />
        <span v-if="emailError" class="text-red-500 absolute top-[112px]">{{
          emailError
        }}</span>

        <input
          v-model="dataForm.password"
          placeholder="password"
          class="border border-black px-[10px] py-[5px] rounded-[10px] mt-[30px]"
          type="password"
        />
        <span v-if="passwordError" class="text-red-500 absolute top-[175px]">{{
          passwordError
        }}</span>

        <button
          class="mt-[30px] border-[1px] border-black w-[80px] rounded-[10px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const dataForm = ref({
  username: "",
  email: "",
  password: "",
});

const usernameError = ref("");
const emailError = ref("");
const passwordError = ref("");
const isFormValid = ref(false);

watch(
  () => dataForm.value.username,
  (newVal) => {
    usernameError.value =
      newVal.length < 6 ? "Username must be at least 6 characters long" : "";
  }
);

watch(
  () => dataForm.value.email,
  (newVal) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = !regex.test(newVal) ? "Email need true format" : "";
  }
);

watch(
  () => dataForm.value.password,
  (newVal) => {
    passwordError.value =
      newVal.length < 6 ? "Password must be at least 6 characters long" : "";
  }
);

watch([usernameError, emailError, passwordError], () => {
  isFormValid.value = !usernameError.value && !emailError.value && !passwordError.value;
});

const handleSubmit = () => {
  if (isFormValid.value) {
    alert("oke");
  } else {
    alert("not oke");
  }
};
</script>

